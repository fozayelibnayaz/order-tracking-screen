import { Package, Truck, MapPinned, CheckCircle2 } from "lucide-react"
import { formatDateTime } from "../utils/format"

// Maps each step's key to a small icon shown next to its label.
const STEP_ICONS = {
  processing: Package,
  shipped: Truck,
  out_for_delivery: MapPinned,
  delivered: CheckCircle2,
}

function DeliveryTimeline({ steps, currentStep, timeline, isDelayed, trackingAvailable }) {
  // DaisyUI's "steps" component has a neat trick: adding a color class like
  // step-primary to ONE <li> automatically colors that step AND every step
  // before it. So we only add the color class to the current step.
  const colorClass = isDelayed ? "step-warning" : "step-primary"

  return (
    <section className="px-4 pt-4">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
        <h2 className="text-sm font-semibold text-ink-900 mb-2">Delivery Progress</h2>

        <ul className="steps steps-vertical w-full">
          {steps.map((step, index) => {
            const stepData = timeline.find((t) => t.key === step.key)
            const isFinalStep = index === steps.length - 1
            const isCompleted = index < currentStep || (index === currentStep && isFinalStep)
            const isCurrent = index === currentStep && !isFinalStep
            const isUpcoming = index > currentStep
            const Icon = STEP_ICONS[step.key]

            let markerContent = String(index + 1)
            if (isCompleted) markerContent = "✓"
            else if (isCurrent) markerContent = "●"

            return (
              <li
                key={step.key}
                data-content={markerContent}
                className={`step ${index === currentStep ? colorClass : ""}`}
              >
                <div className="flex flex-col items-start text-left pb-5 pl-2">
                  <span
                    className={`flex items-center gap-1.5 text-sm font-medium ${
                      isUpcoming ? "text-ink-400" : "text-ink-900"
                    }`}
                  >
                    <Icon size={14} />
                    {step.label}
                  </span>

                  {stepData ? (
                    <span className="text-xs text-ink-400 mt-0.5">{formatDateTime(stepData.timestamp)}</span>
                  ) : !trackingAvailable && isUpcoming ? (
                    <span className="text-xs text-ink-400 italic mt-0.5">Waiting for carrier update…</span>
                  ) : isUpcoming ? (
                    <span className="text-xs text-ink-300 mt-0.5">Pending</span>
                  ) : null}

                  {isCurrent && stepData?.note && (
                    <span className="text-xs text-ink-600 mt-1">{stepData.note}</span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default DeliveryTimeline