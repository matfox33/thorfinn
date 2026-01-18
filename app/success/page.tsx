'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, ArrowRight, Download, Mail } from 'lucide-react'
import Link from 'next/link'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    // Simulate verification
    if (sessionId) {
      setTimeout(() => setIsVerified(true), 1000)
    }
  }, [sessionId])

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="glass-effect rounded-3xl p-12 border border-white/10">
          {/* Success animation */}
          <div className="mb-8 relative">
            <div className="inline-block animate-bounce">
              <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-green-400/20 animate-ping" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              Félicitations !
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Votre paiement a été confirmé avec succès 🎉
          </p>

          {isVerified && (
            <div className="space-y-6 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-neon-blue text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email envoyé</h3>
                  <p className="text-gray-400 text-sm">
                    Vérifiez votre boîte mail pour accéder à vos fournisseurs exclusifs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-neon-blue text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Accès instantané</h3>
                  <p className="text-gray-400 text-sm">
                    Vos liens d'accès sont maintenant actifs et prêts à l'emploi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-neon-blue text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Support 24/7</h3>
                  <p className="text-gray-400 text-sm">
                    Notre équipe est disponible pour vous accompagner dans votre succès
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg neon-button font-semibold hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Vérifier mes emails
            </button>

            <Link
              href="/"
              className="px-6 py-3 rounded-lg glass-effect border border-white/20 font-semibold hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-12 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <p className="text-yellow-400 text-sm">
              💡 Conseil Pro: Commencez par explorer le Pack Élite pour maximiser vos profits dès le début !
            </p>
          </div>

          {/* Session ID */}
          {sessionId && (
            <p className="text-gray-500 text-xs mt-8">
              Référence de transaction: {sessionId.substring(0, 20)}...
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Chargement...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}