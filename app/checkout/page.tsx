"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Smartphone, Building2, Wallet, Truck, ArrowLeft, MapPin, Phone, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { Navbar } from "@/components/navbar"
import { paymentMethods, type ShippingAddress, type PaymentMethod, generateOrderId } from "@/lib/orders"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<"address" | "payment" | "review">("address")
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (cart.items.length === 0) {
      router.push("/cart")
    }
  }, [cart.items.length, router])

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
  }

  const handlePaymentSubmit = () => {
    if (!selectedPaymentMethod) return
    setCurrentStep("review")
  }

  const handlePlaceOrder = async () => {
    if (!selectedPaymentMethod) return

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const orderId = generateOrderId()

    // Store order in localStorage (in real app, this would be sent to backend)
    const order = {
      id: orderId,
      items: cart.items.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        productImage: item.product.image,
        quantity: item.quantity,
        price: item.product.price,
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize,
      })),
      subtotal: cart.total,
      tax: cart.total * 0.08,
      shipping: 0,
      total: cart.total * 1.08,
      shippingAddress,
      paymentMethod: selectedPaymentMethod,
      status: "confirmed" as const,
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    }

    const existingOrders = JSON.parse(localStorage.getItem("furniture-orders") || "[]")
    localStorage.setItem("furniture-orders", JSON.stringify([order, ...existingOrders]))

    clearCart()
    router.push(`/order-confirmation/${orderId}`)
  }

  if (cart.items.length === 0) {
    return null
  }

  const subtotal = cart.total
  const tax = subtotal * 0.08
  const shipping = 0
  const total = subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-yellow-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/cart" className="text-gray-400 hover:text-yellow-400">
              Cart
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
          <Link href="/cart">
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${currentStep === "address" ? "text-yellow-400" : currentStep === "payment" || currentStep === "review" ? "text-green-400" : "text-gray-400"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep === "address" ? "border-yellow-400 bg-yellow-400 text-black" : currentStep === "payment" || currentStep === "review" ? "border-green-400 bg-green-400 text-black" : "border-gray-400"}`}
              >
                1
              </div>
              <span>Address</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div
              className={`flex items-center space-x-2 ${currentStep === "payment" ? "text-yellow-400" : currentStep === "review" ? "text-green-400" : "text-gray-400"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep === "payment" ? "border-yellow-400 bg-yellow-400 text-black" : currentStep === "review" ? "border-green-400 bg-green-400 text-black" : "border-gray-400"}`}
              >
                2
              </div>
              <span>Payment</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div
              className={`flex items-center space-x-2 ${currentStep === "review" ? "text-yellow-400" : "text-gray-400"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep === "review" ? "border-yellow-400 bg-yellow-400 text-black" : "border-gray-400"}`}
              >
                3
              </div>
              <span>Review</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === "address" && (
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddressSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          required
                          value={shippingAddress.fullName}
                          onChange={(e) => setShippingAddress((prev) => ({ ...prev, fullName: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber" className="text-white">
                          Phone Number *
                        </Label>
                        <Input
                          id="phoneNumber"
                          required
                          value={shippingAddress.phoneNumber}
                          onChange={(e) => setShippingAddress((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="addressLine1" className="text-white">
                        Address Line 1 *
                      </Label>
                      <Input
                        id="addressLine1"
                        required
                        value={shippingAddress.addressLine1}
                        onChange={(e) => setShippingAddress((prev) => ({ ...prev, addressLine1: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="House/Flat/Office No, Building Name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="addressLine2" className="text-white">
                        Address Line 2
                      </Label>
                      <Input
                        id="addressLine2"
                        value={shippingAddress.addressLine2}
                        onChange={(e) => setShippingAddress((prev) => ({ ...prev, addressLine2: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="Street, Area, Colony"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-white">
                          City *
                        </Label>
                        <Input
                          id="city"
                          required
                          value={shippingAddress.city}
                          onChange={(e) => setShippingAddress((prev) => ({ ...prev, city: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-white">
                          State *
                        </Label>
                        <Input
                          id="state"
                          required
                          value={shippingAddress.state}
                          onChange={(e) => setShippingAddress((prev) => ({ ...prev, state: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode" className="text-white">
                          Pincode *
                        </Label>
                        <Input
                          id="pincode"
                          required
                          value={shippingAddress.pincode}
                          onChange={(e) => setShippingAddress((prev) => ({ ...prev, pincode: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="Pincode"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="landmark" className="text-white">
                        Landmark
                      </Label>
                      <Input
                        id="landmark"
                        value={shippingAddress.landmark}
                        onChange={(e) => setShippingAddress((prev) => ({ ...prev, landmark: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="Nearby landmark (optional)"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3"
                    >
                      Continue to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {currentStep === "payment" && (
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-yellow-400" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedPaymentMethod?.id || ""}
                    onValueChange={(value) => {
                      const method = paymentMethods.find((m) => m.id === value)
                      setSelectedPaymentMethod(method || null)
                    }}
                    className="space-y-4"
                  >
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-yellow-500 transition-colors"
                      >
                        <RadioGroupItem value={method.id} id={method.id} className="border-gray-400" />
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="w-8 h-8 flex items-center justify-center">
                            {method.type === "upi" && <Smartphone className="h-5 w-5 text-yellow-400" />}
                            {method.type === "card" && <CreditCard className="h-5 w-5 text-yellow-400" />}
                            {method.type === "netbanking" && <Building2 className="h-5 w-5 text-yellow-400" />}
                            {method.type === "wallet" && <Wallet className="h-5 w-5 text-yellow-400" />}
                            {method.type === "cod" && <Truck className="h-5 w-5 text-yellow-400" />}
                          </div>
                          <div>
                            <Label htmlFor={method.id} className="text-white font-medium cursor-pointer">
                              {method.name}
                            </Label>
                            <p className="text-sm text-gray-400">{method.details}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex space-x-4 mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep("address")}
                      className="flex-1 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handlePaymentSubmit}
                      disabled={!selectedPaymentMethod}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                    >
                      Continue to Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === "review" && (
              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <User className="h-5 w-5 mr-2 text-yellow-400" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-300">
                      <p className="font-medium text-white">{shippingAddress.fullName}</p>
                      <p>{shippingAddress.addressLine1}</p>
                      {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                      <p>
                        {shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pincode}
                      </p>
                      <p className="flex items-center mt-2">
                        <Phone className="h-4 w-4 mr-2" />
                        {shippingAddress.phoneNumber}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep("address")}
                      className="mt-3 text-yellow-400 hover:text-yellow-300"
                    >
                      Change Address
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-yellow-400" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {selectedPaymentMethod?.type === "upi" && <Smartphone className="h-5 w-5 text-yellow-400" />}
                        {selectedPaymentMethod?.type === "card" && <CreditCard className="h-5 w-5 text-yellow-400" />}
                        {selectedPaymentMethod?.type === "netbanking" && (
                          <Building2 className="h-5 w-5 text-yellow-400" />
                        )}
                        {selectedPaymentMethod?.type === "wallet" && <Wallet className="h-5 w-5 text-yellow-400" />}
                        {selectedPaymentMethod?.type === "cod" && <Truck className="h-5 w-5 text-yellow-400" />}
                      </div>
                      <div>
                        <p className="text-white font-medium">{selectedPaymentMethod?.name}</p>
                        <p className="text-sm text-gray-400">{selectedPaymentMethod?.details}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep("payment")}
                      className="mt-3 text-yellow-400 hover:text-yellow-300"
                    >
                      Change Payment Method
                    </Button>
                  </CardContent>
                </Card>

                <Button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 text-lg"
                >
                  {isProcessing ? "Processing..." : `Place Order - ₹${total.toFixed(2)}`}
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cart.items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="flex space-x-3"
                    >
                      <div className="w-16 h-16 relative overflow-hidden rounded-lg">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm line-clamp-2">{item.product.name}</h4>
                        <div className="text-xs text-gray-400 space-y-1">
                          {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                          {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                          <p>Qty: {item.quantity}</p>
                        </div>
                        <p className="text-yellow-400 font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-gray-700" />

                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal ({cart.itemCount} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-yellow-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-400 mb-2">
                    <Truck className="h-4 w-4" />
                    <span className="font-medium">Free Delivery</span>
                  </div>
                  <p className="text-sm text-gray-400">Your order will be delivered within 5-7 business days.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
