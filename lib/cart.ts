import type { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

export const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export const findCartItem = (
  items: CartItem[],
  productId: string,
  color?: string,
  size?: string,
): CartItem | undefined => {
  return items.find(
    (item) => item.product.id === productId && item.selectedColor === color && item.selectedSize === size,
  )
}
