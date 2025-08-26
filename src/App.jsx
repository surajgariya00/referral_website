import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Referral from './pages/Referral'
import Connect from './pages/Connect'
import ApplyJobs from './pages/ApplyJobs'
import EarnCommission from './pages/EarnCommission'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/apply-jobs" element={<ApplyJobs />} />
        <Route path="/earn-commission" element={<EarnCommission />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
