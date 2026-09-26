import AppShell from "./components/layout/AppShell"
import Header from "./components/layout/Header"
import StatusBanner from "./components/StatusBanner"
import DeliveryTimeline from "./components/DeliveryTimeline"
import OrderSummary from "./components/OrderSummary"
import { mockOrders, STEPS } from "./data/mockOrders"
import { getOrderStatusMeta } from "./utils/status"

function App() {
  const order = mockOrders.onTime // try: delayed / deliveredNotReceived / trackingPending
  const statusMeta = getOrderStatusMeta(order)

  const handleBack = () => {
    console.log("Back button tapped")
  }

  const handleStatusAction = () => {
    console.log("Status action tapped:", statusMeta.actionLabel)
  }

  return (
    <AppShell>
      <Header orderId={order.id} onBack={handleBack} />
      <StatusBanner meta={statusMeta} onAction={handleStatusAction} />
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