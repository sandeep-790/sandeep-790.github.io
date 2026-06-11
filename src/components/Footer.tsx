import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020817]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#818cf8] flex items-center justify-center text-[#020817] font-bold text-xs">
                S
              </div>
              <span className="text-white font-semibold">Sandeep Kurapati</span>
            </div>
            <p className="text-slate-500 text-sm">
              Senior Product Manager · Restaurant Technology & Commerce Platforms
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Products" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/resume", label: "Resume" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-[#00d4aa] text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Sandeep Kurapati. All rights reserved.
          </p>
          <a
            href="mailto:sandy.show18@gmail.com"
            className="text-[#00d4aa]/60 hover:text-[#00d4aa] text-xs transition-colors"
          >
            sandy.show18@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
