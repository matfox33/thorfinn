import { Resend } from 'resend'
import { emailTemplates } from './email-templates'
import { getNotificationEmails, getSupplierContact } from './suppliers'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendPurchaseEmailProps {
  to: string
  productName: string
  productId: string
  customerName?: string
  amount?: string
}

export async function sendPurchaseEmail({
  to,
  productName,
  productId,
  customerName = 'Champion',
  amount = '97€'
}: SendPurchaseEmailProps) {
  try {
    // Utiliser notre nouveau template amélioré
    const emailContent = emailTemplates.purchaseConfirmation(
      customerName,
      productName,
      amount
    )

    const { data, error } = await resend.emails.send({
      from: 'Wayne Ressel <noreply@wayneressel.com>',
      to,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    })

    if (error) {
      console.error('Failed to send email:', error)
      throw error
    }

    console.log('Email sent successfully:', data)
    return data
  } catch (error) {
    console.error('Email service error:', error)
    throw error
  }
}

/**
 * Envoie une notification aux fournisseurs après une vente
 */
export async function sendSupplierNotification({
  productId,
  productName,
  customerName,
  customerEmail,
  amount,
  sessionId
}: {
  productId: string
  productName: string
  customerName: string
  customerEmail: string
  amount: string
  sessionId: string
}) {
  try {
    const supplierContact = getSupplierContact(productId)

    if (!supplierContact) {
      console.log(`No supplier contact configured for product: ${productId}`)
      return null
    }

    const notificationEmails = getNotificationEmails(productId)

    if (notificationEmails.length === 0) {
      console.log(`No notification emails configured for product: ${productId}`)
      return null
    }

    // Préparer le template email
    const emailContent = emailTemplates.supplierNotification(
      supplierContact.supplierName,
      productName,
      customerName,
      customerEmail,
      amount,
      sessionId
    )

    // Envoyer l'email à tous les destinataires configurés
    const results = []
    for (const email of notificationEmails) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Wayne Ressel - Notifications <notifications@wayneressel.com>',
          to: email,
          subject: emailContent.subject,
          html: emailContent.html,
          text: emailContent.text,
        })

        if (error) {
          console.error(`Failed to send supplier notification to ${email}:`, error)
        } else {
          console.log(`✅ Supplier notification sent to ${email}`)
          results.push({ email, success: true, data })
        }
      } catch (emailError) {
        console.error(`Error sending to ${email}:`, emailError)
        results.push({ email, success: false, error: emailError })
      }
    }

    return results
  } catch (error) {
    console.error('Supplier notification service error:', error)
    throw error
  }
}

// Ancienne fonction conservée pour compatibilité
export async function sendPurchaseEmailLegacy({
  to,
  productName,
  productId
}: SendPurchaseEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Wayne Ressel <noreply@wayneressel.com>',
      to,
      subject: `Votre accès ${productName} est prêt ! 🎉`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
              }
              .header {
                background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
                padding: 40px;
                text-align: center;
                color: white;
              }
              .header h1 {
                margin: 0;
                font-size: 32px;
                font-weight: bold;
              }
              .content {
                padding: 40px;
                color: #333;
              }
              .button {
                display: inline-block;
                background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
                color: white;
                padding: 15px 40px;
                text-decoration: none;
                border-radius: 50px;
                font-weight: bold;
                margin: 20px 0;
                box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
              }
              .access-box {
                background: #f7f7f7;
                border-left: 4px solid #00d4ff;
                padding: 20px;
                margin: 20px 0;
                border-radius: 8px;
              }
              .footer {
                background: #1a1a1a;
                color: #888;
                text-align: center;
                padding: 20px;
                font-size: 12px;
              }
              .emoji {
                font-size: 48px;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="emoji">🎯</div>
                <h1>Félicitations !</h1>
                <p>Votre commande est confirmée</p>
              </div>

              <div class="content">
                <h2>Bonjour Champion(ne) ! 👋</h2>

                <p>Merci pour votre achat de <strong>${productName}</strong>.</p>

                <p>Vous venez de faire le premier pas vers le succès dans le resell !
                   Voici vos accès exclusifs aux meilleurs fournisseurs du marché.</p>

                <div class="access-box">
                  <h3>📦 Vos Accès Fournisseurs</h3>
                  <p>Nous avons préparé pour vous une liste complète de fournisseurs vérifiés.</p>
                  <p><strong>ID de commande:</strong> ${productId}</p>
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL}/access/${productId}" class="button">
                    Accéder à mes fournisseurs →
                  </a>
                </div>

                <h3>💡 Conseils pour bien démarrer:</h3>
                <ul>
                  <li>Commencez par explorer tous les fournisseurs</li>
                  <li>Comparez les prix et les conditions</li>
                  <li>Testez avec de petites commandes d'abord</li>
                  <li>Rejoignez notre communauté Discord pour des tips exclusifs</li>
                </ul>

                <p>Si vous avez des questions, notre équipe support est disponible 24/7.</p>

                <p>À votre succès ! 🚀</p>
                <p><strong>L'équipe WayneRessel</strong></p>
              </div>

              <div class="footer">
                <p>© 2026 WayneRessel. Tous droits réservés.</p>
                <p>Cet email a été envoyé à ${to}</p>
                <p>Pour toute question: support@wayneressel.com</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Failed to send email:', error)
      throw error
    }

    console.log('Email sent successfully:', data)
    return data
  } catch (error) {
    console.error('Email service error:', error)
    throw error
  }
}