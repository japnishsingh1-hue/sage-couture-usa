// User Types
export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// Designer Types
export interface Designer {
  id: string
  name: string
  bio: string
  about: string
  image_url: string
  banner_url?: string
  website?: string
  instagram?: string
  founded_year?: number
  commission_percentage: number
  is_active: boolean
  created_at: string
}

// Product Types
export interface Product {
  id: string
  designer_id: string
  name: string
  description: string
  sku: string
  category: string
  gender: 'women' | 'men' | 'unisex'
  mrp: number
  selling_price: number
  cost_price: number
  images: string[]
  fabric?: string
  embroidery?: string
  care_instructions?: string
  occasion?: string[]
  delivery_days?: number
  created_at: string
  designer?: Designer
}

// Inventory Types
export interface Inventory {
  id: string
  product_id: string
  size: string
  color: string
  stock: number
  created_at: string
}

// Cart Types
export interface CartItem {
  id: string
  product_id: string
  size: string
  color: string
  quantity: number
  price: number
  product: Product
}

export interface Cart {
  items: CartItem[]
  total: number
  subtotal: number
  tax: number
  shipping: number
  discount?: number
}

// Order Types
export interface Order {
  id: string
  user_id: string
  order_number: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total_amount: number
  subtotal: number
  tax: number
  shipping: number
  discount?: number
  shipping_address: Address
  payment_status: 'pending' | 'completed' | 'failed'
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  size: string
  color: string
}

// Address Types
export interface Address {
  id: string
  user_id: string
  full_name: string
  phone: string
  street: string
  city: string
  state: string
  zip_code: string
  country: string
  is_default: boolean
}

// Wishlist Types
export interface Wishlist {
  id: string
  user_id: string
  product_id: string
  created_at: string
}

// Appointment Types
export interface Appointment {
  id: string
  user_id?: string
  name: string
  email: string
  phone: string
  occasion: string
  budget_min?: number
  budget_max?: number
  preferred_date: string
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at: string
}

// Category Types
export interface Category {
  id: string
  name: string
  slug: string
  image_url?: string
  description?: string
}

// Filter Types
export interface ProductFilters {
  designer?: string
  category?: string
  occasion?: string
  color?: string
  size?: string
  priceMin?: number
  priceMax?: number
  deliveryDays?: number
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
