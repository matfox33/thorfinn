'use client'

export default function NotificationBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink py-2">
      <div className="relative overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="inline-block px-8">
            🔥 OFFRE LIMITÉE - 50% DE RÉDUCTION SUR TOUS LES PACKS
          </span>
          <span className="inline-block px-8">
            ⚡ ACCÈS INSTANTANÉ APRÈS PAIEMENT
          </span>
          <span className="inline-block px-8">
            💎 +10,000 CLIENTS SATISFAITS
          </span>
          <span className="inline-block px-8">
            🚀 LIVRAISON MONDIALE DISPONIBLE
          </span>
          <span className="inline-block px-8">
            ✅ GARANTIE SATISFAIT OU REMBOURSÉ
          </span>
          {/* Duplicate for seamless loop */}
          <span className="inline-block px-8">
            🔥 OFFRE LIMITÉE - 50% DE RÉDUCTION SUR TOUS LES PACKS
          </span>
          <span className="inline-block px-8">
            ⚡ ACCÈS INSTANTANÉ APRÈS PAIEMENT
          </span>
          <span className="inline-block px-8">
            💎 +10,000 CLIENTS SATISFAITS
          </span>
          <span className="inline-block px-8">
            🚀 LIVRAISON MONDIALE DISPONIBLE
          </span>
          <span className="inline-block px-8">
            ✅ GARANTIE SATISFAIT OU REMBOURSÉ
          </span>
        </div>
      </div>
    </div>
  )
}