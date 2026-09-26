import AppShell from "./components/layout/AppShell"
import Header from "./components/layout/Header"
import OrderSummary from "./components/OrderSummary"
import DeliveryTimeline from "./components/DeliveryTimeline"
import { mockOrders, STEPS } from "./data/mockOrders"

function App() {
  const order = mockOrders.onTime // try swapping to mockOrders.delayed or mockOrders.trackingPending below

  const handleBack = () => {
    console.log("Back button tapped")
  }

  return (
    <AppShell>
      <Header orderId={order.id} onBack={handleBack} />
      <DeliveryTimeline
        steps={STEPS}
        currentStep={order.currentStep}
        timeline={order.timeline}
        isDelayed={order.isDelayed}
        trackingAvailable={order.trackingAvailable}
      />
      <OrderSummary
        orderId={order.id}
        placedAt={order.placedAt}
        items={order.items}
        subtotal={order.subtotal}
        shippingFee={order.shippingFee}
        total={order.total}
        shippingAddress={order.shippingAddress}
      />
    </AppShell>
  )
}

export default App