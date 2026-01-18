'use client'

import { Product } from '@/types/product'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  onBuyClick: (product: Product) => void
}

export default function ProductCard({ product, onBuyClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className={`absolute -top-3 -right-3 z-10 px-3 py-1 text-xs font-bold rounded-full ${
          product.badge === 'BEST DEAL'
            ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white animate-pulse'
            : 'bg-red-500 text-white'
        }`}>
          {product.badge}
        </div>
      )}

      <div className={`
        relative overflow-hidden rounded-2xl p-6 h-full
        card-gradient glass-effect
        border transition-all duration-500
        ${isHovered
          ? 'border-neon-blue/50 scale-[1.02] shadow-2xl shadow-neon-blue/20'
          : 'border-white/10 hover:border-white/20'
        }
      `}>
        {/* Hover background effect */}
        <div className={`
          absolute inset-0 opacity-0 transition-opacity duration-500
          ${isHovered ? 'opacity-100' : ''}
        `}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center items-center h-24 mb-4">
            <div className="text-6xl transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
              {product.icon}
            </div>
          </div>

          {/* Product Name */}
          <h3 className={`
            text-xl font-bold mb-2
            ${isHovered ? 'neon-text' : ''}
            transition-all duration-300
          `}>
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4">
            {product.description}
          </p>

          {/* Features */}
          {product.features && isHovered && (
            <ul className="text-xs text-gray-300 mb-3 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-neon-blue mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Supplier Details */}
          {product.supplierDetails && isHovered && (
            <div className="border-t border-white/10 pt-3 mb-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📍</span>
                <span className="text-gray-300">{product.supplierDetails.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">🚚</span>
                <span className="text-gray-300">{product.supplierDetails.shippingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📦</span>
                <span className="text-gray-300">MOQ: {product.supplierDetails.minOrder}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">⭐</span>
                <span className="text-yellow-400 font-semibold">{product.supplierDetails.rating}/5</span>
              </div>
            </div>
          )}

          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-500 line-through text-sm">
                {product.originalPrice.toFixed(2)}€
              </span>
              <span className="text-2xl font-bold text-white">
                {product.price.toFixed(2)}€
              </span>
            </div>
            <div className="text-green-400 text-xs font-semibold">
              Économisez {discount}% 🔥
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onBuyClick(product)}
            className="w-full py-3 px-6 rounded-lg font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-neon-blue to-neon-purple text-white transform transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group/btn shadow-lg hover:shadow-neon-blue/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              ACHETER MAINTENANT
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </span>

            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20
                          translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
          </button>

          {/* Details button */}
          <button className="w-full mt-2 text-xs text-gray-400 hover:text-neon-blue transition-colors duration-300">
            DÉTAILS →
          </button>
        </div>
      </div>
    </div>
  )
}