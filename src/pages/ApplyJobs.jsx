export default function ApplyJobs() {
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Apply for Jobs</h1>
      <p className="mt-3 text-text/70 max-w-3xl">
        Curated roles with referral capacity. Apply with a profile that includes your endorsements.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="card p-6">
            <h3 className="font-semibold">Role Title {i+1}</h3>
            <p className="text-sm text-text/70 mt-1">Location · Domain</p>
            <p className="text-sm text-text/70 mt-3">Key requirements highlight fit.</p>
            <div className="mt-4 flex gap-3">
              <button className="btn">Apply</button>
              <button className="btn-ghost">Refer a friend</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
