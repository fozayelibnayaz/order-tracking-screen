import { Phone, Mail, MessageCircle, ChevronRight } from "lucide-react"
import Modal from "./Modal"
import { SUPPORT_INFO } from "../../data/mockOrders"

function ContactSupportModal({ isOpen, onClose, orderId }) {
  const options = [
    { icon: Phone, label: "Call us", value: SUPPORT_INFO.phone, href: `tel:${SUPPORT_INFO.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email us", value: SUPPORT_INFO.email, href: `mailto:${SUPPORT_INFO.email}?subject=Help with order ${orderId}` },
    { icon: MessageCircle, label: "Live chat", value: SUPPORT_INFO.chatAvailable ? "Available now" : "Currently offline", href: null },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-lg font-semibold text-ink-900 mb-1">Contact Support</h3>
      <p className="text-sm text-ink-600 mb-4">We're here to help with order #{orderId}.</p>

      <div className="space-y-2">
        {options.map((option) => {
          const Icon = option.icon
          const row = (
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-brand-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink-900">{option.label}</p>
                <p className="text-xs text-ink-400 truncate">{option.value}</p>
              </div>
              <ChevronRight size={16} className="text-ink-400 shrink-0" />
            </div>
          )

          return option.href ? (
            <a key={option.label} href={option.href}>
              {row}
            </a>
          ) : (
            <button key={option.label} onClick={() => console.log("Open live chat")} className="w-full text-left">
              {row}
            </button>
          )
        })}
      </div>

      <button onClick={onClose} className="w-full mt-4 py-2.5 text-sm font-semibold text-ink-600 hover:text-ink-900">
        Cancel
      </button>
    </Modal>
  )
}

export default ContactSupportModal