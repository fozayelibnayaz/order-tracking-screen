import { AlertTriangle, CheckCircle2, Clock, PackageSearch, Truck } from "lucide-react"

// Each "tone" maps to DaisyUI theme colors we set up in Part 6
// (bg-primary, bg-warning, bg-error, bg-success, bg-info all come from our
// custom DaisyUI theme, so they already match our brand palette).
const TONE_STYLES = {
  primary: { bg: "bg-brand-600", text: "text-white", chip: "bg-white/15", icon: Truck },
  warning: { bg: "bg-warning", text: "text-warning-content", chip: "bg-black/10", icon: AlertTriangle },
  error: { bg: "bg-error", text: "text-error-content", chip: "bg-black/10", icon: AlertTriangle },
  success: { bg: "bg-success", text: "text-success-content", chip: "bg-black/10", icon: CheckCircle2 },
  info: { bg: "bg-info", text: "text-info-content", chip: "bg-black/10", icon: PackageSearch },
}

function StatusBanner({ meta, onAction }) {
  const style = TONE_STYLES[meta.tone] ?? TONE_STYLES.primary
  const Icon = style.icon

  return (
    <section className="px-4 pt-4">
      <div className={`rounded-2xl p-4 shadow-sm ${style.bg} ${style.text}`}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${style.chip}`}>
            <Icon size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-semibold">{meta.title}</h2>
            <p className="text-sm opacity-90 mt-0.5">{meta.message}</p>

            {meta.etaLabel && (
              <div className={`inline-flex items-center gap-1.5 text-xs font-medium mt-2 px-2.5 py-1 rounded-full ${style.chip}`}>
                <Clock size={12} />
                {meta.etaLabel}
              </div>
            )}
          </div>
        </div>

        {meta.actionLabel && (
          <button
            onClick={onAction}
            className="mt-3 w-full bg-white/95 hover:bg-white text-ink-900 text-sm font-semibold rounded-xl py-2.5 transition active:scale-[0.98]"
          >
            {meta.actionLabel}
          </button>
        )}
      </div>
    </section>
  )
}

export default StatusBanner