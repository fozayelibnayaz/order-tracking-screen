import { PackageX } from "lucide-react"

function EmptyState({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-20 flex-1">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <PackageX size={28} className="text-ink-400" />
      </div>
      <h2 className="text-base font-semibold text-ink-900">No order found</h2>
      <p className="text-sm text-ink-600 mt-1 max-w-[280px]">
        We couldn't find any details for this order. It may have been removed or the link is incorrect.
      </p>
      <button
        onClick={onBrowse}
        className="mt-5 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition active:scale-[0.98]"
      >
        View All Orders
      </button>
    </div>
  )
}

export default EmptyState