// STEPS describes the 4 stages every order goes through, in order.
// We use "key" internally in code, and "label" for what the user reads.
export const STEPS = [
  { key: "processing", label: "Processing" },
  { key: "shipped", label: "Shipped" },
  { key: "out_for_delivery", label: "Out for Delivery" },
  { key: "delivered", label: "Delivered" },
]

// Shared support contact info, used by the "Contact Support" component later.
export const SUPPORT_INFO = {
  phone: "+880 1234-567890",
  email: "support@shopnow.example",
  chatAvailable: true,
}

// Each order below has the same shape, so any component can work with any of them:
// - currentStep: index into STEPS (0 = Processing, 3 = Delivered)
// - trackingAvailable: false means we don't have carrier info yet
// - timeline: only the steps that have actually happened, with a real timestamp
export const mockOrders = {
  // 1) Normal case: order is progressing fine, on schedule
  onTime: {
    id: "ORD-784512",
    placedAt: "2026-09-22T09:15:00",
    items: [
      {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        variant: "Midnight Black",
        qty: 1,
        price: 129.99,
        emoji: "🎧",
      },
    ],
    subtotal: 129.99,
    shippingFee: 4.99,
    total: 134.98,
    shippingAddress: "4/A Road 7, Dhanmondi, Dhaka 1209",
    carrier: { name: "Swift Logistics", trackingNumber: "SL29384710BD" },
    currentStep: 2, // out_for_delivery
    trackingAvailable: true,
    isDelayed: false,
    deliveredButNotReceived: false,
    estimatedDelivery: { date: "2026-09-26", window: "2:00 PM - 6:00 PM" },
    timeline: [
      { key: "processing", timestamp: "2026-09-22T09:20:00", note: "Order confirmed and payment received" },
      { key: "shipped", timestamp: "2026-09-23T14:05:00", note: "Package handed to courier" },
      { key: "out_for_delivery", timestamp: "2026-09-26T08:10:00", note: "Out for delivery with Swift Logistics" },
    ],
  },

  // 2) Delayed: estimated window already passed
  delayed: {
    id: "ORD-784513",
    placedAt: "2026-09-19T11:00:00",
    items: [
      {
        id: 1,
        name: "Stainless Steel Pour-Over Coffee Set",
        variant: "Standard",
        qty: 1,
        price: 42.5,
        emoji: "☕",
      },
    ],
    subtotal: 42.5,
    shippingFee: 3.99,
    total: 46.49,
    shippingAddress: "House 12, Road 3, Banani, Dhaka 1213",
    carrier: { name: "Metro Express", trackingNumber: "ME88213094BD" },
    currentStep: 2, // still out_for_delivery, stuck
    trackingAvailable: true,
    isDelayed: true,
    delayReason: "Weather disruption at the regional sorting hub",
    deliveredButNotReceived: false,
    estimatedDelivery: { date: "2026-09-24", window: "10:00 AM - 2:00 PM" }, // in the past
    newEstimatedDelivery: { date: "2026-09-29", window: "2:00 PM - 6:00 PM" },
    timeline: [
      { key: "processing", timestamp: "2026-09-19T11:10:00", note: "Order confirmed and payment received" },
      { key: "shipped", timestamp: "2026-09-20T16:30:00", note: "Package handed to courier" },
      { key: "out_for_delivery", timestamp: "2026-09-24T09:00:00", note: "Delayed at regional hub due to weather" },
    ],
  },

  // 3) Delivered, but the customer says they never got it
  deliveredNotReceived: {
    id: "ORD-784514",
    placedAt: "2026-09-18T15:45:00",
    items: [
      {
        id: 1,
        name: "Running Shoes",
        variant: "Size 9 / Grey",
        qty: 1,
        price: 89.0,
        emoji: "👟",
      },
    ],
    subtotal: 89.0,
    shippingFee: 0,
    total: 89.0,
    shippingAddress: "Flat 6B, Gulshan Avenue, Dhaka 1212",
    carrier: { name: "Swift Logistics", trackingNumber: "SL10982734BD" },
    currentStep: 3, // delivered
    trackingAvailable: true,
    isDelayed: false,
    deliveredButNotReceived: true,
    deliveredAt: "2026-09-24T17:20:00",
    deliveryProofNote: "Left at front door (per courier note)",
    estimatedDelivery: { date: "2026-09-24", window: "2:00 PM - 6:00 PM" },
    timeline: [
      { key: "processing", timestamp: "2026-09-18T15:50:00", note: "Order confirmed and payment received" },
      { key: "shipped", timestamp: "2026-09-19T12:00:00", note: "Package handed to courier" },
      { key: "out_for_delivery", timestamp: "2026-09-24T09:30:00", note: "Out for delivery with Swift Logistics" },
      { key: "delivered", timestamp: "2026-09-24T17:20:00", note: "Marked delivered - left at front door" },
    ],
  },

  // 4) Tracking not available yet: order is real, just no carrier info yet
  trackingPending: {
    id: "ORD-784515",
    placedAt: "2026-09-26T07:05:00",
    items: [
      {
        id: 1,
        name: "Ceramic Plant Pot Set (3-Piece)",
        variant: "Terracotta",
        qty: 1,
        price: 24.99,
        emoji: "🪴",
      },
    ],
    subtotal: 24.99,
    shippingFee: 3.5,
    total: 28.49,
    shippingAddress: "3rd Floor, Road 11, Uttara, Dhaka 1230",
    carrier: null,
    currentStep: 0, // processing
    trackingAvailable: false,
    isDelayed: false,
    deliveredButNotReceived: false,
    estimatedDelivery: { date: "2026-09-30", window: "Estimate coming soon" },
    timeline: [
      { key: "processing", timestamp: "2026-09-26T07:10:00", note: "Order confirmed and payment received" },
    ],
  },
}