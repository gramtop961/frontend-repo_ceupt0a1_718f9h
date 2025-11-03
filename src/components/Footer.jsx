export default function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(91,114,138,0.15)]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0B2239] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C6A36C]" aria-hidden />
              </span>
              <span className="text-base font-semibold tracking-tight text-[#0B2239]">Suit AI</span>
            </div>
            <p className="mt-3 text-sm text-[#5B728A] max-w-sm">
              We may earn a commission at no extra cost to you.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#5B728A]">
              <li>SPANIFY LIMITED (Company no. 16788776)</li>
              <li>27A St Ann’s Road, Yara Central Holland Park, Room 73</li>
              <li>London W11 4ST, United Kingdom</li>
              <li>
                <a className="underline underline-offset-2 hover:text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded" href="tel:+447501777680">+44 7501 777 680</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#5B728A]">
              <li><a href="#privacy" className="hover:text-[#0F172A] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Privacy</a></li>
              <li><a href="#terms" className="hover:text-[#0F172A] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Terms</a></li>
              <li><a href="#disclosure" className="hover:text-[#0F172A] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Affiliate disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-[rgba(91,114,138,0.15)] pt-6">
          <p className="text-xs text-[#5B728A]">© {new Date().getFullYear()} SPANIFY LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-[#5B728A]">
            <a href="#accessibility" className="hover:text-[#0F172A] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Accessibility</a>
            <span aria-hidden>•</span>
            <a href="#cookies" className="hover:text-[#0F172A] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A36C] rounded">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
