import { mockOrders } from "./data/mockOrders"

function App() {
  const order = mockOrders.onTime

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 p-6 text-center">
      <h1 className="text-2xl font-bold text-ink-900">Mock data check</h1>
      <p className="text-ink-600">Order ID: {order.id}</p>
      <p className="text-ink-600">Item: {order.items[0].name}</p>
      <p className="text-ink-600">Total: ${order.total}</p>
    </div>
  )
}

export default App