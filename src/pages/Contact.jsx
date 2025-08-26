export default function Contact() {
  return (
    <main className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Contact Us</h1>
      <p className="mt-3 text-text/70 max-w-3xl">Have questions about referrals, partnerships, or careers? Reach out.</p>
      <form className="card p-6 mt-8 grid gap-4 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <input placeholder="First name" className="px-4 py-3 rounded-xl border border-white/10 bg-bg"/>
          <input placeholder="Last name" className="px-4 py-3 rounded-xl border border-white/10 bg-bg"/>
        </div>
        <input placeholder="Email" className="px-4 py-3 rounded-xl border border-white/10 bg-bg"/>
        <textarea placeholder="How can we help?" rows="6" className="px-4 py-3 rounded-xl border border-white/10 bg-bg"></textarea>
        <button className="btn">Send message</button>
      </form>
    </main>
  )
}
