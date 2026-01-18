const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    id: 'elite-bundle',
    name: 'PACK FOURNISSEUR ÉLITE',
    description: 'Le pack complet avec tous mes fournisseurs secrets',
    price: 39.99,
    originalPrice: 99.99,
  },
  {
    id: 'accompagnement-personnalise',
    name: 'ACCOMPAGNEMENT PERSONNALISÉ',
    description: 'Coaching personnalisé pour réussir dans le resell',
    price: 52.99,
    originalPrice: 79.99,
  },
  {
    id: 'cologne-supplier',
    name: 'FOURNISSEUR PARFUMS',
    description: 'Accès exclusif aux meilleurs fournisseurs de parfums premium',
    price: 14.99,
    originalPrice: 24.99,
  },
  {
    id: 'electronics-supplier',
    name: 'FOURNISSEUR ÉLECTRONIQUE',
    description: 'Les meilleurs grossistes en électronique et gadgets',
    price: 14.99,
    originalPrice: 24.99,
  },
  {
    id: 'ultimate-guide',
    name: 'GUIDE ULTIME DU RESELL',
    description: 'Ma méthode complète pour réussir dans le resell',
    price: 14.99,
    originalPrice: 27.99,
  },
  {
    id: 'moissanite-supplier',
    name: 'FOURNISSEUR MOISSANITE',
    description: 'Bijoux de luxe en moissanite à prix imbattables',
    price: 19.99,
    originalPrice: 24.99,
  },
  {
    id: 'clothing-bundle',
    name: 'PACK TEXTILE COMPLET',
    description: 'Tous mes fournisseurs de vêtements streetwear et luxe',
    price: 22.99,
    originalPrice: 36.99,
  },
  {
    id: 'shoe-supplier',
    name: 'FOURNISSEUR SNEAKERS',
    description: 'Accès aux meilleurs fournisseurs de sneakers limitées',
    price: 14.99,
    originalPrice: 24.99,
  },
  {
    id: 'watch-supplier',
    name: 'FOURNISSEUR MONTRES',
    description: 'Montres de luxe et repliques haute qualité',
    price: 14.99,
    originalPrice: 24.99,
  },
  {
    id: 'luxury-bag',
    name: 'FOURNISSEUR SACS LUXE',
    description: 'Sacs de luxe authentiques à prix grossiste',
    price: 14.99,
    originalPrice: 24.99,
  },
  {
    id: 'luxury-jacket',
    name: 'FOURNISSEUR VESTES LUXE',
    description: 'Vestes et manteaux de luxe à prix d\'usine',
    price: 14.99,
    originalPrice: 24.99,
  },
  {
    id: 'sunglasses',
    name: 'FOURNISSEUR LUNETTES',
    description: 'Lunettes de soleil designer à prix cassés',
    price: 14.99,
    originalPrice: 24.99,
  }
];

exports.handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { productId } = JSON.parse(event.body);

    // Find product
    const product = products.find(p => p.id === productId);
    if (!product) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Product not found' })
      };
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayne-resselz.netlify.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://wayne-resselz.netlify.app'}/`,
      metadata: {
        productId: product.id,
        productName: product.name,
        productPrice: product.price.toString(),
      },
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
            description: product.description,
            metadata: {
              productId: product.id
            }
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      }],
      billing_address_collection: 'required',
      customer_creation: 'always',
      locale: 'fr',
      allow_promotion_codes: true,
      submit_type: 'pay',
      payment_intent_data: {
        metadata: {
          productId: product.id,
          productName: product.name
        }
      }
    });

    console.log(`✅ Checkout session created for ${product.name}`);
    console.log(`Session ID: ${session.id}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ sessionId: session.id, url: session.url })
    };
  } catch (error) {
    console.error('❌ Stripe error:', error.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to create checkout session',
        details: error.message
      })
    };
  }
};