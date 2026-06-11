"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { Mail, ExternalLink, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    window.location.href = `mailto:sandy.show18@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#020817] pt-24">
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Open to the right conversation.
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              I&apos;m actively looking for Group PM, Head of Product, and Senior PM roles. I respond to all relevant recruiter and hiring manager outreach within 24 hours — use the form below or email directly.
            </p>
            <p className="text-slate-500 text-base max-w-2xl mt-3">
              Best fit: technology companies building complex operational software, commerce platforms, or SaaS where the system design matters as much as the roadmap. Open to remote and relocation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <AnimatedSection>
                <a href="mailto:sandy.show18@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] card-hover group"
                  style={{ background: "rgba(10,15,30,0.6)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,170,0.1)" }}>
                    <Mail size={18} className="text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5">Email</p>
                    <p className="text-slate-500 text-sm group-hover:text-[#00d4aa] transition-colors">
                      sandy.show18@gmail.com
                    </p>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.05}>
                <a href="https://www.linkedin.com/in/sandeep-kurapati-5b81b811a-5b81b811a" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] card-hover group"
                  style={{ background: "rgba(10,15,30,0.6)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,170,0.1)" }}>
                    <ExternalLink size={18} className="text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5">LinkedIn</p>
                    <p className="text-slate-500 text-sm group-hover:text-[#00d4aa] transition-colors">
                      linkedin.com/in/sandeep-kurapati-5b81b811a
                    </p>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-5 rounded-2xl border border-white/[0.06]" style={{ background: "rgba(10,15,30,0.4)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={14} className="text-slate-500" />
                    <p className="text-slate-500 text-xs uppercase tracking-wider">The right conversation happens when</p>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "You're a recruiter or talent team screening for Group PM, Head of Product, or Senior PM candidates — I respond to all relevant outreach within 24 hours",
                      "You're hiring a Head of Product or Group PM for a team where roadmap and system design intersect",
                      "You're building merchant-facing operational software, commerce platforms, or complex SaaS and need a PM who understands the actual workflow — not just the user story",
                      "You're a restaurant tech or commerce platform thinking about how your products connect, not just what features come next",
                      "You need someone who has owned POS systems, catalog infrastructure, integration platforms, Android applications, and the backend platform connecting them — and can see how they fit together as a system",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={13} className="text-[#00d4aa]/60 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="p-5 rounded-2xl border border-white/[0.06]" style={{ background: "rgba(10,15,30,0.3)" }}>
                  <p className="text-slate-500 text-[11px] uppercase tracking-[0.12em] mb-2">Response time</p>
                  <p className="text-slate-400 text-sm">I read every message and reply within 48 hours. If your question is about restaurant operations, commerce platforms, or product architecture, I&apos;ll always respond — even if I&apos;m not the right person for the role.</p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1} direction="right">
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08]" style={{ background: "rgba(10,15,30,0.6)" }}>
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(0,212,170,0.1)" }}>
                        <CheckCircle2 size={24} className="text-[#00d4aa]" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">Opening your mail client</h3>
                      <p className="text-slate-400 text-sm mb-4">Your message has been pre-filled. Hit send and I&apos;ll reply within 48 hours.</p>
                      <p className="text-slate-500 text-[11px]">Or email directly: sandy.show18@gmail.com</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-white font-semibold text-lg mb-1">Send a message</h2>
                      <p className="text-slate-500 text-sm mb-6">Tell me what you&apos;re building, what the role looks like, and what problem you&apos;re trying to solve. The more specific, the more useful I can be in return.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="contact-name" className="block text-slate-500 text-xs uppercase tracking-wider mb-2">Name</label>
                            <input id="contact-name" type="text" required value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Your name"
                              className="w-full px-4 py-3 rounded-xl border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00d4aa]/40 transition-colors"
                              style={{ background: "rgba(255,255,255,0.03)" }} />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="block text-slate-500 text-xs uppercase tracking-wider mb-2">Email</label>
                            <input id="contact-email" type="email" required value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="your@email.com"
                              className="w-full px-4 py-3 rounded-xl border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00d4aa]/40 transition-colors"
                              style={{ background: "rgba(255,255,255,0.03)" }} />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="block text-slate-500 text-xs uppercase tracking-wider mb-2">Message</label>
                          <textarea id="contact-message" required rows={6} value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="What are you building? What does the role look like? What operational problem are you trying to solve? The more specific, the better the first conversation."
                            className="w-full px-4 py-3 rounded-xl border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00d4aa]/40 transition-colors resize-none"
                            style={{ background: "rgba(255,255,255,0.03)" }} />
                        </div>
                        <button type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00d4aa] text-[#020817] font-semibold hover:bg-[#00b891] transition-all duration-200">
                          <Send size={16} /> Send message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
