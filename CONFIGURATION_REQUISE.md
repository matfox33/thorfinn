# 🔑 Configuration Stripe Requise - URGENT

## ❌ Problème Actuel

Vos price IDs du screenshot sont en mode **LIVE** mais vos clés dans `.env.local` sont **TEST** (et invalides).

**Erreur actuelle :**
```
POST /api/checkout 500
Pas d'URL de checkout reçue
```

**Cause :** Les price IDs live ne fonctionnent pas avec des clés test.

---

## ✅ Solution : Configurer les Clés LIVE

### Étape 1 : Récupérer vos clés Stripe LIVE

1. Allez sur **https://dashboard.stripe.com**
2. **Désactivez le mode Test** (toggle en haut à droite → "Live")
3. Allez dans **Developers** → **API keys**
4. Vous verrez :
   - **Publishable key** : `pk_live_...`
   - **Secret key** : `sk_live_...` (cliquez sur "Reveal live key")

### Étape 2 : Remplacer dans `.env.local`

Ouvrez le fichier `.env.local` et remplacez :

```env
# Remplacez ces lignes :
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51HqmjKL4qF8jMVfVyVhHqepQ5N9MwMq9Nq3q9K8DqXW9eKzxF8DHqmBqSBqp
STRIPE_SECRET_KEY=sk_test_51HqmjKL4qF8jMVfV2KQ8K4hCGFhkdhsHSDHqmBqSBqpTEST123

# Par vos vraies clés LIVE :
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_COLLER_VOTRE_CLE_ICI
STRIPE_SECRET_KEY=sk_live_COLLER_VOTRE_CLE_ICI
```

### Étape 3 : Redémarrer le serveur

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer :
npm run dev
```

---

## 🧪 Alternative : Tester en Mode TEST d'abord

Si vous voulez d'abord tester avec de fausses cartes :

### 1. Créer des price IDs TEST

Sur Stripe Dashboard (mode TEST) :
1. Products → Créer un produit test
2. Noter le `price_test_...` généré

### 2. Utiliser des vraies clés TEST

Récupérez vos clés TEST valides sur Stripe Dashboard (mode TEST).

### 3. Configurer le mode dynamique

Je peux modifier le code pour détecter automatiquement si vous êtes en TEST ou LIVE.

---

## 📊 Vérification

Une fois configuré, testez :

```bash
curl -X POST http://localhost:3000/api/checkout \
  -H "Content-Type: application/json" \
  -d '{"productId": "elite-bundle"}'
```

Vous devriez voir :
```json
{
  "sessionId": "cs_...",
  "url": "https://checkout.stripe.com/c/pay/cs_..."
}
```

---

## 🔒 Sécurité

- ✅ Les clés `pk_live_...` peuvent être publiques (frontend)
- ❌ Les clés `sk_live_...` doivent rester SECRÈTES (backend seulement)
- ❌ Ne JAMAIS commit `.env.local` dans Git

---

## 🆘 Besoin d'aide ?

Si vous n'avez pas accès aux clés live :
1. Vérifiez que votre compte Stripe est activé
2. Complétez la vérification d'identité si demandée
3. Contactez le support Stripe si problème

**Important :** Sans clés live valides, les price IDs du screenshot ne fonctionneront PAS.
