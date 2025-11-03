import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#0B2239] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[#C6A36C]/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-[#EFE7DA]/10 blur-3xl" aria-hidden />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-2xl">
          <motion.h1
            id="hero-heading"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Personal AI for classic menswear
          </motion.h1>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 text-[#EFE7DA] text-lg leading-relaxed"
          >
            Discover, refine and shop timeless pieces with an assistant that understands fit, fabrics and the rules of good taste.
          </motion.p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#get-started"
              className="group inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-[#0B2239] font-medium shadow-sm transition-transform duration-150 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A36C]"
            >
              Try it free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A36C]"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
