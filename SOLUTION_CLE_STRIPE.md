# 🚨 PROBLÈME : Clé Stripe LIVE invalide

## Diagnostic

Votre clé `sk_live_...pKBd` est **REJETÉE** par Stripe avec l'erreur :
```
Invalid API Key provided
```

Cela signifie que **cette clé n'existe pas** ou **n'est pas activée** dans votre compte Stripe.

---

## ✅ Solution : Vérifier votre compte Stripe

### 1. Vérifiez que votre compte est activé

Allez sur https://dashboard.stripe.com et vérifiez :

- **Compte vérifié** : Votre compte doit être complètement vérifié (documents d'identité, etc.)
- **Mode LIVE activé** : Vous devez avoir complété les étapes de vérification pour activer le mode LIVE
- **Statut** : Le dashboard ne doit PAS afficher "Restricted" ou "Activation Required"

### 2. Créez une NOUVELLE clé secrète

Si votre compte est vérifié :

1. https://dashboard.stripe.com → **Mode LIVE** (toggle)
2. **Developers** → **API keys**
3. Cliquez sur **"+ Create secret key"** (ou "Create restricted key")
4. **Copiez la clé ENTIÈRE** (elle commence par `sk_live_` et fait ~150 caractères)
5. **Collez-la proprement** dans `.env.local` ligne 8

### 3. Si votre compte n'est PAS activé pour le LIVE

Alors vous devez utiliser le **mode TEST** :

1. https://dashboard.stripe.com → **Mode TEST** (toggle)
2. **Developers** → **API keys**
3. Copiez vos clés **pk_test_** et **sk_test_**
4. Remplacez dans `.env.local` :
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_VRAIE_CLE
   STRIPE_SECRET_KEY=sk_test_VOTRE_VRAIE_CLE
   ```

---

## 🧪 Test rapide de vos clés

Utilisez Stripe CLI pour tester :

```bash
# Installer Stripe CLI (si pas déjà fait)
brew install stripe/stripe-cli/stripe

# Se connecter
stripe login

# Tester votre clé secrète
stripe customers list --api-key sk_live_VOTRE_CLE

# Si ça marche → La clé est valide
# Si erreur → La clé est invalide
```

---

## 📋 Checklist

- [ ] Mon compte Stripe est vérifié (documents fournis)
- [ ] J'ai activé le mode LIVE (pas de message "Restricted")
- [ ] J'ai créé une NOUVELLE clé secrète live
- [ ] J'ai copié la clé ENTIÈRE (pas de troncature)
- [ ] J'ai testé la clé avec `stripe customers list`
- [ ] J'ai redémarré le serveur Next.js après modification du `.env.local`

---

## 🔄 Alternative : Mode TEST (recommandé pour débuter)

Si vous bloquez avec le LIVE, passez en TEST temporairement :

```env
# Dans .env.local
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51SlT1yGgjnJDyEzQ...
STRIPE_SECRET_KEY=sk_test_51SlT1yGgjnJDyEzQ...
```

Vous pourrez tester avec la carte **4242 4242 4242 4242** sans argent réel.

---

**Une fois les clés corrigées, le système fonctionnera immédiatement !**
