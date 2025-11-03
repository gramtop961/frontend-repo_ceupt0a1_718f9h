import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-inter">
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <section id="pricing" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2239] tracking-tight">Simple pricing</h2>
              <p className="mt-3 text-[#5B728A]">Start free. Upgrade when you’re ready.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[rgba(91,114,138,0.12)] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A]">Free</h3>
                <p className="mt-1 text-sm text-[#5B728A]">Try core features</p>
                <p className="mt-4 text-3xl font-bold text-[#0B2239]">£0</p>
                <ul className="mt-4 space-y-2 text-sm text-[#0F172A]">
                  <li>Chat with the assistant</li>
                  <li>Basic outfit ideas</li>
                  <li>Limited saves</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0B2239] px-4 py-2 text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A36C]">Get started</a>
              </div>
              <div className="relative rounded-2xl border border-[rgba(91,114,138,0.12)] p-6 shadow-sm bg-[#EFE7DA]">
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#C6A36C] px-2.5 py-1 text-xs font-medium text-[#0B2239] shadow-sm">Most popular</span>
                <h3 className="mt-2 text-xl font-semibold text-[#0F172A]">Pro</h3>
                <p className="mt-1 text-sm text-[#5B728A]">Everything you need</p>
                <p className="mt-4 text-3xl font-bold text-[#0B2239]">£9<span className="text-base font-medium">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-[#0F172A]">
                  <li>Advanced recommendations</li>
                  <li>Wardrobe planner</li>
                  <li>Unlimited saves</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0B2239] px-4 py-2 text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A36C]">Upgrade</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0B2239]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Questions? We’re here.</h3>
                <p className="mt-2 text-[#EFE7DA]">Email us and we’ll get back within a business day.</p>
              </div>
              <form className="grid grid-cols-1 gap-3" onSubmit={(e)=>e.preventDefault()} aria-label="Contact form">
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input type="email" required placeholder="you@domain.com" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C]" aria-label="Email address" />
                </label>
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea rows="3" required placeholder="How can we help?" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C]" aria-label="Message" />
                </label>
                <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-[#0B2239] font-medium shadow-sm transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A36C]">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
