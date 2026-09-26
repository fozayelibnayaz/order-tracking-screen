import { formatDate, formatDateTime } from "./format"

// This function looks at an order's flags and decides:
// - what tone/color it should be
// - what headline and message to show
// - what the ETA chip should say
// - what the action button (if any) should say
// Keeping this separate from the component means StatusBanner.jsx only
// worries about HOW things look, and this file only worries about WHAT to say.
export function getOrderStatusMeta(order) {
  const {
    isDelayed,
    deliveredButNotReceived,
    trackingAvailable,
    currentStep,
    estimatedDelivery,
    newEstimatedDelivery,
    deliveredAt,
    deliveryProofNote,
    delayReason,
  } = order

  if (deliveredButNotReceived) {
    return {
      tone: "error",
      title: "Delivery issue reported",
      message: `Marked as delivered on ${formatDateTime(deliveredAt)}, but you told us it never arrived. Our support team is investigating and will update you within 24 hours.`,
      etaLabel: "Investigation in progress",
      actionLabel: "Chat with Support Now",
    }
  }

  if (isDelayed) {
    return {
      tone: "warning",
      title: "Delivery delayed",
      message: delayReason
        ? `Your order is taking longer than expected: ${delayReason}.`
        : "Your order is taking longer than expected.",
      etaLabel: `New estimate: ${formatDate(newEstimatedDelivery.date)}, ${newEstimatedDelivery.window}`,
      actionLabel: "Contact Support",
    }
  }

  if (currentStep === 3) {
    return {
      tone: "success",
      title: "Delivered",
      message: deliveryProofNote || "Your order has arrived.",
      etaLabel: `Delivered ${formatDateTime(deliveredAt)}`,
      actionLabel: "Didn't receive this order?",
    }
  }

  if (!trackingAvailable) {
    return {
      tone: "info",
      title: "Preparing your order",
      message: "We're getting your order ready. Tracking details will appear here as soon as it ships.",
      etaLabel: estimatedDelivery ? `Estimated delivery: ${formatDate(estimatedDelivery.date)}` : null,
      actionLabel: null,
    }
  }

  const inTransitCopy = {
    0: { title: "Order confirmed", message: "We've received your order and we're getting it ready." },
    1: { title: "On the way", message: "Your package has left our warehouse." },
    2: { title: "Out for delivery", message: "Your package is on its way to you today." },
  }
  const copy = inTransitCopy[currentStep] ?? inTransitCopy[0]

  return {
    tone: "primary",
    title: copy.title,
    message: copy.message,
    etaLabel: estimatedDelivery
      ? `Estimated delivery: ${formatDate(estimatedDelivery.date)}, ${estimatedDelivery.window}`
      : null,
    actionLabel: null,
  }
}