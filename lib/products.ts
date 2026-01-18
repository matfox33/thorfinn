import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'elite-bundle',
    name: 'PACK FOURNISSEUR ÉLITE',
    description: 'Le pack complet avec tous mes fournisseurs secrets',
    price: 39.99,
    originalPrice: 99.99,
    icon: '🎯',
    badge: 'BEST DEAL',
    features: [
      'Accès à 20+ fournisseurs vérifiés',
      'Support prioritaire 24/7',
      'Mises à jour gratuites',
      'Guide de négociation inclus'
    ]
  },
  {
    id: 'accompagnement-personnalise',
    name: 'ACCOMPAGNEMENT PERSONNALISÉ',
    description: 'Coaching personnalisé pour réussir dans le resell',
    price: 52.99,
    originalPrice: 79.99,
    icon: '👨‍💼',
    badge: 'NOUVEAU',
    features: [
      'Session 1-to-1 personnalisée',
      'Stratégie sur mesure',
      'Suivi pendant 30 jours',
      'Accès groupe privé'
    ]
  },
  {
    id: 'cologne-supplier',
    name: 'FOURNISSEUR PARFUMS',
    description: 'Accès exclusif aux meilleurs fournisseurs de parfums premium',
    price: 14.99,
    originalPrice: 24.99,
    icon: '🍾',
    features: [
      'Parfums authentiques garantis',
      'Prix wholesale',
      'Livraison express'
    ],
    supplierDetails: {
      country: 'France / Dubaï',
      shippingTime: '3-7 jours',
      minOrder: 'Aucun MOQ',
      paymentMethods: ['PayPal', 'Carte bancaire', 'Virement'],
      specialties: ['Parfums de luxe', 'Niche fragances', 'Designer brands'],
      rating: 4.9
    }
  },
  {
    id: 'electronics-supplier',
    name: 'FOURNISSEUR ÉLECTRONIQUE',
    description: 'Les meilleurs grossistes en électronique et gadgets',
    price: 14.99,
    originalPrice: 24.99,
    icon: '🎧',
    features: [
      'Dernières technologies',
      'Garantie fournisseur',
      'Dropshipping disponible'
    ],
    supplierDetails: {
      country: 'Chine / Hong Kong',
      shippingTime: '7-15 jours',
      minOrder: '1 pièce',
      paymentMethods: ['PayPal', 'Alibaba', 'Wise'],
      specialties: ['Écouteurs', 'Smartphones', 'Accessoires tech', 'Gadgets tendance'],
      rating: 4.8
    }
  },
  {
    id: 'ultimate-guide',
    name: 'GUIDE ULTIME DU RESELL',
    description: 'Ma méthode complète pour réussir dans le resell',
    price: 14.99,
    originalPrice: 27.99,
    icon: '📈',
    badge: 'BEST DEAL',
    features: [
      'Stratégies avancées',
      'Étude de cas réels',
      'Templates inclus',
      'Accès à vie'
    ]
  },
  {
    id: 'moissanite-supplier',
    name: 'FOURNISSEUR MOISSANITE',
    description: 'Bijoux de luxe en moissanite à prix imbattables',
    price: 19.99,
    originalPrice: 24.99,
    icon: '💎',
    badge: 'Sale',
    features: [
      'Qualité VVS garantie',
      'Certificat d\'authenticité',
      'Prix direct usine'
    ],
    supplierDetails: {
      country: 'Inde / Chine',
      shippingTime: '10-20 jours',
      minOrder: '50€',
      paymentMethods: ['PayPal', 'Wise', 'Crypto'],
      specialties: ['Bagues moissanite', 'Colliers', 'Bracelets VVS', 'Chaînes customs'],
      rating: 4.9
    }
  },
  {
    id: 'clothing-bundle',
    name: 'PACK TEXTILE COMPLET',
    description: 'Tous mes fournisseurs de vêtements streetwear et luxe',
    price: 22.99,
    originalPrice: 36.99,
    icon: '👕',
    badge: 'Sale',
    features: [
      'Marques premium',
      'Collections exclusives',
      'MOQ flexible'
    ],
    supplierDetails: {
      country: 'Turquie / Chine / Italie',
      shippingTime: '5-12 jours',
      minOrder: '100€ ou 5 pièces',
      paymentMethods: ['PayPal', 'Virement', 'Western Union'],
      specialties: ['Streetwear', 'T-shirts premium', 'Hoodies', 'Joggers', 'Essentials'],
      rating: 4.7
    }
  },
  {
    id: 'shoe-supplier',
    name: 'FOURNISSEUR SNEAKERS',
    description: 'Accès aux meilleurs fournisseurs de sneakers limitées',
    price: 14.99,
    originalPrice: 24.99,
    icon: '👟',
    badge: 'Sale',
    features: [
      'Modèles exclusifs',
      'Prix revendeur',
      'Authenticité garantie'
    ],
    supplierDetails: {
      country: 'Chine / Vietnam',
      shippingTime: '10-18 jours',
      minOrder: '1 paire',
      paymentMethods: ['PayPal', 'Wise', 'Alipay'],
      specialties: ['Jordan 1-4', 'Yeezy', 'Dunk', 'New Balance', 'Travis Scott'],
      rating: 4.8
    }
  },
  {
    id: 'watch-supplier',
    name: 'FOURNISSEUR MONTRES',
    description: 'Montres de luxe et repliques haute qualité',
    price: 14.99,
    originalPrice: 24.99,
    icon: '⌚',
    badge: 'Sale',
    features: [
      'Mouvements suisses',
      'Garantie 2 ans',
      'Emballage premium'
    ],
    supplierDetails: {
      country: 'Chine',
      shippingTime: '12-20 jours',
      minOrder: '1 pièce',
      paymentMethods: ['PayPal', 'Wise', 'Crypto'],
      specialties: ['Rolex', 'AP', 'Patek', 'Richard Mille', 'Cartier'],
      rating: 4.9
    }
  },
  {
    id: 'luxury-bag',
    name: 'FOURNISSEUR SACS LUXE',
    description: 'Sacs de luxe authentiques à prix grossiste',
    price: 14.99,
    originalPrice: 24.99,
    icon: '👜',
    badge: 'Sale',
    features: [
      'Grandes marques',
      'Cuir véritable',
      'Livraison discrète'
    ],
    supplierDetails: {
      country: 'Chine / Turquie',
      shippingTime: '10-18 jours',
      minOrder: '1 pièce',
      paymentMethods: ['PayPal', 'Wise', 'Western Union'],
      specialties: ['Louis Vuitton', 'Hermès', 'Chanel', 'Dior', 'Gucci'],
      rating: 4.8
    }
  },
  {
    id: 'luxury-jacket',
    name: 'FOURNISSEUR VESTES LUXE',
    description: 'Vestes et manteaux de luxe à prix d\'usine',
    price: 14.99,
    originalPrice: 24.99,
    icon: '🧥',
    badge: 'Sale',
    features: [
      'Matériaux premium',
      'Coupes parfaites',
      'Stock limité'
    ],
    supplierDetails: {
      country: 'Turquie / Italie',
      shippingTime: '7-14 jours',
      minOrder: '2 pièces',
      paymentMethods: ['PayPal', 'Virement', 'Western Union'],
      specialties: ['Canada Goose', 'Moncler', 'The North Face', 'Arcteryx', 'Stone Island'],
      rating: 4.9
    }
  },
  {
    id: 'sunglasses',
    name: 'FOURNISSEUR LUNETTES',
    description: 'Lunettes de soleil designer à prix cassés',
    price: 14.99,
    originalPrice: 24.99,
    icon: '🕶️',
    badge: 'Sale',
    features: [
      'Protection UV400',
      'Modèles tendance',
      'Étuis inclus'
    ],
    supplierDetails: {
      country: 'Chine',
      shippingTime: '8-15 jours',
      minOrder: '1 pièce',
      paymentMethods: ['PayPal', 'Wise', 'Alipay'],
      specialties: ['Ray-Ban', 'Cartier', 'Dior', 'Prada', 'Oakley'],
      rating: 4.7
    }
  }
]