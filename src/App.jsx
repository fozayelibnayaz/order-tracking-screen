import AppShell from "./components/layout/AppShell"
import Header from "./components/layout/Header"
import { mockOrders } from "./data/mockOrders"

function App() {
  const order = mockOrders.onTime

  // Placeholder for now — in Part 9 this will connect to real navigation state.
  const handleBack = () => {
    console.log("Back button tapped")
  }

  return (
    <AppShell>
      <Header orderId={order.id} onBack={handleBack} />
      <div className="p-4 text-ink-600 text-sm">
        Content for the rest of the screen goes here in the next parts.
      </div>
    </AppShell>
  )
}

export default App