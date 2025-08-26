import { useEffect, useState } from 'react'
import { Palette } from 'lucide-react'

const themes = ['light', 'dark', 'neon', 'forest', 'pastel']

export default function ThemeToggle() {
  const [current, setCurrent] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', current)
    localStorage.setItem('theme', current)
  }, [current])

  return (
    <div className="relative">
      <details className="group">
        <summary className="list-none btn-ghost cursor-pointer inline-flex items-center gap-2">
          <Palette className="w-4 h-4"/><span className="hidden sm:inline">Theme</span>
        </summary>
        <div className="absolute right-0 mt-2 p-2 bg-card border border-white/10 rounded-xl shadow-xl">
          {themes.map(t => (
            <button key={t} onClick={() => setCurrent(t)}
              className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-bg ${current===t ? 'text-accent font-semibold':''}`}>
              {t.capitalize ? t.capitalize() : t[0].toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>
      </details>
    </div>
  )
}
