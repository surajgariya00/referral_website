import { Linkedin } from 'lucide-react'
const people = Array.from({length:8}).map((_,i)=>({name:`Teammate ${i+1}`, role:['CEO','CTO','CPO','Design','Ops','Talent','Marketing','DevRel'][i%8]}))

export default function Team() {
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Meet the Team</h1>
      <p className="mt-3 text-text/70 max-w-3xl">A multidisciplinary crew obsessed with faster, fairer hiring.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {people.map((p,i)=>(
          <div key={i} className="card p-6 text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-bg border border-white/10" />
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            <p className="text-text/70 text-sm">{p.role}</p>
            <div className="mt-3 flex justify-center"><a href="#" className="btn-ghost inline-flex items-center gap-2"><Linkedin className="w-4 h-4"/>LinkedIn</a></div>
          </div>
        ))}
      </div>
    </main>
  )
}
