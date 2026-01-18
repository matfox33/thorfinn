import { NextRequest, NextResponse } from 'next/server'
import { sendPurchaseEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email, name, productName, amount } = await request.json()

    console.log(`
      ========================================
      📧 ENVOI EMAIL DE TEST
      ========================================
      Destinataire: ${email}
      Nom: ${name}
      Produit: ${productName}
      Montant: ${amount}
      ========================================
    `)

    // Envoyer l'email
    await sendPurchaseEmail({
      to: email,
      productName: productName || 'Pack Elite Fournisseurs',
      productId: `test_${Date.now()}`,
      customerName: name || 'Client Test',
      amount: amount || '197€'
    })

    console.log('✅ Email de test envoyé avec succès !')

    return NextResponse.json({
      success: true,
      message: 'Email de test envoyé'
    })

  } catch (error) {
    console.error('Erreur envoi email test:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}