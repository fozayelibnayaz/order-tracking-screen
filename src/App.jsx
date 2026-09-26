import AppShell from "./components/layout/AppShell"
import Header from "./components/layout/Header"
import OrderSummary from "./components/OrderSummary"
import { mockOrders } from "./data/mockOrders"

function App() {
  const order = mockOrders.onTime

  const handleBack = () => {
    console.log("Back button tapped")
  }

  return (
    <AppShell>
      <Header orderId={order.id} onBack={handleBack} />
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