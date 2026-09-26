// AppShell centers our mobile screen in a phone-width column.
// On an actual phone, max-w-[430px] just means "don't get wider than a phone."
// On a desktop browser, it shows our app as a neat card instead of stretching edge-to-edge.
function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-surface shadow-xl shadow-slate-300/40 flex flex-col">
        {children}
      </div>
    </div>
  )
}

export default AppShell