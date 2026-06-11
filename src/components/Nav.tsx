"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020817]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#818cf8] flex items-center justify-center text-[#020817] font-bold text-sm flex-shrink-0">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm leading-none">Sandeep Kurapati</span>
            <span className="text-slate-600 text-xs leading-none mt-0.5">Product Leader · Restaurant Technology</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-[#00d4aa] bg-[#00d4aa]/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00d4aa]/30 text-[#00d4aa] text-sm font-medium hover:bg-[#00d4aa]/10 transition-all duration-200"
        >
          Let&apos;s talk
        </Link>

        <button
          className="md:hidden text-slate-400 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="px-6 py-4 space-y-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        active ? "text-[#00d4aa] bg-[#00d4aa]/10" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
