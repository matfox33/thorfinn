#!/usr/bin/env node
/**
 * Script de validation des clés Stripe
 * Vérifie que les clés API sont bien formées avant utilisation
 */

require('dotenv').config({ path: '.env.local' })

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function validateKey(key, expectedPrefix, keyName) {
  log(`\n🔍 Validation de ${keyName}...`, 'cyan')

  if (!key) {
    log(`❌ ${keyName} est manquante`, 'red')
    return false
  }

  if (!key.startsWith(expectedPrefix)) {
    log(`❌ ${keyName} ne commence pas par "${expectedPrefix}"`, 'red')
    log(`   Trouvé: ${key.substring(0, 20)}...`, 'yellow')
    return false
  }

  // Vérifier qu'il n'y a que des caractères valides (alphanumériques et underscore)
  const validPattern = /^[a-zA-Z0-9_]+$/
  if (!validPattern.test(key)) {
    log(`❌ ${keyName} contient des caractères invalides`, 'red')

    // Trouver les caractères invalides
    const invalidChars = [...new Set(key.match(/[^a-zA-Z0-9_]/g) || [])]
    if (invalidChars.length > 0) {
      log(`   Caractères invalides détectés: ${invalidChars.join(', ')}`, 'yellow')
      log(`   Exemple: "${invalidChars[0]}" (code: ${invalidChars[0].charCodeAt(0)})`, 'yellow')
    }
    return false
  }

  // Vérifier la longueur minimale
  if (key.length < 50) {
    log(`❌ ${keyName} est trop courte (${key.length} caractères)`, 'red')
    return false
  }

  log(`✅ ${keyName} semble valide`, 'green')
  log(`   Préfixe: ${key.substring(0, 15)}...`, 'blue')
  log(`   Longueur: ${key.length} caractères`, 'blue')
  return true
}

async function testStripeConnection() {
  log('\n🔌 Test de connexion à Stripe...', 'cyan')

  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const balance = await stripe.balance.retrieve()

    log('✅ Connexion Stripe réussie !', 'green')
    log(`   Mode: ${balance.livemode ? 'LIVE' : 'TEST'}`, 'blue')
    log(`   Devise: ${balance.available[0]?.currency || 'N/A'}`, 'blue')
    return true
  } catch (error) {
    log('❌ Échec de connexion à Stripe', 'red')
    log(`   Erreur: ${error.message}`, 'yellow')
    return false
  }
}

async function main() {
  log('═══════════════════════════════════════', 'cyan')
  log('  VALIDATION DES CLÉS STRIPE', 'cyan')
  log('═══════════════════════════════════════', 'cyan')

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let allValid = true

  // Valider la clé publique
  allValid = validateKey(publishableKey, 'pk_live_', 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY') && allValid

  // Valider la clé secrète
  allValid = validateKey(secretKey, 'sk_live_', 'STRIPE_SECRET_KEY') && allValid

  // Valider le webhook secret (optionnel pour le dev local)
  if (webhookSecret && !webhookSecret.includes('placeholder')) {
    validateKey(webhookSecret, 'whsec_', 'STRIPE_WEBHOOK_SECRET')
  } else {
    log('\n⚠️  STRIPE_WEBHOOK_SECRET non configuré (OK pour dev local)', 'yellow')
  }

  // Test de connexion
  if (allValid) {
    await testStripeConnection()
  }

  log('\n═══════════════════════════════════════', 'cyan')
  if (allValid) {
    log('✅ TOUTES LES VALIDATIONS SONT PASSÉES', 'green')
    log('   Vous pouvez utiliser Stripe !', 'green')
  } else {
    log('❌ CERTAINES VALIDATIONS ONT ÉCHOUÉ', 'red')
    log('   Veuillez corriger les erreurs ci-dessus', 'red')
    log('\n💡 Actions recommandées:', 'yellow')
    log('   1. Allez sur https://dashboard.stripe.com', 'yellow')
    log('   2. Assurez-vous d\'être en mode LIVE', 'yellow')
    log('   3. Allez dans Developers → API keys', 'yellow')
    log('   4. Révélez et copiez la Secret key', 'yellow')
    log('   5. Collez-la PROPREMENT dans .env.local', 'yellow')
    process.exit(1)
  }
  log('═══════════════════════════════════════\n', 'cyan')
}

main().catch(console.error)
