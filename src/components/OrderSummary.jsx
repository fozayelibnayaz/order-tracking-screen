import { useState } from "react"
import { ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react"
import { formatCurrency, formatDateTime } from "../utils/format"

function OrderSummary({ orderId, placedAt, items, subtotal, shippingFee, total, shippingAddress }) {
  // showDetails is "state": a value this component remembers between renders.
  // Calling setShowDetails updates it and tells React to redraw this component.
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="px-4 pt-4">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-ink-900">Order Summary</h2>
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
          >
            View details
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-2xl shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink-900 truncate">{item.name}</p>
                <p className="text-xs text-ink-400">{item.variant} · Qty {item.qty}</p>
              </div>
              <p className="text-sm font-semibold text-ink-900 shrink-0">{formatCurrency(item.price)}</p>
            </div>
          ))}
        </div>

        {showDetails && (
          <div className="mt-3 pt-3 border-t border-dashed border-slate-200 space-y-2">
            <div className="flex items-start gap-2 text-xs text-ink-600">
              <Calendar size={14} className="mt-0.5 shrink-0" />
              <span>Placed on {formatDateTime(placedAt)}</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-ink-600">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{shippingAddress}</span>
            </div>
          </div>
        )}

        <div className="mt-3 pt-3 border-t border-dashed border-slate-200 space-y-1">
          <div className="flex justify-between text-xs text-ink-600">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-xs text-ink-600">
            <span>Shipping</span>
            <span>{shippingFee === 0 ? "Free" : formatCurrency(shippingFee)}</span>
          </div>
          <div className="flex justify-between text-sm font-semibold text-ink-900 pt-1">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderSummary