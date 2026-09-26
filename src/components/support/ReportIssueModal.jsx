import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import Modal from "./Modal"

const REASONS = ["I didn't receive my package", "Package arrived damaged", "Wrong item received", "Something else"]

function ReportIssueModal({ isOpen, onClose, orderId }) {
  const [reason, setReason] = useState(REASONS[0])
  const [details, setDetails] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // No real backend - we just simulate a successful report being logged.
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setReason(REASONS[0])
      setDetails("")
    }, 200)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-14 h-14 rounded-full bg-success-50 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 size={28} className="text-success-600" />
          </div>
          <h3 className="text-lg font-semibold text-ink-900">Report submitted</h3>
          <p className="text-sm text-ink-600 mt-1">
            Thanks — we've logged this for order #{orderId}. Our team will email you within 24 hours.
          </p>
          <button
            onClick={handleClose}
            className="w-full mt-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold text-ink-900 mb-1">Report a Delivery Issue</h3>
          <p className="text-sm text-ink-600 mb-4">Order #{orderId}. Tell us what happened.</p>

          <label className="text-xs font-medium text-ink-600">Reason</label>
          <select
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            className="w-full mt-1 mb-3 p-2.5 rounded-xl border border-slate-200 text-sm text-ink-900 bg-white"
          >
            {REASONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label className="text-xs font-medium text-ink-600">Details (optional)</label>
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            rows={3}
            placeholder="Add any extra detail that could help..."
            className="w-full mt-1 mb-4 p-2.5 rounded-xl border border-slate-200 text-sm text-ink-900"
          />

          <button type="submit" className="w-full py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">
            Submit Report
          </button>
        </form>
      )}
    </Modal>
  )
}

export default ReportIssueModal