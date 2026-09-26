// Small, reusable formatting helpers so every component displays
// dates and prices the same way.

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`
}

export function formatDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
}

export function formatTime(isoString) {
  const date = new Date(isoString)
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
}

export function formatDateTime(isoString) {
  return `${formatDate(isoString)} · ${formatTime(isoString)}`
}