import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { products } from '@/lib/products'
import { getStripePriceId, hasStripePriceId } from '@/lib/stripe-products'

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()
    const { productId } = await request.json()

    // Find product
    const product = products.find(p => p.id === productId)
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Détecter si on est en mode TEST ou LIVE
    const isLiveMode = process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_')
    const priceId = getStripePriceId(productId)

    let sessionConfig: any = {
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      metadata: {
        productId: product.id,
        productName: product.name,
        productPrice: product.price.toString(),
      },
      billing_address_collection: 'required',
      customer_creation: 'always',
      locale: 'fr',
      allow_promotion_codes: true,
      submit_type: 'pay',
      payment_intent_data: {
        metadata: {
          productId: product.id,
          productName: product.name
        }
      }
    }

    // Si on a un price ID LIVE et qu'on est en mode LIVE, l'utiliser
    if (isLiveMode && priceId) {
      sessionConfig.line_items = [{
        price: priceId,
        quantity: 1,
      }]
      console.log(`🔴 LIVE MODE - Using price ID: ${priceId}`)
    } else {
      // Sinon, créer le prix dynamiquement (mode TEST ou fallback)
      sessionConfig.line_items = [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
            description: product.description,
            images: product.icon ? [] : [],
            metadata: {
              productId: product.id
            }
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      }]
      console.log(`🟢 TEST MODE - Creating dynamic price: ${product.price}€`)
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create(sessionConfig)

    console.log(`✅ Checkout session created for ${product.name}`)
    console.log(`Session ID: ${session.id}`)
    console.log(`Mode: ${isLiveMode ? 'LIVE' : 'TEST'}`)

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('❌ Stripe error:', error.message)
    console.error('Full error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session', details: error.message },
      { status: 500 }
    )
  }
}