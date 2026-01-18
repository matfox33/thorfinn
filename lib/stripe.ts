import Stripe from 'stripe'

// Initialize Stripe only when the secret key is available
// This allows the build to succeed even without environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || ''

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    })
  : null as any

// Helper function to get Stripe instance (throws if not initialized)
export function getStripe(): Stripe {
  if (!stripe) {
    throw new Error('Stripe is not initialized. Please check your STRIPE_SECRET_KEY environment variable.')
  }
  return stripe
}