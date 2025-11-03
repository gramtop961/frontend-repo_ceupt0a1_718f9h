import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Ruler, ShieldCheck, ShoppingBag, Check } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Taste you can trust',
    desc: 'Curated recommendations grounded in classic menswear principles — silhouette, proportion and quality.',
  },
  {
    icon: Ruler,
    title: 'Dialed-in fit guidance',
    desc: 'From shoulder expression to trouser break, get specific, actionable fit advice for your body and context.',
  },
  {
    icon: ShoppingBag,
    title: 'Shop with confidence',
    desc: 'Compare fabrics, construction and value across brands. Save time, avoid returns.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first',
    desc: 'Your conversations stay yours. We never sell data. Export or delete anytime.',
  },
]

export default function Features() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="features" aria-labelledby="features-heading" className="bg-[#EFE7DA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-[#0B2239] tracking-tight">Designed for permanence</h2>
          <p className="mt-3 text-[#5B728A]">
            A focused tool that helps you build a wardrobe that endures — fewer, better things.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-[rgba(91,114,138,0.1)]"
            >
              <div className="flex items-start gap-4">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0B2239]/5 text-[#0B2239]">
                  <f.icon className="h-5 w-5" aria-hidden />
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#C6A36C]" aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#0F172A]">{f.title}</h3>
                  <p className="mt-1 text-[#5B728A] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="benefits" className="mt-12 rounded-2xl border border-[rgba(91,114,138,0.1)] p-6 md:p-8 bg-white">
          <h3 className="text-2xl font-semibold text-[#0B2239]">What you get</h3>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#0F172A]">
            {[
              'One-tap outfit suggestions for any occasion',
              'Brand-agnostic recommendations by budget',
              'Fabric and construction comparisons',
              'Wardrobe tracking and gaps analysis',
              'Shareable, shoppable lists',
              'Direct answers about rules and exceptions',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-[#0B2239]" aria-hidden />
                <span className="text-[15px] leading-relaxed text-[#0F172A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
