function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold text-ink-900">Design tokens check</h1>
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded-lg bg-brand-600" />
        <div className="w-16 h-16 rounded-lg bg-success-600" />
        <div className="w-16 h-16 rounded-lg bg-warning-600" />
        <div className="w-16 h-16 rounded-lg bg-danger-600" />
      </div>
      <p className="text-ink-600">Demo_Screen.</p>
    </div>
  )
}

export default App