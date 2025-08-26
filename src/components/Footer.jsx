import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-max py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg">SSG</h3>
          <p className="text-sm text-text/70 mt-2">
            Futuristic network where referrals meet opportunities. We don’t show the app here—just the possibilities.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/team" className="hover:text-accent">Team</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-2">
            <li><Link to="/referral" className="hover:text-accent">Referral</Link></li>
            <li><Link to="/connect" className="hover:text-accent">Connect</Link></li>
            <li><Link to="/apply-jobs" className="hover:text-accent">Apply</Link></li>
            <li><Link to="/earn-commission" className="hover:text-accent">Earn</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="hover:text-accent">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms</Link></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Twitter" className="btn-ghost"><Twitter className="w-4 h-4"/></a>
            <a href="#" aria-label="LinkedIn" className="btn-ghost"><Linkedin className="w-4 h-4"/></a>
            <a href="#" aria-label="GitHub" className="btn-ghost"><Github className="w-4 h-4"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-text/60">
        © {new Date().getFullYear()} SSG — All rights reserved.
      </div>
    </footer>
  )
}
