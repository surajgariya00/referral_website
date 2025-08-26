import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { Rocket, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/referral', label: 'Referral' },
  { to: '/connect', label: 'Connect' },
  { to: '/apply-jobs', label: 'Apply Jobs' },
  { to: '/earn-commission', label: 'Earn' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur">
      <div className="container-max flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-card shadow-glow">
            <Rocket className="w-6 h-6" />
          </div>
          <div className="font-extrabold text-lg">SSG</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) => `hover:opacity-80 ${isActive ? 'text-accent font-semibold' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
        <button className="md:hidden btn-ghost" onClick={() => setOpen(!open)} aria-label="Open Menu">
          {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg/90 backdrop-blur">
          <div className="container-max py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={({isActive}) => `py-2 ${isActive ? 'text-accent font-semibold' : ''}`}>
                {l.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
