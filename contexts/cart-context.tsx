"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import { type CartItem, type CartState, calculateCartTotal, calculateItemCount, findCartItem } from "@/lib/cart"
import type { Product } from "@/lib/products"

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity?: number; color?: string; size?: string } }
  | { type: "REMOVE_ITEM"; payload: { productId: string; color?: string; size?: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number; color?: string; size?: string } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity = 1, color, size } = action.payload
      const existingItem = findCartItem(state.items, product.id, color, size)

      let newItems: CartItem[]
      if (existingItem) {
        newItems = state.items.map((item) =>
          item === existingItem ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        newItems = [
          ...state.items,
          {
            product,
            quantity,
            selectedColor: color,
            selectedSize: size,
          },
        ]
      }

      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      }
    }

    case "REMOVE_ITEM": {
      const { productId, color, size } = action.payload
      const newItems = state.items.filter(
        (item) => !(item.product.id === productId && item.selectedColor === color && item.selectedSize === size),
      )

      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      }
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity, color, size } = action.payload
      const newItems = state.items
        .map((item) =>
          item.product.id === productId && item.selectedColor === color && item.selectedSize === size
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0)

      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      }
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
        itemCount: 0,
      }

    case "LOAD_CART":
      return {
        items: action.payload,
        total: calculateCartTotal(action.payload),
        itemCount: calculateItemCount(action.payload),
      }

    default:
      return state
  }
}

const CartContext = createContext<{
  cart: CartState
  addItem: (product: Product, quantity?: number, color?: string, size?: string) => void
  removeItem: (productId: string, color?: string, size?: string) => void
  updateQuantity: (productId: string, quantity: number, color?: string, size?: string) => void
  clearCart: () => void
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("furniture-cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: "LOAD_CART", payload: parsedCart })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("furniture-cart", JSON.stringify(cart.items))
  }, [cart.items])

  const addItem = (product: Product, quantity = 1, color?: string, size?: string) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity, color, size } })
  }

  const removeItem = (productId: string, color?: string, size?: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId, color, size } })
  }

  const updateQuantity = (productId: string, quantity: number, color?: string, size?: string) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity, color, size } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
