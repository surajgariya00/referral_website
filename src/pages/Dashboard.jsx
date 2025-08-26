import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Briefcase, Coins, Sparkles, Shield, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Stat = ({label, value, sub}) => (
  <div className="card p-6">
    <div className="text-3xl font-extrabold">{value}</div>
    <div className="text-text/70">{label}</div>
    {sub && <div className="text-sm text-text/60 mt-2">{sub}</div>}
  </div>
)

const SectionTitle = ({kicker, title, sub}) => (
  <div className="container-max mb-10">
    <div className="text-accent font-semibold">{kicker}</div>
    <h2 className="text-3xl md:text-5xl font-extrabold mt-2">{title}</h2>
    {sub && <p className="text-lg text-text/70 mt-3 max-w-3xl">{sub}</p>}
  </div>
)

const FeatureCard = ({icon:Icon, title, desc}) => (
  <div className="card p-6 hover:shadow-glow transition">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-bg border border-white/10"><Icon className="w-5 h-5"/></div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-text/70 mt-3">{desc}</p>
  </div>
)

const logos = ["Nova", "Hyperion", "PrimeTech", "Aurora", "Zenith", "Helix", "Quanta", "Nimbus"]

export default function Dashboard() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="container-max relative py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-white/10 text-accent">
              <Sparkles className="w-4 h-4"/> New wave of hiring
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Where <span className="text-accent">referrals</span> create opportunities.
            </h1>
            <p className="mt-4 text-lg text-text/70">
              SSG connects talent, professionals and companies through referral-first workflows.
              We don’t show the app here—only the outcomes: connect, apply, and earn.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/apply-jobs" className="btn">Explore roles <ArrowRight className="w-4 h-4"/></Link>
              <Link to="/referral" className="btn-ghost">Refer & earn</Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-bg" />
      </section>

      {/* Stats */}
      <section className="container-max py-16">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Network Pros" value="128k+" sub="industry insiders"/>
          <Stat label="Open Roles" value="3,200+" sub="across 24 domains"/>
          <Stat label="Avg. Referral Bonus" value="$1,350" sub="median cash out"/>
          <Stat label="Avg. Time-to-Offer" value="9 days" sub="for referred talent"/>
        </motion.div>
      </section>

      {/* Logos marquee */}
      <section className="py-10 border-y border-white/10">
        <div className="container-max overflow-hidden">
          <div className="flex items-center gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {logos.concat(logos).map((l, i) => (
              <div key={i} className="text-text/40 text-lg">{l}</div>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </section>

      {/* Referral/Connect/Apply/Earn Feature Grid */}
      <section className="container-max py-20">
        <SectionTitle kicker="Capabilities" title="A platform built around actions that matter" sub="We highlight how it works without showing the app UI."/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Users} title="Connect"
            desc="Grow a curated network of professionals and recruiters who vouch for you."/>
          <FeatureCard icon={Briefcase} title="Apply for Jobs"
            desc="Verified openings with referral slots reserved for network-backed candidates."/>
          <FeatureCard icon={Zap} title="Referral Engine"
            desc="Share profiles into roles with one link. Track status and outcomes."/>
          <FeatureCard icon={Coins} title="Earn Commission"
            desc="Cash rewards for successful referrals, plus streak multipliers for consistent wins."/>
        </div>
      </section>

      {/* Parallax style banner */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" style={{backgroundSize:'32px 32px'}}/>
        <motion.div
          initial={{scale:0.9, opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="container-max card p-10 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold">Referral-first hiring, explained in 30s</h3>
          <p className="text-text/70 mt-3 max-w-2xl mx-auto">
            Candidates signal with referrals. Recruiters focus on intent. Everyone moves faster.
          </p>
          <div className="mt-8 aspect-video rounded-2xl bg-bg border border-white/10 flex items-center justify-center text-text/50">
            <span>▶ Placeholder for your video explainer</span>
          </div>
        </motion.div>
      </section>

      {/* Jobs grid (dummy) */}
      <section className="container-max py-20">
        <SectionTitle kicker="Hot Roles" title="Trending openings from our network" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({length:9}).map((_,i)=>(
            <div key={i} className="card p-6 hover:shadow-glow transition">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Senior {['Frontend','Backend','Data','Mobile'][i%4]} Engineer</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/40">Referral Slot</span>
              </div>
              <p className="text-sm text-text/70 mt-2">Remote — {['US','EU','IN','SG'][i%4]} · {['Fintech','AI','SaaS','Health'][i%4]}</p>
              <ul className="text-sm mt-3 list-disc pl-5 space-y-1 text-text/70">
                <li>Impact ownership from day one</li>
                <li>Modern stack & mentorship</li>
                <li>Expedited referral pipeline</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <button className="btn">Apply</button>
                <button className="btn-ghost">Refer</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Earnings tiers */}
      <section className="container-max py-20">
        <SectionTitle kicker="Commissions" title="Earn for outcomes" sub="Transparent tiers designed for fairness and scale."/>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'Starter', bonus:'$250', perks:['Entry-level roles','Weekly payouts','Referral tracker']},
            {title:'Pro', bonus:'$1,000', perks:['Mid/Senior roles','Priority support','Faster verification']},
            {title:'Elite', bonus:'$5,000', perks:['Leadership roles','Dedicated concierge','Invite-only raids']},
          ].map((t,i)=>(
            <div key={i} className="card p-8 relative">
              <div className="absolute -top-4 right-4 p-2 rounded-xl bg-accent text-white shadow-glow">{i===2?'Popular':'New'}</div>
              <h4 className="text-2xl font-bold">{t.title}</h4>
              <div className="text-4xl font-extrabold mt-2">{t.bonus}<span className="text-lg font-medium text-text/60">/placement</span></div>
              <ul className="mt-4 space-y-2 text-text/70">
                {t.perks.map((p,idx)=>(<li key={idx} className="flex items-center gap-2"><Star className="w-4 h-4 text-accent"/>{p}</li>))}
              </ul>
              <button className="btn mt-6">Start Earning</button>
            </div>
          ))}
        </div>
      </section>

      {/* Security/Trust */}
      <section className="container-max py-20">
        <SectionTitle kicker="Trust" title="Built with ethics and security from day one" />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Shield} title="Privacy-first"
            desc="Only verified companies see profiles shared by referrers. Data stays yours."/>
          <FeatureCard icon={Zap} title="Instant updates"
            desc="Status changes flow to every stakeholder. No inbox archaeology."/>
          <FeatureCard icon={Users} title="Fair access"
            desc="Referral slots ensure qualified candidates aren’t drowned out by volume."/>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-max py-20">
        <SectionTitle kicker="Signal" title="What our network says"/>
        <div className="grid md:grid-cols-3 gap-6">
          {['Ridiculously fast','A referral superpower','Changed our hiring'].map((q, i)=>(
            <div key={i} className="card p-6">
              <p className="italic">“{q}.”</p>
              <div className="mt-3 text-sm text-text/70">— Person {i+1}, {['Engineer','Recruiter','Founder'][i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-max py-20">
        <SectionTitle kicker="FAQ" title="Questions, answered" />
        <div className="space-y-4">
          {[
            ['Do I need an invitation?', 'No. Anyone can browse roles and refer using public links.'],
            ['When do I get paid?', 'Payouts occur after a successful hire and completion of the guarantee period.'],
            ['Is this a job board?', 'It’s a referral network. Openings are curated with dedicated referral capacity.']
          ].map((f, i)=>(
            <details key={i} className="card p-6">
              <summary className="font-semibold cursor-pointer">{f[0]}</summary>
              <p className="mt-2 text-text/70">{f[1]}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-max py-24">
        <div className="card p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">Ready to experience referral-first hiring?</h3>
          <p className="text-text/70 mt-3 max-w-2xl mx-auto">Join our launch list to get early access to private roles and commission boosts.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input placeholder="you@company.com" className="px-4 py-3 rounded-xl border border-white/10 bg-bg w-full sm:w-96"/>
            <button className="btn">Join the waitlist</button>
          </div>
        </div>
      </section>
    </div>
  )
}
