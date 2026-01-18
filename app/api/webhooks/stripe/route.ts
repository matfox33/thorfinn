import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const stripe = getStripe()
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // Retrieve session with line items
        const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
          session.id,
          {
            expand: ['line_items', 'customer'],
          }
        )

        const customerEmail = sessionWithLineItems.customer_details?.email
        const customerName = sessionWithLineItems.customer_details?.name || 'Champion'
        const productId = sessionWithLineItems.metadata?.productId
        const productName = sessionWithLineItems.metadata?.productName
        const amount = ((sessionWithLineItems.amount_total || 0) / 100).toFixed(2) + '€'

        if (customerEmail && productId) {
          // Send emails
          const { sendPurchaseEmail, sendSupplierNotification } = await import('@/lib/email')
          const { autoSendSupplierDocs } = await import('@/lib/auto-send-suppliers')

          // 1. Email de confirmation client standard
          await sendPurchaseEmail({
            to: customerEmail,
            productName: productName || 'Votre pack fournisseur',
            productId,
            customerName,
            amount,
          })

          // 2. AUTOMATIQUEMENT envoyer les documents fournisseurs
          try {
            await autoSendSupplierDocs({
              productId,
              productName: productName || 'Votre pack',
              customerEmail,
              customerName
            })
            console.log('✅ Supplier docs automatically sent to customer!')
          } catch (supplierDocsError) {
            console.error('⚠️ Failed to send supplier docs:', supplierDocsError)
            // Ne pas bloquer le webhook si l'envoi échoue
          }

          // 3. Notification admin (optionnel)
          try {
            await sendSupplierNotification({
              productId,
              productName: productName || 'Produit',
              customerName,
              customerEmail,
              amount,
              sessionId: session.id
            })
            console.log('✅ Admin notifications sent')
          } catch (supplierError) {
            // Ne pas bloquer si l'email admin échoue
            console.error('⚠️  Admin notification failed (non-critical):', supplierError)
          }

          console.log(`
            ========================================
            🎉 NOUVELLE VENTE CONFIRMÉE !
            ========================================
            Client: ${customerName}
            Email: ${customerEmail}
            Produit: ${productName}
            Montant: ${amount}
            Session ID: ${session.id}
            ========================================
          `)
        }

        console.log('Payment successful for session:', session.id)
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment failed:', paymentIntent.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}