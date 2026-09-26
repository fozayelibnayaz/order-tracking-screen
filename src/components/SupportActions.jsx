import { LifeBuoy, MessageSquareWarning } from "lucide-react"

function SupportActions({ onContactSupport, onReportIssue }) {
  return (
    <section className="px-4 pt-4 pb-6">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
        <h2 className="text-sm font-semibold text-ink-900 mb-3">Need Help?</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onContactSupport}
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition active:scale-[0.98]"
          >
            <LifeBuoy size={20} className="text-brand-600" />
            <span className="text-xs font-medium text-ink-900">Contact Support</span>
          </button>
          <button
            onClick={onReportIssue}
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition active:scale-[0.98]"
          >
            <MessageSquareWarning size={20} className="text-danger-600" />
            <span className="text-xs font-medium text-ink-900">Report an Issue</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SupportActions