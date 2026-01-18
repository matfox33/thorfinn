# 🔑 Configuration Stripe - Guide Complet

## ÉTAPE 1 : Obtenir vos clés Stripe

### Pour les clés TEST (recommandé pour commencer) :

1. **Créez un compte Stripe** : https://dashboard.stripe.com/register
2. **Activez le mode Test** (toggle en haut à droite)
3. **Allez dans** : Developers → API keys
4. **Copiez vos clés** :
   - Publishable key test : `pk_test_...`
   - Secret key test : `sk_test_...`

### Pour les clés LIVE (production) :

1. **Désactivez le mode Test**
2. **Allez dans** : Developers → API keys
3. **Copiez vos clés** :
   - Publishable key live : `pk_live_...`
   - Secret key live : `sk_live_...`

## ÉTAPE 2 : Configurez vos clés

Ouvrez `.env.local` et remplacez les placeholders :

```env
# Pour TEST (carte 4242 4242 4242 4242)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_ICI
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_ICI

# Pour PRODUCTION (vraies cartes)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE_ICI
STRIPE_SECRET_KEY=sk_live_VOTRE_CLE_ICI
```

## ÉTAPE 3 : Désactivez le mode test dans le code

Ouvrez `/app/api/checkout/route.ts` et changez :

```javascript
const TEST_MODE = false // Changez à false pour utiliser Stripe
```

## ÉTAPE 4 : Testez

1. Redémarrez le serveur : `npm run dev`
2. Cliquez sur "Acheter"
3. Vous serez redirigé vers la VRAIE page Stripe Checkout

### Cartes de test Stripe :

| Type | Numéro | CVC | Date |
|------|--------|-----|------|
| Succès | 4242 4242 4242 4242 | 123 | N'importe quelle date future |
| Refus | 4000 0000 0000 0002 | 123 | N'importe quelle date future |
| Auth requise | 4000 0025 0000 3155 | 123 | N'importe quelle date future |

## IMPORTANT :

- Les clés TEST permettent de tester sans vraies cartes
- Les clés LIVE sont pour la production avec vraies cartes
- Ne partagez JAMAIS vos clés secrètes (`sk_`)
- Les clés publiques (`pk_`) peuvent être visibles côté client

## Problème avec vos clés actuelles :

Vos clés live semblent invalides. Vérifiez :
1. Pas d'espaces avant/après
2. Pas de caractères spéciaux (comme Ø)
3. Copiez-collez directement depuis Stripe Dashboard

---

Une fois configuré, vous aurez la VRAIE page de paiement Stripe ! 🎉