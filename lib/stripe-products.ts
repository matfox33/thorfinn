/**
 * Stripe Live Price IDs Configuration
 * Mapping entre les produits et leurs price IDs Stripe en mode LIVE
 *
 * IMPORTANT: Ces price IDs sont en mode LIVE
 * Pour le mode TEST, créez un fichier séparé ou utilisez des variables d'environnement
 */

export interface StripePriceMapping {
  productId: string
  priceId: string
  productName: string
}

/**
 * Mapping des produits vers leurs price IDs Stripe LIVE
 * Basé sur le screenshot fourni avec les price IDs live
 */
export const stripePriceIds: Record<string, string> = {
  // Pack Premium / Élite
  'elite-bundle': 'price_1SmpNOGgjnJDyEzQ3vcsw1iZ', // Pack élite

  // Accompagnement personnalisé
  'accompagnement-personnalise': 'price_PLACEHOLDER_52_99', // À créer dans Stripe Dashboard: 52.99€

  // Fournisseurs individuels
  'cologne-supplier': 'price_1SmpPjGgjnJDyEzQGsqlPMwl', // Parfums
  'electronics-supplier': 'price_1SmpRbGgjnJDyEzQjOh0J0oM', // Électronique
  'ultimate-guide': 'price_1SmpSyGgjnJDyEzQcSyU1A72', // Guide
  'moissanite-supplier': 'price_1SmuCmGgjnJDyEzQpT0JkGoi', // Accompagnement (bijoux)
  'clothing-bundle': 'price_1SmpdCGgjnJDyEzQUUJCJuwi', // Manteau
  'shoe-supplier': 'price_1SmpXAGgjnJDyEzQE5kUwENi', // Sneakers
  'watch-supplier': 'price_1SmpYEGgjnJDyEzQlz9N59vn', // Montre
  'luxury-bag': 'price_1SmpaVGgjnJDyEzQqVnsKgfN', // Sac
  'luxury-jacket': 'price_1SmpdCGgjnJDyEzQUUJCJuwi', // Manteau (même que clothing-bundle)
  'sunglasses': 'price_1SmpejGgjnJDyEzQNz3oFAYX', // Lunette
}

/**
 * Liste complète des mappings pour référence et validation
 */
export const stripePriceMappings: StripePriceMapping[] = [
  {
    productId: 'elite-bundle',
    priceId: 'price_1SmpNOGgjnJDyEzQ3vcsw1iZ',
    productName: 'Pack élite'
  },
  {
    productId: 'accompagnement-personnalise',
    priceId: 'price_PLACEHOLDER_52_99',
    productName: 'Accompagnement personnalisé'
  },
  {
    productId: 'cologne-supplier',
    priceId: 'price_1SmpPjGgjnJDyEzQGsqlPMwl',
    productName: 'Parfums'
  },
  {
    productId: 'electronics-supplier',
    priceId: 'price_1SmpRbGgjnJDyEzQjOh0J0oM',
    productName: 'Électronique'
  },
  {
    productId: 'ultimate-guide',
    priceId: 'price_1SmpSyGgjnJDyEzQcSyU1A72',
    productName: 'Guide'
  },
  {
    productId: 'shoe-supplier',
    priceId: 'price_1SmpXAGgjnJDyEzQE5kUwENi',
    productName: 'Sneakers'
  },
  {
    productId: 'watch-supplier',
    priceId: 'price_1SmpYEGgjnJDyEzQlz9N59vn',
    productName: 'Montre'
  },
  {
    productId: 'luxury-bag',
    priceId: 'price_1SmpaVGgjnJDyEzQqVnsKgfN',
    productName: 'Sac'
  },
  {
    productId: 'clothing-bundle',
    priceId: 'price_1SmpdCGgjnJDyEzQUUJCJuwi',
    productName: 'Manteau'
  },
  {
    productId: 'luxury-jacket',
    priceId: 'price_1SmpdCGgjnJDyEzQUUJCJuwi',
    productName: 'Manteau'
  },
  {
    productId: 'sunglasses',
    priceId: 'price_1SmpejGgjnJDyEzQNz3oFAYX',
    productName: 'Lunette'
  },
  {
    productId: 'moissanite-supplier',
    priceId: 'price_1SmuCmGgjnJDyEzQpT0JkGoi',
    productName: 'Accompagnement'
  }
]

/**
 * Récupère le price ID Stripe pour un produit donné
 * @param productId - L'ID du produit
 * @returns Le price ID Stripe ou undefined si non trouvé
 */
export function getStripePriceId(productId: string): string | undefined {
  return stripePriceIds[productId]
}

/**
 * Valide qu'un price ID existe pour un produit
 * @param productId - L'ID du produit
 * @returns true si le price ID existe
 */
export function hasStripePriceId(productId: string): boolean {
  return productId in stripePriceIds
}

/**
 * Récupère tous les product IDs configurés
 * @returns Liste des product IDs
 */
export function getConfiguredProductIds(): string[] {
  return Object.keys(stripePriceIds)
}
