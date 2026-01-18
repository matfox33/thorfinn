# WayneRessel - Site E-commerce Premium

Site e-commerce moderne avec effets néon pour vendre des accès à des fournisseurs exclusifs.

## 🚀 Fonctionnalités

- ✨ Design futuriste avec effets néon et animations
- 💳 Paiement sécurisé avec Stripe
- 📧 Emails automatiques avec Resend
- 📱 Responsive design
- 🎯 Optimisé pour la conversion
- 🔒 Sécurisé et prêt pour la production

## 📦 Technologies

- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité du type
- **Tailwind CSS** pour le styling
- **Stripe** pour les paiements
- **Resend** pour les emails transactionnels

## 🛠️ Installation

1. **Cloner le projet**
```bash
cd wayne-ressel
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**

Copier le fichier `.env.local.example` en `.env.local` :
```bash
cp .env.local.example .env.local
```

Puis remplir les variables :
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Votre clé publique Stripe
- `STRIPE_SECRET_KEY`: Votre clé secrète Stripe
- `STRIPE_WEBHOOK_SECRET`: Secret du webhook Stripe
- `RESEND_API_KEY`: Votre clé API Resend

## 🔧 Configuration Stripe

1. Créer un compte sur [Stripe](https://stripe.com)
2. Récupérer vos clés API dans le dashboard
3. Configurer le webhook :
   - URL: `https://votre-domaine.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `payment_intent.payment_failed`

## 📧 Configuration Resend

1. Créer un compte sur [Resend](https://resend.com)
2. Vérifier votre domaine
3. Récupérer votre clé API
4. Mettre à jour l'adresse email dans `lib/email.ts`

## 🚀 Démarrage

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Modification des produits

Les produits sont définis dans `lib/products.ts`. Vous pouvez :
- Modifier les prix
- Ajouter/supprimer des produits
- Changer les descriptions
- Personnaliser les features

## 🎨 Personnalisation

### Couleurs néon
Modifier dans `tailwind.config.js` :
```js
colors: {
  neon: {
    blue: '#00d4ff',
    purple: '#a855f7',
    pink: '#ec4899',
  }
}
```

### Animations
Les animations sont définies dans :
- `app/globals.css` pour les effets globaux
- `tailwind.config.js` pour les animations Tailwind

## 🚢 Déploiement

### Vercel (Recommandé)
1. Connecter votre repo GitHub à Vercel
2. Ajouter les variables d'environnement
3. Déployer

### Autres plateformes
Le projet est compatible avec toute plateforme supportant Next.js :
- Netlify
- Railway
- Render
- AWS Amplify

## 📊 Suivi des conversions

Pour ajouter Google Analytics ou autres :
1. Installer le package : `npm install @next/third-parties`
2. Ajouter le script dans `app/layout.tsx`

## 🔒 Sécurité

- Les clés API sont stockées en variables d'environnement
- Les webhooks Stripe sont vérifiés par signature
- Les paiements sont gérés par Stripe (PCI compliant)
- HTTPS requis en production

## 📱 Support

Pour toute question : support@wayneressel.com

## 📄 Licence

Propriétaire - WayneRessel © 2024