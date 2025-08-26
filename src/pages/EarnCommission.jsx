export default function EarnCommission() {
  const tiers = [
    {name:'Starter', bonus:'$250', boost:'1x'},
    {name:'Pro', bonus:'$1,000', boost:'1.5x'},
    {name:'Elite', bonus:'$5,000', boost:'2x'}
  ]
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Earn Commission</h1>
      <p className="mt-3 text-text/70 max-w-3xl">
        Rewards are tied to successful outcomes. Tiers, boosts, and seasonal campaigns keep it exciting.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tiers.map((t,i)=>(
          <div key={i} className="card p-6">
            <div className="text-sm text-text/60">Tier</div>
            <h3 className="text-2xl font-bold">{t.name}</h3>
            <div className="mt-2 text-text/70">Bonus</div>
            <div className="text-3xl font-extrabold">{t.bonus}</div>
            <div className="mt-2 text-text/70">Boost</div>
            <div className="text-xl font-semibold">{t.boost}</div>
            <button className="btn mt-6">Get Started</button>
          </div>
        ))}
      </div>
    </main>
  )
}
