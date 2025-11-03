import { useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  useEffect(() => {
    // Prefetch anchors for perceived speed
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.setAttribute('rel', 'prefetch'))
  }, [])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-[rgba(91,114,138,0.15)]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[#EFE7DA] focus:text-[#0F172A] focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0B2239] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C6A36C]" aria-hidden />
          </span>
          <span className="text-lg font-semibold tracking-tight text-[#0B2239]">Suit AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#0F172A]/80 hover:text-[#0F172A] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Features</a>
          <a href="#benefits" className="text-sm text-[#0F172A]/80 hover:text-[#0F172A] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Benefits</a>
          <a href="#pricing" className="text-sm text-[#0F172A]/80 hover:text-[#0F172A] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Pricing</a>
          <a href="#contact" className="text-sm text-[#0F172A]/80 hover:text-[#0F172A] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-md bg-[#0B2239] px-4 py-2 text-white shadow-sm transition-transform duration-150 ease-out will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A36C] hover:-translate-y-0.5 hover:shadow-md"
          >
            Get started
          </a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(91,114,138,0.3)] text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C]" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
