'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce que j'obtiens en achetant un pack fournisseur ?",
    answer: "En achetant un pack fournisseur, vous obtenez un accès instantané à plusieurs fournisseurs de confiance vérifiés qui vendent des produits de qualité à des prix compétitifs. Cela vous permet de sourcer des articles efficacement pour vos besoins."
  },
  {
    question: "Comment vais-je recevoir l'accès au fournisseur ?",
    answer: "Après votre achat, vous recevrez immédiatement un email avec tous les détails d'accès et les coordonnées des fournisseurs. L'accès est instantané et disponible 24/7."
  },
  {
    question: "Combien de temps faut-il pour que le fournisseur expédie ?",
    answer: "Les délais de livraison varient selon le fournisseur et votre localisation. En général, comptez 7-15 jours pour la livraison standard et 3-7 jours pour l'express. Les détails précis sont fournis avec chaque fournisseur."
  },
  {
    question: "Les fournisseurs livrent-ils dans le monde entier ?",
    answer: "Oui, la plupart de nos fournisseurs proposent une livraison internationale. Les zones de livraison spécifiques et les frais sont détaillés dans les informations de chaque fournisseur."
  },
  {
    question: "Combien facturent les fournisseurs pour un produit ?",
    answer: "Les prix varient selon le produit, la quantité commandée et le fournisseur. Vous bénéficiez de prix de gros très compétitifs, généralement 40-70% moins chers que le prix de détail."
  },
  {
    question: "Que faire si je ne trouve pas ma commande ?",
    answer: "Si vous rencontrez des problèmes avec votre accès ou votre commande, contactez notre support client disponible 24/7. Nous vous aiderons à résoudre tout problème rapidement."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-32 mb-20">
      <h2 className="text-4xl font-bold text-center mb-12 neon-text">
        Questions Fréquentes
      </h2>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`
              glass-effect rounded-xl overflow-hidden
              border transition-all duration-300
              ${openIndex === index
                ? 'border-neon-blue/50 neon-border'
                : 'border-white/10 hover:border-white/20'
              }
            `}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left
                       hover:bg-white/5 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold pr-4">
                {item.question}
              </h3>
              <ChevronDown
                className={`
                  w-5 h-5 text-neon-blue flex-shrink-0
                  transition-transform duration-300
                  ${openIndex === index ? 'rotate-180' : ''}
                `}
              />
            </button>

            <div className={`
              overflow-hidden transition-all duration-500
              ${openIndex === index ? 'max-h-96' : 'max-h-0'}
            `}>
              <div className="px-6 pb-4">
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}