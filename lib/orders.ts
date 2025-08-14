export interface ShippingAddress {
  fullName: string
  phoneNumber: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  landmark?: string
}

export interface PaymentMethod {
  id: string
  type: "upi" | "card" | "netbanking" | "wallet" | "cod"
  name: string
  details?: string
}

export interface Order {
  id: string
  items: Array<{
    productId: string
    productName: string
    productImage: string
    quantity: number
    price: number
    selectedColor?: string
    selectedSize?: string
  }>
  subtotal: number
  tax: number
  shipping: number
  total: number
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
  orderDate: string
  estimatedDelivery: string
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "upi",
    type: "upi",
    name: "UPI",
    details: "Pay using Google Pay, PhonePe, Paytm & more",
  },
  {
    id: "card",
    type: "card",
    name: "Credit/Debit Card",
    details: "Visa, Mastercard, RuPay & more",
  },
  {
    id: "netbanking",
    type: "netbanking",
    name: "Net Banking",
    details: "All major banks supported",
  },
  {
    id: "wallet",
    type: "wallet",
    name: "Wallets",
    details: "Paytm, Amazon Pay, Mobikwik & more",
  },
  {
    id: "cod",
    type: "cod",
    name: "Cash on Delivery",
    details: "Pay when you receive",
  },
]

export const generateOrderId = (): string => {
  return "ORD" + Date.now().toString() + Math.random().toString(36).substr(2, 5).toUpperCase()
}
