export default function About() {
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">About SSG</h1>
      <p className="mt-4 text-text/70 max-w-3xl">
        We’re building a referral-first talent network. This website shows what the ecosystem enables—
        connect with pros, apply to curated jobs, and earn transparent commissions for successful matches.
        No screenshots of the app itself here; just the impact.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6"><h3 className="font-semibold">Mission</h3><p className="text-text/70 mt-2">Make every great candidate visible through trusted intros.</p></div>
        <div className="card p-6"><h3 className="font-semibold">Vision</h3><p className="text-text/70 mt-2">A world where referrals are equitable, transparent, and fast.</p></div>
        <div className="card p-6"><h3 className="font-semibold">Values</h3><p className="text-text/70 mt-2">Trust, velocity, fairness, and community rewards.</p></div>
      </div>
    </main>
  )
}
