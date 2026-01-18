/**
 * Mapping entre les produits et les fournisseurs à envoyer
 */
const PRODUCT_TO_SUPPLIERS: Record<string, string[]> = {
  // Pack complet
  'elite-bundle': ['doudoune', 'electronique', 'montres', 'parfums', 'lunettes', 'sneakers', 'pack_elite'],

  // Produits individuels
  'cologne-supplier': ['parfums'],
  'electronics-supplier': ['electronique'],
  'moissanite-supplier': ['montres'],
  'clothing-bundle': ['doudoune'],
  'shoe-supplier': ['sneakers'],
  'watch-supplier': ['montres'],
  'luxury-bag': ['doudoune'],
  'luxury-jacket': ['doudoune'],
  'sunglasses': ['lunettes'],
  'accompagnement-personnalise': ['accompagnement'],

  // Guide inclut l'accompagnement
  'ultimate-guide': ['accompagnement'],
}

/**
 * Configuration des fournisseurs avec leurs liens Google Docs
 */
const SUPPLIERS_CONFIG = {
  doudoune: {
    name: "Fournisseur Doudoune",
    documentUrl: "https://docs.google.com/document/d/15AUffvzLILUkvN4Djy_JMeDtDyJdGm8FKlucQvPxGKc/edit?usp=drivesdk",
  },
  electronique: {
    name: "Fournisseur Électronique",
    documentUrl: "https://docs.google.com/document/d/14e4naP8ANb3cTVtfCdBdPtTS9MNHTMUgLAOiVlM5AzI/edit?usp=drivesdk",
  },
  montres: {
    name: "Fournisseur Montres",
    documentUrl: "https://docs.google.com/document/d/14e4naP8ANb3cTVtfCdBdPtTS9MNHTMUgLAOiVlM5AzI/edit?usp=drivesdk",
  },
  pack_elite: {
    name: "Pack Fournisseur Élite",
    documentUrl: "https://docs.google.com/document/d/10Ojp6fRqIXQGiAFG1fRLsR_f4OG10mXkX0ST8d9c8VY/edit?usp=drivesdk",
  },
  accompagnement: {
    name: "Accompagnement 1:1",
    documentUrl: "https://docs.google.com/document/d/14HnKMgdJ_x-36h1uG_wCNoD2iYPFaJT-Rx6dd-c4h5I/edit?usp=drivesdk",
  },
  parfums: {
    name: "Fournisseur Parfums",
    documentUrl: "https://docs.google.com/document/d/14HnKMgdJ_x-36h1uG_wCNoD2iYPFaJT-Rx6dd-c4h5I/edit?usp=drivesdk",
  },
  lunettes: {
    name: "Fournisseur Lunettes",
    documentUrl: "https://docs.google.com/document/d/10ag1MczcuS3zPe9xlihUCl4li0sa28zLYD6Fn-mpEeI/edit?usp=drivesdk",
  },
  sneakers: {
    name: "Fournisseur Sneakers",
    documentUrl: "https://docs.google.com/document/d/11-DY9dGs5MLRrCHc3LEtynDj3QoEQ9dtIT0VPax2P6o/edit?usp=drivesdk",
  },
}

/**
 * Génère l'email HTML avec les liens des fournisseurs
 */
function generateSupplierEmailHtml(
  customerName: string,
  productName: string,
  supplierKeys: string[]
): string {
  const suppliers = supplierKeys.map(key => SUPPLIERS_CONFIG[key as keyof typeof SUPPLIERS_CONFIG]).filter(Boolean)

  const supplierListHtml = suppliers.map(supplier => `
    <div style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; margin: 15px 0; border-radius: 8px;">
      <h3 style="margin: 0 0 10px 0; color: #333;">📦 ${supplier.name}</h3>
      <a href="${supplier.documentUrl}" style="display: inline-block; background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">
        Accéder à la documentation →
      </a>
    </div>
  `).join('')

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 30px;
      text-align: center;
      color: white;
    }
    .content {
      padding: 40px 30px;
    }
    .footer {
      background: #f8f9fa;
      padding: 20px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 32px;">🎉 Félicitations ${customerName} !</h1>
      <p style="margin: 10px 0 0 0; font-size: 18px;">Votre commande est confirmée</p>
    </div>

    <div class="content">
      <h2 style="color: #333;">Merci pour votre achat : ${productName}</h2>

      <p>Voici vos accès exclusifs aux documents fournisseurs. Chaque lien vous donne accès à une documentation complète avec :</p>

      <ul>
        <li>Liste des produits disponibles</li>
        <li>Conditions tarifaires</li>
        <li>Processus de commande</li>
        <li>Contacts directs</li>
      </ul>

      <h3 style="color: #007bff; margin-top: 30px;">📋 Vos Documents Fournisseurs :</h3>

      ${supplierListHtml}

      <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 8px; margin: 30px 0;">
        <p style="margin: 0;"><strong>💡 Conseil :</strong> Sauvegardez ces liens dans vos favoris pour un accès rapide. Les documents sont régulièrement mis à jour.</p>
      </div>

      <p><strong>Besoin d'aide ?</strong> Notre équipe est disponible 24/7 pour vous accompagner.</p>
    </div>

    <div class="footer">
      <p style="margin: 5px 0;">© 2024 Wayne Resselz - Tous droits réservés</p>
      <p style="margin: 5px 0;">Cet email contient des informations confidentielles</p>
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Envoie automatiquement les documents fournisseurs après un achat
 */
export async function autoSendSupplierDocs({
  productId,
  productName,
  customerEmail,
  customerName
}: {
  productId: string
  productName: string
  customerEmail: string
  customerName: string
}) {
  try {
    // Récupérer les fournisseurs associés à ce produit
    const supplierKeys = PRODUCT_TO_SUPPLIERS[productId]

    if (!supplierKeys || supplierKeys.length === 0) {
      console.log(`No suppliers configured for product: ${productId}`)
      return null
    }

    console.log(`📧 Sending ${supplierKeys.length} supplier docs for ${productId} to ${customerEmail}`)

    // Utiliser Resend directement depuis le serveur
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailHtml = generateSupplierEmailHtml(customerName, productName, supplierKeys)

    const { data, error } = await resend.emails.send({
      from: `Wayne Resselz <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: customerEmail,
      subject: `📦 Vos accès fournisseurs - ${productName}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Failed to send supplier docs:', error)
      throw error
    }

    console.log(`✅ Supplier docs sent successfully to ${customerEmail}`)
    return data

  } catch (error) {
    console.error('Error sending supplier docs:', error)
    throw error
  }
}