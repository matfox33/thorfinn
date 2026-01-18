export const emailTemplates = {
  purchaseConfirmation: (customerName: string, productName: string, amount: string) => ({
    subject: `🎯 Commande confirmée - ${productName}`,
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            color: #ffffff;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .header {
            text-align: center;
            padding: 30px 0;
            border-bottom: 2px solid rgba(0, 212, 255, 0.3);
            margin-bottom: 40px;
          }
          .logo {
            font-size: 48px;
            font-weight: 900;
            background: linear-gradient(90deg, #00d4ff, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
            margin-bottom: 10px;
          }
          .content {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 16px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
          }
          .greeting {
            font-size: 24px;
            margin-bottom: 20px;
            color: #ffffff;
          }
          .message {
            color: #b3b3b3;
            line-height: 1.8;
            margin-bottom: 30px;
          }
          .product-box {
            background: rgba(0, 212, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
          }
          .product-name {
            font-size: 28px;
            font-weight: bold;
            color: #00d4ff;
            margin-bottom: 10px;
          }
          .product-price {
            font-size: 36px;
            font-weight: 900;
            background: linear-gradient(90deg, #00d4ff, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(90deg, #00d4ff, #a855f7, #ec4899);
            color: white;
            padding: 18px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            margin: 30px 0;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .feature-list {
            list-style: none;
            padding: 0;
            margin: 30px 0;
          }
          .feature-item {
            padding: 12px 0;
            color: #b3b3b3;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .feature-item:before {
            content: "✓";
            color: #00d4ff;
            font-weight: bold;
            margin-right: 10px;
          }
          .warning-box {
            background: rgba(236, 72, 153, 0.1);
            border: 1px solid rgba(236, 72, 153, 0.3);
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
          }
          .warning-text {
            color: #ec4899;
            font-weight: 600;
          }
          .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            color: #00d4ff;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">WAYNE RESSEL</div>
            <p style="color: #00d4ff; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">
              Fournisseurs Premium Exclusifs
            </p>
          </div>

          <div class="content">
            <h1 class="greeting">Félicitations ${customerName} ! 🎉</h1>

            <p class="message">
              Votre commande a été <strong style="color: #00d4ff">confirmée avec succès</strong>.
              Vous venez de rejoindre un cercle exclusif de plus de 10,000 entrepreneurs qui génèrent
              des profits grâce à mes fournisseurs secrets.
            </p>

            <div class="product-box">
              <div class="product-name">${productName}</div>
              <div class="product-price">${amount}</div>
              <p style="color: #00d4ff; margin-top: 10px;">✅ Paiement confirmé</p>
            </div>

            <div class="warning-box">
              <p class="warning-text">
                ⚡ ACCÈS IMMÉDIAT DISPONIBLE ⚡
              </p>
              <p style="color: #b3b3b3; margin: 10px 0;">
                Votre pack exclusif est prêt à être téléchargé
              </p>
            </div>

            <center>
              <a href="https://example.com/download/pack-premium-${Date.now()}" class="cta-button">
                ACCÉDER À MON PACK →
              </a>
            </center>

            <ul class="feature-list">
              <li class="feature-item">Liste complète des fournisseurs vérifiés</li>
              <li class="feature-item">Contacts directs et négociations pré-établies</li>
              <li class="feature-item">Guide de revente et stratégies gagnantes</li>
              <li class="feature-item">Accès au groupe VIP Telegram</li>
              <li class="feature-item">Mises à jour gratuites à vie</li>
            </ul>

            <div style="background: rgba(0, 212, 255, 0.05); padding: 20px; border-radius: 8px; margin-top: 30px;">
              <p style="color: #00d4ff; font-weight: bold; margin-bottom: 10px;">
                💡 Conseil Pro:
              </p>
              <p style="color: #b3b3b3; margin: 0;">
                Commencez par les fournisseurs marqués "BEST DEAL" pour obtenir les meilleures marges.
                La plupart de nos membres récupèrent leur investissement en moins de 48h !
              </p>
            </div>

            <p style="text-align: center; margin-top: 40px; color: #b3b3b3;">
              Si vous avez des questions, répondez simplement à cet email.<br>
              Notre équipe support est disponible 24/7.
            </p>
          </div>

          <div class="footer">
            <p>© 2024 Wayne Ressel - Tous droits réservés</p>
            <div class="social-links">
              <a href="#">Instagram</a>
              <a href="#">Telegram</a>
              <a href="#">Support</a>
            </div>
            <p style="font-size: 12px; color: #666; margin-top: 20px;">
              Cet email a été envoyé à ${customerName}<br>
              Vous recevez cet email car vous avez effectué un achat sur notre plateforme.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Félicitations ${customerName} !

Votre commande ${productName} d'un montant de ${amount} a été confirmée avec succès.

ACCÉDER À VOTRE PACK:
https://example.com/download/pack-premium-${Date.now()}

Votre pack inclut:
✓ Liste complète des fournisseurs vérifiés
✓ Contacts directs et négociations pré-établies
✓ Guide de revente et stratégies gagnantes
✓ Accès au groupe VIP Telegram
✓ Mises à jour gratuites à vie

Si vous avez des questions, répondez à cet email.

© 2024 Wayne Ressel
    `
  }),

  paymentFailed: (customerName: string) => ({
    subject: "❌ Problème avec votre paiement - Action requise",
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; background: #0a0a0a; color: #fff; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .alert { background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; padding: 20px; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Bonjour ${customerName},</h1>
          <div class="alert">
            <p>Nous n'avons pas pu traiter votre paiement. Veuillez vérifier vos informations bancaires ou essayer une autre méthode de paiement.</p>
          </div>
          <p>Pour finaliser votre commande, <a href="https://example.com/checkout" style="color: #00d4ff;">cliquez ici</a>.</p>
        </div>
      </body>
      </html>
    `,
    text: `Bonjour ${customerName}, nous n'avons pas pu traiter votre paiement. Veuillez réessayer.`
  }),

  supplierNotification: (supplierName: string, productName: string, customerName: string, customerEmail: string, amount: string, sessionId: string) => ({
    subject: `🔔 Nouvelle commande - ${productName}`,
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
          }
          .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 14px;
          }
          .content {
            padding: 40px 30px;
          }
          .order-box {
            background: #f8f9fa;
            border-left: 4px solid #00d4ff;
            padding: 20px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .order-info {
            display: grid;
            gap: 12px;
            margin: 20px 0;
          }
          .order-info-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e9ecef;
          }
          .order-info-row:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: 600;
            color: #666;
          }
          .value {
            color: #333;
            font-weight: 500;
          }
          .highlight {
            background: linear-gradient(90deg, #00d4ff, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            font-size: 20px;
          }
          .action-required {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
          }
          .action-required h3 {
            color: #856404;
            margin: 0 0 10px 0;
          }
          .action-required p {
            color: #856404;
            margin: 0;
          }
          .footer {
            background: #f8f9fa;
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 13px;
          }
          .timestamp {
            color: #999;
            font-size: 12px;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 Nouvelle Commande Confirmée</h1>
            <p>Wayne Ressel - Notification Fournisseur</p>
          </div>

          <div class="content">
            <p>Bonjour <strong>${supplierName}</strong>,</p>

            <p>Une nouvelle commande vient d'être confirmée pour votre produit.</p>

            <div class="order-box">
              <h3 style="margin-top: 0; color: #00d4ff;">📦 Détails de la commande</h3>

              <div class="order-info">
                <div class="order-info-row">
                  <span class="label">Produit :</span>
                  <span class="value"><strong>${productName}</strong></span>
                </div>
                <div class="order-info-row">
                  <span class="label">Montant :</span>
                  <span class="highlight">${amount}</span>
                </div>
                <div class="order-info-row">
                  <span class="label">Client :</span>
                  <span class="value">${customerName}</span>
                </div>
                <div class="order-info-row">
                  <span class="label">Email :</span>
                  <span class="value">${customerEmail}</span>
                </div>
                <div class="order-info-row">
                  <span class="label">Session Stripe :</span>
                  <span class="value" style="font-family: monospace; font-size: 11px;">${sessionId}</span>
                </div>
              </div>
            </div>

            <div class="action-required">
              <h3>⚡ Action requise</h3>
              <p>Veuillez traiter cette commande selon votre processus habituel.</p>
              <p style="margin-top: 10px;">Le client a reçu un email de confirmation avec les détails d'accès.</p>
            </div>

            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              Cette notification a été générée automatiquement par le système de paiement Wayne Ressel.
            </p>

            <p class="timestamp">
              Envoyé le ${new Date().toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>

          <div class="footer">
            <p style="margin: 0;">© 2026 Wayne Ressel - Tous droits réservés</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">
              Système automatisé de notification fournisseur
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
🔔 NOUVELLE COMMANDE - ${productName}

Bonjour ${supplierName},

Une nouvelle commande vient d'être confirmée :

📦 DÉTAILS DE LA COMMANDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Produit: ${productName}
Montant: ${amount}
Client: ${customerName}
Email: ${customerEmail}
Session Stripe: ${sessionId}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ ACTION REQUISE
Veuillez traiter cette commande selon votre processus habituel.
Le client a reçu un email de confirmation avec les détails d'accès.

Envoyé le ${new Date().toLocaleDateString('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

© 2026 Wayne Ressel
    `
  })
}