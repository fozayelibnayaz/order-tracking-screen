# Order Tracking Screen

A redesigned, modern mobile Order Tracking screen for an e-commerce app, built for the "Order Tracking Screen" assessment. The original app only showed 4 plain text labels (Processing / Shipped / Out for Delivery / Delivered). This version makes delivery status clear at a glance, and explicitly handles three tricky real-world situations: a **delayed order**, an order **delivered but not received**, and an order whose **tracking isn't available yet**.

## Live Demo

- **Live URL:** https://order-tracking-ayaz.netlify.app/
- **GitHub repo:** https://github.com/fozayelibnayaz/order-tracking-screen

> This screen includes a small dark **"Demo" bar pinned to the bottom** of the app. It lets you switch between every required state (On Time, Delayed, Not Received, Pending, Empty, Error) instantly, without needing mock backend calls or separate URLs. It's a testing aid only — a real production build would just call a real API and land on whichever state that returns.

## Tech Stack

- **React 18 + Vite** — component framework and dev server/bundler
- **Tailwind CSS v4** — utility-first styling, custom design tokens (`@theme`)
- **DaisyUI** — Tailwind component layer (used for the `steps` timeline component), themed with a custom palette to match the brand colors
- **lucide-react** — icon set

## Features

1. **Clear delivery timeline** — a vertical step tracker (DaisyUI `steps`) that visually shows progress, and re-colors itself (indigo = on track, amber = delayed) based on order state.
2. **Plain-language status banner** — one glanceable card at the top that always answers "what's happening with my order right now?" plus the estimated delivery date/time.
3. **All 3 required edge cases handled distinctly:**
   - **Delayed** — amber banner, explains the delay reason, shows a new ETA, and offers a **Contact Support** action.
   - **Delivered but not received** — red "issue reported" banner (distinct from a normal successful delivery), explains an investigation is underway, offers **Chat with Support Now**.
   - **Tracking not available yet** — blue "Preparing your order" banner instead of a blank/broken screen; the timeline shows "Waiting for carrier update…" instead of empty steps.
4. **Loading / Error / Empty states** — a skeleton loader while "fetching," a retry-able error screen, and a friendly empty state if no order is found.
5. **Meaningful interactions** — expandable order details, a Contact Support bottom sheet (call/email/chat), and a Report an Issue form with a mock submit + confirmation.
6. **Responsive, mobile-first layout** — tested at 360px, 390px, and 430px widths, with safe-area padding for notches/home indicators.

## How to Run Locally

Requires Node 18+.

```bash
git clone <your-repo-url>
cd order-tracking-screen
npm install
npm run dev
