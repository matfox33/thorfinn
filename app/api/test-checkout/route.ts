import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'
import { sendPurchaseEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json()

    // Find product
    const product = products.find(p => p.id === productId)
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    // Générer un ID de session test
    const testSessionId = `cs_test_${Date.now()}_${Math.random().toString(36).substring(7)}`

    // Email de test (vous pouvez modifier ceci)
    const testEmail = 'test@wayneresselfr.com'
    const testCustomerName = 'Client Test'

    // Utiliser notre page de paiement test locale
    const testPaymentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/test-payment?productId=${product.id}&price=${product.price}&name=${encodeURIComponent(product.name)}`

    console.log(`
      ========================================
      🧪 MODE TEST ACTIVÉ
      ========================================
      Produit: ${product.name}
      Prix: ${product.price}€
      Session ID: ${testSessionId}

      POUR TESTER LE PAIEMENT:
      1. Cliquez sur le lien ci-dessous
      2. Utilisez la carte: 4242 4242 4242 4242
      3. Date: N'importe quelle date future
      4. CVC: 123

      URL TEST: ${testPaymentUrl}
      ========================================
    `)

    // Envoyer immédiatement un email de test
    try {
      await sendPurchaseEmail({
        to: testEmail,
        productName: product.name,
        productId: product.id,
        customerName: testCustomerName,
        amount: `${product.price}€`
      })

      console.log(`
        📧 EMAIL DE TEST ENVOYÉ !
        Destinataire: ${testEmail}
        Produit: ${product.name}
      `)
    } catch (emailError) {
      console.error('Erreur envoi email test:', emailError)
    }

    // Retourner l'URL de notre page de paiement test
    return NextResponse.json({
      sessionId: testSessionId,
      url: testPaymentUrl,
      testMode: true,
      message: 'Mode test activé - Utilisez la carte 4242 4242 4242 4242'
    })

  } catch (error) {
    console.error('Test checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create test session' },
      { status: 500 }
    )
  }
}