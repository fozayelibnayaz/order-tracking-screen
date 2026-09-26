import { useState } from "react"
import AppShell from "./components/layout/AppShell"
import Header from "./components/layout/Header"
import StatusBanner from "./components/StatusBanner"
import DeliveryTimeline from "./components/DeliveryTimeline"
import OrderSummary from "./components/OrderSummary"
import SupportActions from "./components/SupportActions"
import ContactSupportModal from "./components/support/ContactSupportModal"
import ReportIssueModal from "./components/support/ReportIssueModal"
import { mockOrders, STEPS } from "./data/mockOrders"
import { getOrderStatusMeta } from "./utils/status"

function App() {
  const order = mockOrders.onTime
  const statusMeta = getOrderStatusMeta(order)

  // This state lives HERE, in the closest shared parent, because both the
  // StatusBanner's button and the SupportActions card need to be able to
  // open the very same modals.
  const [activeModal, setActiveModal] = useState(null) // null | "contact" | "report"

  const handleBack = () => {
    console.log("Back button tapped")
  }

  return (
    <AppShell>
      <Header orderId={order.id} onBack={handleBack} />
      <StatusBanner meta={statusMeta} onAction={() => setActiveModal(statusMeta.actionTarget)} />
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
      <SupportActions
        onContactSupport={() => setActiveModal("contact")}
        onReportIssue={() => setActiveModal("report")}
      />

      <ContactSupportModal isOpen={activeModal === "contact"} onClose={() => setActiveModal(null)} orderId={order.id} />
      <ReportIssueModal isOpen={activeModal === "report"} onClose={() => setActiveModal(null)} orderId={order.id} />
    </AppShell>
  )
}

export default App