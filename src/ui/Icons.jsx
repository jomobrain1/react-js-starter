const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true
};

export function MenuIcon() {
  return <svg {...iconProps}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
}

export function XIcon() {
  return <svg {...iconProps}><path d="M18 6 6 18M6 6l12 12" /></svg>;
}

export function ShoppingBagIcon() {
  return <svg {...iconProps}><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>;
}

export function CartIcon() {
  return <svg {...iconProps}><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H6" /></svg>;
}

export function EditIcon() {
  return <svg {...iconProps}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>;
}

export function RefreshIcon() {
  return <svg {...iconProps}><path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4" /></svg>;
}

export function TrashIcon() {
  return <svg {...iconProps}><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="m19 6-1 14H6L5 6" /><path d="M10 11v5M14 11v5" /></svg>;
}

export function HomeIcon() {
  return <svg {...iconProps}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>;
}

export function MailIcon() {
  return <svg {...iconProps}><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function LockIcon() {
  return <svg {...iconProps}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>;
}

export function UserIcon() {
  return <svg {...iconProps}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
}

export function ArrowRightIcon() {
  return <svg {...iconProps}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
}

export function SearchIcon() {
  return <svg {...iconProps}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
}

export function BellIcon() {
  return <svg {...iconProps}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></svg>;
}

export function ChartIcon() {
  return <svg {...iconProps}><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M13 16V8" /><path d="M18 16v-3" /></svg>;
}

export function BoxIcon() {
  return <svg {...iconProps}><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>;
}

export function UsersIcon() {
  return <svg {...iconProps}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

export function SettingsIcon() {
  return <svg {...iconProps}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 8.6 19a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 8.6 4a1.7 1.7 0 0 0 1-.6A1.7 1.7 0 0 0 10 2.3V2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.3 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 8.6c.4.4.6.8.6 1.4h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-.6 1Z" /></svg>;
}
