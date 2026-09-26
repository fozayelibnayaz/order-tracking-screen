import { useEffect, useState } from "react"
import AppShell from "../components/layout/AppShell"
import Header from "../components/layout/Header"
import StatusBanner from "../components/StatusBanner"
import DeliveryTimeline from "../components/DeliveryTimeline"
import OrderSummary from "../components/OrderSummary"
import SupportActions from "../components/SupportActions"
import ContactSupportModal from "../components/support/ContactSupportModal"
import ReportIssueModal from "../components/support/ReportIssueModal"
import LoadingState from "../components/states/LoadingState"
import ErrorState from "../components/states/ErrorState"
import EmptyState from "../components/states/EmptyState"
import ScenarioSwitcher from "../components/dev/ScenarioSwitcher"
import { mockOrders, STEPS } from "../data/mockOrders"
import { getOrderStatusMeta } from "../utils/status"

const ORDER_SCENARIOS = ["onTime", "delayed", "deliveredNotReceived", "trackingPending"]

function OrderTrackingScreen() {
  const [scenario, setScenario] = useState("onTime")
  const [screenStatus, setScreenStatus] = useState("loading") // loading | error | empty | ready
  const [activeModal, setActiveModal] = useState(null)

  // useEffect runs code AFTER React draws the screen - here, every time
  // "scenario" changes, we simulate a network fetch: show loading for a
  // moment, then resolve into whichever state that scenario should show.
  useEffect(() => {
    setScreenStatus("loading")
    const timer = setTimeout(() => {
      setScreenStatus(ORDER_SCENARIOS.includes(scenario) ? "ready" : scenario)
    }, 700)
    return () => clearTimeout(timer) // cleanup: cancels the timer if scenario changes again quickly
  }, [scenario])

  const order = ORDER_SCENARIOS.includes(scenario) ? mockOrders[scenario] : null
  const statusMeta = order ? getOrderStatusMeta(order) : null

  const handleScenarioChange = (key) => {
    setScenario(key)
    setActiveModal(null)
  }

  const handleRetry = () => {
    handleScenarioChange("onTime") // simulate a successful reload
  }

  return (
    <AppShell>
      <Header orderId={order ? order.id : "—"} onBack={() => console.log("Back button tapped")} />

      <div key={`${screenStatus}-${scenario}`} className="flex-1 flex flex-col animate-fade-in">
        {screenStatus === "loading" && <LoadingState />}
        {screenStatus === "error" && <ErrorState onRetry={handleRetry} />}
        {screenStatus === "empty" && <EmptyState onBrowse={() => console.log("Navigate to order list")} />}

        {screenStatus === "ready" && order && (
          <>
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
          </>
        )}
      </div>

      {order && (
        <>
          <ContactSupportModal isOpen={activeModal === "contact"} onClose={() => setActiveModal(null)} orderId={order.id} />
          <ReportIssueModal isOpen={activeModal === "report"} onClose={() => setActiveModal(null)} orderId={order.id} />
        </>
      )}

      <ScenarioSwitcher current={scenario} onChange={handleScenarioChange} />
    </AppShell>
  )
}

export default OrderTrackingScreen