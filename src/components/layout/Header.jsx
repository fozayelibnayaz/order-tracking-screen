import { ArrowLeft, MoreVertical } from "lucide-react"

// Header takes a few props (data passed IN from the parent):
// - orderId: text to show under the title
// - onBack: a function the parent gives us, called when the back button is tapped
function Header({ orderId, onBack }) {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-100 px-4 py-3 flex items-center gap-3">
      <button
        onClick={onBack}
        aria-label="Go back"
        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 active:scale-95 transition"
      >
        <ArrowLeft size={20} className="text-ink-900" />
      </button>

      <div className="flex-1 min-w-0">
        <h1 className="text-base font-semibold text-ink-900 truncate">Track Order</h1>
        <p className="text-xs text-ink-400 truncate">Order #{orderId}</p>
      </div>

      <button
        aria-label="More options"
        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 active:scale-95 transition"
      >
        <MoreVertical size={18} className="text-ink-600" />
      </button>
    </header>
  )
}

export default Header