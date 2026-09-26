const SCENARIOS = [
  { key: "onTime", label: "On Time" },
  { key: "delayed", label: "Delayed" },
  { key: "deliveredNotReceived", label: "Not Received" },
  { key: "trackingPending", label: "Pending" },
  { key: "empty", label: "Empty" },
  { key: "error", label: "Error" },
]

// This bar exists ONLY so anyone opening the live link can preview every
// required state without editing code. A real production app wouldn't have
// this - it would just call a real API and land in whatever state that returns.
function ScenarioSwitcher({ current, onChange }) {
  return (
    <div
      className="sticky bottom-0 z-20 bg-ink-900/95 backdrop-blur px-3 pt-2 flex items-center gap-2 overflow-x-auto border-t border-black/20"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <span className="text-[10px] uppercase tracking-wide text-white/50 shrink-0 pr-1">Demo</span>
      {SCENARIOS.map((item) => (
        <button
          key={item.key}
          onClick={() => onChange(item.key)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition active:scale-95 ${
            current === item.key ? "bg-white text-ink-900" : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default ScenarioSwitcher