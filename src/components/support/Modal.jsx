// A simple bottom-sheet style modal, reused by both dialogs below.
// When isOpen is false we return null - React removes it from the page
// completely, which conveniently resets any internal state for next time.
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[430px] bg-white rounded-t-3xl p-5 pb-8 shadow-xl animate-sheet-up">
        <div className="w-10 h-1.5 bg-slate-200 rounded-full mx-auto mb-4" />
        {children}
      </div>
    </div>
  )
}

export default Modal