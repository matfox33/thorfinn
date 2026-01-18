/**
 * TEMPLATE - Détails complets des fournisseurs
 *
 * Copiez ce template et remplissez les informations de vos vrais fournisseurs.
 * Une fois rempli, renommez en `suppliers-details.ts` et importez dans suppliers.ts
 */

export const supplierDetailsTemplate = {
  'cologne-supplier': {
    productId: 'cologne-supplier',
    supplierName: 'Premium Fragrance Wholesale',
    supplierEmail: 'contact@premiumfragrance.com',
    supplierWebsite: 'https://premiumfragrance.com',
    supplierPhone: '+33 1 23 45 67 89',
    supplierWhatsapp: '+33 6 12 34 56 78',
    supplierCountry: 'France',
    category: 'Parfums',
    notifyOnPurchase: true,

    // Conditions commerciales
    minimumOrder: '50€ HT',
    shippingTime: '2-5 jours ouvrés',
    paymentMethods: ['Carte bancaire', 'Virement', 'PayPal'],

    // Infos produits
    catalog: {
      brands: ['Dior', 'Chanel', 'Tom Ford', 'YSL'],
      productCount: '500+ références',
      authenticity: 'Garantie 100% authentique',
      pricing: 'Prix grossiste -40% à -70%'
    },

    // Contact & support
    contactPerson: 'Jean Dupont',
    contactLanguages: ['Français', 'Anglais'],
    responseTime: '< 24h',

    // Notes internes
    notes: `
      - Excellent fournisseur, délais respectés
      - Remises sur volume : 10% à partir de 500€
      - Code promo : WAYNE15 pour -15% première commande
      - Livraison gratuite dès 200€
    `
  },

  'electronics-supplier': {
    productId: 'electronics-supplier',
    supplierName: 'Global Electronics Wholesale',
    supplierEmail: 'sales@globalelectronics.com',
    supplierWebsite: 'https://globalelectronics.com',
    supplierWhatsapp: '+86 138 1234 5678',
    supplierCountry: 'Chine',
    category: 'Électronique',
    notifyOnPurchase: true,

    minimumOrder: '100$ USD',
    shippingTime: '7-15 jours (express disponible)',
    paymentMethods: ['Alibaba', 'PayPal', 'Wise', 'Crypto'],

    catalog: {
      brands: ['Apple', 'Samsung', 'Xiaomi', 'Anker', 'Generique'],
      productCount: '10,000+ produits',
      quality: 'Grade A, certifié CE',
      pricing: 'Prix usine direct'
    },

    contactPerson: 'Wang Li',
    contactLanguages: ['Anglais', 'Chinois'],
    responseTime: '< 12h',

    notes: `
      - IMPORTANT: Toujours demander les certifications
      - Négociation possible sur grosses quantités
      - Échantillons disponibles
      - Dropshipping possible
    `
  },

  'shoe-supplier': {
    productId: 'shoe-supplier',
    supplierName: 'Sneakers Premium Factory',
    supplierEmail: 'info@sneakerspremium.com',
    supplierWhatsapp: '+86 150 1234 5678',
    supplierCountry: 'Chine (Putian)',
    category: 'Sneakers',
    notifyOnPurchase: true,

    minimumOrder: '2 paires (MOQ bas)',
    shippingTime: '5-10 jours (DHL/FedEx)',
    paymentMethods: ['Wise', 'Western Union', 'Crypto', 'Alibaba'],

    catalog: {
      brands: ['Nike', 'Adidas', 'Jordan', 'Yeezy', 'New Balance'],
      quality: 'Tiers 1:1 (meilleure qualité)',
      sizes: 'EU 36-47',
      pricing: '40-120€/paire selon modèle'
    },

    contactPerson: 'Chen',
    contactLanguages: ['Anglais'],
    responseTime: 'Très rapide (WeChat/WhatsApp)',

    notes: `
      - Qualité TOP, recommandé par communauté
      - QC photos avant expédition
      - Plusieurs agents disponibles
      - Codes promo réguliers
      - Box + accessories inclus
    `
  },

  'watch-supplier': {
    productId: 'watch-supplier',
    supplierName: 'Luxury Watch Factory',
    supplierEmail: 'sales@luxurywatch.com',
    supplierWhatsapp: '+86 139 2345 6789',
    supplierCountry: 'Chine (Guangzhou)',
    category: 'Montres',
    notifyOnPurchase: true,

    minimumOrder: '1 pièce',
    shippingTime: '7-12 jours',
    paymentMethods: ['Wise', 'PayPal F&F', 'Crypto'],

    catalog: {
      brands: ['Rolex', 'AP', 'Patek', 'Omega', 'Cartier'],
      quality: 'Swiss movement options',
      waterproof: 'Oui (certaines références)',
      pricing: '150-800€ selon modèle et qualité'
    },

    contactPerson: 'Li Wei',
    contactLanguages: ['Anglais', 'Chinois'],
    responseTime: '< 24h',

    notes: `
      - Plusieurs niveaux de qualité (U1, AAA, Super Clone)
      - Demander vidéos QC
      - Mouvement asiatique ou suisse disponible
      - Service après-vente OK
    `
  },

  'luxury-bag': {
    productId: 'luxury-bag',
    supplierName: 'Designer Bags Wholesale',
    supplierEmail: 'vip@designerbags.com',
    supplierWhatsapp: '+86 188 1234 5678',
    supplierCountry: 'Chine (Guangzhou)',
    category: 'Sacs de luxe',
    notifyOnPurchase: true,

    minimumOrder: '1 pièce',
    shippingTime: '5-12 jours',
    paymentMethods: ['PayPal', 'Wise', 'Alipay'],

    catalog: {
      brands: ['Louis Vuitton', 'Gucci', 'Chanel', 'Hermès', 'Prada'],
      quality: 'AAA+ / 1:1',
      materials: 'Cuir véritable disponible',
      pricing: '80-400€ selon modèle'
    },

    contactPerson: 'Amy',
    contactLanguages: ['Anglais', 'Français'],
    responseTime: 'Très rapide',

    notes: `
      - Excellente qualité, meilleur rapport qualité/prix
      - Photos QC systématiques
      - Emballage premium (box + dustbag + cartes)
      - Yupoo album disponible
    `
  }
}

/**
 * Instructions pour utiliser ce template :
 *
 * 1. Créez un fichier `lib/suppliers-details.ts`
 * 2. Copiez la structure ci-dessus
 * 3. Remplissez avec VOS VRAIS fournisseurs
 * 4. Importez dans `lib/suppliers.ts` :
 *
 *    import { supplierDetails } from './suppliers-details'
 *
 * 5. Fusionnez avec supplierContacts :
 *
 *    export const supplierContacts = {
 *      ...supplierDetails
 *    }
 *
 * SÉCURITÉ: Ne commitez JAMAIS ce fichier sur Git !
 * Ajoutez dans .gitignore : suppliers-details.ts
 */
