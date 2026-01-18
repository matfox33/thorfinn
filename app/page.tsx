'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import FAQ from '@/components/FAQ'
import NotificationBar from '@/components/NotificationBar'
import { products } from '@/lib/products'
import { Product } from '@/types/product'
import { Sparkles, Star, Users, Shield, Zap, TrendingUp } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const handleBuyClick = async (product: Product) => {
    setIsLoading(true)
    try {
      // Use Netlify Function instead of Next.js API route
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirection vers la vraie page Stripe Checkout
        window.location.href = data.url
      } else if (data.sessionId) {
        // Fallback si url n'est pas retournée
        console.error('Session ID reçu mais pas d\'URL:', data.sessionId)
        alert('Une erreur est survenue. Veuillez réessayer.')
      } else {
        console.error('Pas d\'URL de checkout reçue:', data)
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <NotificationBar />
      <main className="min-h-screen relative overflow-hidden pt-10">
        {/* Animated background effects */}
        <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-20 relative">
          {/* Animated banner */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-neon-blue/30 animate-pulse">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-semibold text-neon-blue">
              OFFRE LIMITÉE - 72 Viewers en Live
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="inline-block" style={{
              background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              WAYNE
            </span>
            <span className="text-white ml-2 md:ml-3">
              RESSEL
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto px-4">
            ACCÉDEZ AUX FOURNISSEURS EXCLUSIFS QUI ONT FAIT MON
            <span className="text-neon-blue neon-text ml-2 inline-block">SUCCÈS</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: Users, value: '10,284', label: 'Clients Satisfaits' },
              { icon: Star, value: '4.98/5', label: 'Note Moyenne' },
              { icon: TrendingUp, value: '+3000', label: 'Revendeurs Actifs' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-xl
                  glass-effect border transition-all duration-300
                  ${hoveredStat === index
                    ? 'border-neon-blue/50 scale-110 neon-border'
                    : 'border-white/10'
                  }
                `}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <stat.icon className="w-6 h-6 text-neon-blue" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-medium">Paiement Sécurisé</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-yellow-400 font-medium">Accès Instantané</span>
            </div>
          </div>
        </header>

        {/* Floating particles animation */}
        <div className="fixed inset-0 -z-5 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
              style={{
                left: `${(i * 5.3) % 100}%`,
                top: `${(i * 7.1) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + (i % 5) * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Products Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-text">
              Choisissez Votre Pack 🚀
            </h2>
            <p className="text-gray-400">
              Rejoignez <span className="text-neon-blue font-bold">3000+ revendeurs</span> qui génèrent déjà des profits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyClick={handleBuyClick}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 relative">
          <div className="glass-effect rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Commencer Votre
              <span className="inline-block ml-2" style={{
                background: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ne manquez pas cette opportunité exclusive.
              <br />
              Les prix augmentent dans:
            </p>

            {/* Countdown timer */}
            <div className="flex justify-center gap-4 mb-8">
              {['02', '14', '38'].map((time, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 border border-neon-blue/30">
                  <div className="text-3xl font-bold text-white">{time}</div>
                  <div className="text-xs text-gray-400">
                    {index === 0 ? 'HEURES' : index === 1 ? 'MINUTES' : 'SECONDES'}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick(products[0])}
              disabled={isLoading}
              className="px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-neon-blue/50 uppercase tracking-wider"
            >
              {isLoading ? 'Chargement...' : 'ACCÉDER MAINTENANT →'}
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10 mt-20">
          <p className="text-gray-400 text-sm">
            © 2026 WayneRessel. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
              Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
              Contact
            </a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(0, -100vh);
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
      </main>
    </>
  )
}