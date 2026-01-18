/**
 * Configuration des fournisseurs et emails de notification
 *
 * Ce fichier configure les emails automatiques envoyés aux fournisseurs
 * lorsqu'une commande est passée pour leurs produits
 */

export interface SupplierContact {
  productId: string
  supplierName: string
  supplierEmail: string
  category: string
  notifyOnPurchase: boolean
  // Détails supplémentaires
  supplierWebsite?: string
  supplierPhone?: string
  supplierWhatsapp?: string
  supplierCountry?: string
  minimumOrder?: string
  shippingTime?: string
  paymentMethods?: string[]
  notes?: string
}

/**
 * Configuration des contacts fournisseurs par produit
 *
 * IMPORTANT: Remplacez les emails exemple par les vrais emails de vos fournisseurs
 */
export const supplierContacts: Record<string, SupplierContact> = {
  'elite-bundle': {
    productId: 'elite-bundle',
    supplierName: 'Wayne Ressel - Admin',
    supplierEmail: 'admin@wayneressel.com', // À remplacer
    category: 'Pack Complet',
    notifyOnPurchase: true,
    supplierWebsite: 'https://wayneressel.com',
    supplierCountry: 'France',
    notes: 'Pack complet avec accès à tous les fournisseurs premium'
  },
  'accompagnement-personnalise': {
    productId: 'accompagnement-personnalise',
    supplierName: 'Wayne Ressel - Coaching',
    supplierEmail: 'coaching@wayneressel.com', // À remplacer
    category: 'Accompagnement',
    notifyOnPurchase: true,
    supplierWebsite: 'https://wayneressel.com',
    supplierCountry: 'France',
    notes: 'Service de coaching personnalisé 1-to-1 avec suivi 30 jours'
  },
  'cologne-supplier': {
    productId: 'cologne-supplier',
    supplierName: 'Fournisseur Parfums',
    supplierEmail: 'parfums@fournisseur.com', // À remplacer
    category: 'Parfums',
    notifyOnPurchase: true
  },
  'electronics-supplier': {
    productId: 'electronics-supplier',
    supplierName: 'Fournisseur Électronique',
    supplierEmail: 'electronique@fournisseur.com', // À remplacer
    category: 'Électronique',
    notifyOnPurchase: true
  },
  'ultimate-guide': {
    productId: 'ultimate-guide',
    supplierName: 'Wayne Ressel - Support',
    supplierEmail: 'support@wayneressel.com', // À remplacer
    category: 'Guide',
    notifyOnPurchase: false // Pas de notification pour les guides
  },
  'moissanite-supplier': {
    productId: 'moissanite-supplier',
    supplierName: 'Fournisseur Bijoux',
    supplierEmail: 'bijoux@fournisseur.com', // À remplacer
    category: 'Bijoux',
    notifyOnPurchase: true
  },
  'clothing-bundle': {
    productId: 'clothing-bundle',
    supplierName: 'Fournisseur Textile',
    supplierEmail: 'textile@fournisseur.com', // À remplacer
    category: 'Vêtements',
    notifyOnPurchase: true
  },
  'shoe-supplier': {
    productId: 'shoe-supplier',
    supplierName: 'Fournisseur Sneakers',
    supplierEmail: 'sneakers@fournisseur.com', // À remplacer
    category: 'Chaussures',
    notifyOnPurchase: true
  },
  'watch-supplier': {
    productId: 'watch-supplier',
    supplierName: 'Fournisseur Montres',
    supplierEmail: 'montres@fournisseur.com', // À remplacer
    category: 'Montres',
    notifyOnPurchase: true
  },
  'luxury-bag': {
    productId: 'luxury-bag',
    supplierName: 'Fournisseur Sacs',
    supplierEmail: 'sacs@fournisseur.com', // À remplacer
    category: 'Sacs',
    notifyOnPurchase: true
  },
  'luxury-jacket': {
    productId: 'luxury-jacket',
    supplierName: 'Fournisseur Vestes',
    supplierEmail: 'vestes@fournisseur.com', // À remplacer
    category: 'Vestes',
    notifyOnPurchase: true
  },
  'sunglasses': {
    productId: 'sunglasses',
    supplierName: 'Fournisseur Lunettes',
    supplierEmail: 'lunettes@fournisseur.com', // À remplacer
    category: 'Lunettes',
    notifyOnPurchase: true
  }
}

/**
 * Email principal pour les notifications générales
 * Reçoit une copie de toutes les ventes
 */
export const adminNotificationEmail = 'admin@wayneressel.com' // À remplacer

/**
 * Récupère le contact fournisseur pour un produit
 * @param productId - L'ID du produit
 * @returns Le contact fournisseur ou undefined
 */
export function getSupplierContact(productId: string): SupplierContact | undefined {
  return supplierContacts[productId]
}

/**
 * Vérifie si un fournisseur doit être notifié pour un produit
 * @param productId - L'ID du produit
 * @returns true si notification activée
 */
export function shouldNotifySupplier(productId: string): boolean {
  const contact = supplierContacts[productId]
  return contact?.notifyOnPurchase ?? false
}

/**
 * Récupère tous les emails à notifier pour un produit
 * @param productId - L'ID du produit
 * @returns Liste des emails à notifier
 */
export function getNotificationEmails(productId: string): string[] {
  const emails: string[] = []

  // Toujours notifier l'admin
  emails.push(adminNotificationEmail)

  // Ajouter l'email du fournisseur si activé
  const contact = getSupplierContact(productId)
  if (contact && contact.notifyOnPurchase) {
    emails.push(contact.supplierEmail)
  }

  return emails
}

/**
 * Liste tous les fournisseurs configurés
 * @returns Tableau de tous les contacts fournisseurs
 */
export function getAllSuppliers(): SupplierContact[] {
  return Object.values(supplierContacts)
}

/**
 * Récupère les fournisseurs par catégorie
 * @param category - La catégorie à filtrer
 * @returns Fournisseurs de cette catégorie
 */
export function getSuppliersByCategory(category: string): SupplierContact[] {
  return Object.values(supplierContacts).filter(s => s.category === category)
}
