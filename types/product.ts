export interface SupplierDetails {
  country: string
  shippingTime: string
  minOrder: string
  paymentMethods: string[]
  specialties: string[]
  rating: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  icon: string
  badge?: 'BEST DEAL' | 'Sale' | 'NOUVEAU'
  features?: string[]
  supplierDetails?: SupplierDetails
}