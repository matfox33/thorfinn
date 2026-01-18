'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CreditCard, Lock, Check } from 'lucide-react'

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isProcessing, setIsProcessing] = useState(false)
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242')
  const [email, setEmail] = useState('client@example.com')
  const [name, setName] = useState('Jean Dupont')

  const productName = searchParams.get('name') || 'Pack Premium'
  const productPrice = searchParams.get('price') || '97'
  const productId = searchParams.get('productId') || 'test'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simuler le traitement du paiement
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Envoyer l'email de test
    try {
      const response = await fetch('/api/send-test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          productName: decodeURIComponent(productName),
          amount: `${productPrice}€`
        }),
      })

      if (response.ok) {
        console.log('✅ Email de test envoyé avec succès')
      }
    } catch (error) {
      console.error('Erreur envoi email:', error)
    }

    // Rediriger vers la page de succès
    router.push('/success?session_id=cs_test_' + Date.now())
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header Stripe */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Page de Paiement Test</h1>
          <p className="text-sm text-gray-600 mt-2">Mode test activé - Aucun paiement réel</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800 font-medium flex items-center">
              <span className="mr-2">⚠️</span>
              Mode Test - Utilisez la carte 4242 4242 4242 4242
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numéro de carte
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="4242 4242 4242 4242"
                />
                <CreditCard className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date d'expiration
                </label>
                <input
                  type="text"
                  defaultValue="12/25"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  defaultValue="123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123"
                />
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{decodeURIComponent(productName)}</span>
                <span className="font-bold text-lg">{productPrice}€</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Mode test</span>
                <span>Aucun prélèvement</span>
              </div>
            </div>

            {/* Bouton de paiement */}
            <button
              type="submit"
              disabled={isProcessing}
              className={`
                w-full py-3 px-6 rounded-lg font-medium text-white
                flex items-center justify-center gap-2 transition-all
                ${isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                }
              `}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Traitement en cours...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Payer {productPrice}€ (Test)
                </>
              )}
            </button>
          </form>

          {/* Sécurité */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Lock className="w-3 h-3" />
            <span>Paiement sécurisé par Stripe (Mode Test)</span>
          </div>
        </div>

        {/* Info additionnelle */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            En mode test, aucune carte n'est débitée.
            <br />
            Un email de confirmation sera envoyé automatiquement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestPaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}