import { WifiOff, RotateCw } from "lucide-react"

function ErrorState({ onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-20 flex-1">
      <div className="w-16 h-16 rounded-full bg-danger-50 flex items-center justify-center mb-4">
        <WifiOff size={28} className="text-danger-600" />
      </div>
      <h2 className="text-base font-semibold text-ink-900">Couldn't load order</h2>
      <p className="text-sm text-ink-600 mt-1 max-w-[280px]">
        Something went wrong while fetching your order status. Check your connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="mt-5 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition active:scale-[0.98]"
      >
        <RotateCw size={16} />
        Try Again
      </button>
    </div>
  )
}

export default ErrorState