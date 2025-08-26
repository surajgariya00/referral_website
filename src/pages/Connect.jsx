import { Users, MessageSquare, Handshake } from 'lucide-react'

export default function Connect() {
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Connect</h1>
      <p className="mt-3 text-text/70 max-w-3xl">
        Build a network that vouches for skills. Curate peers, mentors, and recruiters who open doors with trust.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6"><Users className="w-5 h-5"/><h3 className="font-semibold mt-2">Curated Network</h3><p className="text-text/70 mt-2">Quality over quantity—signal strength matters.</p></div>
        <div className="card p-6"><MessageSquare className="w-5 h-5"/><h3 className="font-semibold mt-2">Warm Intros</h3><p className="text-text/70 mt-2">Move from cold outreach to trusted introductions.</p></div>
        <div className="card p-6"><Handshake className="w-5 h-5"/><h3 className="font-semibold mt-2">Partnerships</h3><p className="text-text/70 mt-2">Teams, agencies, and communities—build together.</p></div>
      </div>
    </main>
  )
}
