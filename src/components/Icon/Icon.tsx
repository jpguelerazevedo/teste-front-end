import type { ReactNode } from 'react'

export type IconName =
  | 'shield'
  | 'truck'
  | 'card'
  | 'search'
  | 'orders'
  | 'heart'
  | 'user'
  | 'cart'
  | 'crown'
  | 'chevron-left'
  | 'chevron-right'
  | 'close'
  | 'minus'
  | 'plus'
  | 'instagram'
  | 'facebook'
  | 'linkedin'

const PATHS: Record<IconName, ReactNode> = {
  shield: (
    <>
      <path d="M12 3 4.5 5.5v6c0 4.5 3 7.7 7.5 9.5 4.5-1.8 7.5-5 7.5-9.5v-6z" />
      <path d="m8.5 11.5 2.5 2.5 4.5-4.5" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 9h4l4 4v3h-8z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M2.5 9.5h19M13 15h2M17 15h2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="m16 16 5.5 5.5" />
    </>
  ),
  orders: (
    <>
      <path d="M21 13V8.5H3V20h11M3 8.5 5.5 3h13L21 8.5M12 3v5.5" />
      <path d="M21 16.5h-8m3-3-3 3 3 3" />
    </>
  ),
  heart: (
    <path d="M12 20.5C5 15.5 2.5 12 2.5 8.5a4.7 4.7 0 0 1 9.5-1.5 4.7 4.7 0 0 1 9.5 1.5c0 3.5-2.5 7-9.5 12z" />
  ),
  user: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="9.5" r="3.5" />
      <path d="M5.5 18.8c1.2-2.6 3.6-3.8 6.5-3.8s5.3 1.2 6.5 3.8" />
    </>
  ),
  cart: (
    <>
      <path d="M2 3h3l2.5 12.5h11.5l2-8.5H6.5" />
      <circle cx="9" cy="19.5" r="1.7" />
      <circle cx="17.5" cy="19.5" r="1.7" />
    </>
  ),
  crown: <path d="M3 8l4.5 4L12 5.5l4.5 6.5L21 8l-1.5 10.5h-15z" />,
  'chevron-left': <path d="m14.5 6-6 6 6 6" />,
  'chevron-right': <path d="m9.5 6 6 6-6 6" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  minus: <path d="M5 12h14" />,
  plus: <path d="M5 12h14M12 5v14" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  facebook: <path d="M15.5 3.5h-2a3.5 3.5 0 0 0-3.5 3.5v3H7.5v3.5H10v7h3.5v-7H16l.5-3.5h-3V7.5a.9.9 0 0 1 1-1h1.5z" />,
  linkedin: (
    <>
      <path d="M4 9.5h3.5V20H4zM10.5 9.5H14V11c.7-1.2 2-1.8 3.3-1.8 2.5 0 3.7 1.6 3.7 4.3V20h-3.5v-5.8c0-1.2-.5-2-1.6-2-1.2 0-1.9.9-1.9 2.2V20h-3.5z" />
      <circle cx="5.750" cy="5.250" r="1.750" />
    </>
  ),
}

interface IconProps {
  name: IconName
  size?: number
  strokeWidth?: number
}

export function Icon({ name, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
