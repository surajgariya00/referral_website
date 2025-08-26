import { Coins, Share2, BadgeCheck } from 'lucide-react'

export default function Referral() {
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Referral</h1>
      <p className="mt-3 text-text/70 max-w-3xl">
        Refer candidates into matched roles with a simple shareable link. Track their progress and earn transparent commissions on successful hires.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6"><Share2 className="w-5 h-5"/><h3 className="font-semibold mt-2">Share</h3><p className="text-text/70 mt-2">Generate a referral link and share it privately.</p></div>
        <div className="card p-6"><BadgeCheck className="w-5 h-5"/><h3 className="font-semibold mt-2">Track</h3><p className="text-text/70 mt-2">Real-time status and notifications at each step.</p></div>
        <div className="card p-6"><Coins className="w-5 h-5"/><h3 className="font-semibold mt-2">Earn</h3><p className="text-text/70 mt-2">Get paid once the hire sticks past the guarantee window.</p></div>
      </div>
    </main>
  )
}
