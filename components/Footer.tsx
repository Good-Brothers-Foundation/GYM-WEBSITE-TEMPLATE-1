"use client";

import { Zap, MapPin, Phone, Camera, PlayCircle, AtSign } from "lucide-react";

const WA = "https://wa.me/919310256281";

const SOCIALS = [
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: PlayCircle, href: "https://youtube.com", label: "YouTube" },
  { icon: AtSign, href: "https://twitter.com", label: "Twitter" },
];

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Membership Plans", href: "#plans" },
  { label: "Transformations", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Free Trial", href: "#lead" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/7">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center glow-green-sm">
                <Zap size={16} className="text-black fill-black" />
              </div>
              <span className="font-oswald text-lg font-bold text-white tracking-widest">
                POWER<span className="text-[#22c55e]">FIT</span>
              </span>
            </a>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-7">
              Dwarka's premium fitness destination. 500+ members, certified coaches, and results
              that speak for themselves.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-gray-500 hover:text-[#22c55e] hover:border-[#22c55e]/30 hover:bg-[#22c55e]/6 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.18em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-600 text-sm hover:text-[#22c55e] transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.18em] uppercase mb-5">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#22c55e] mt-0.5 shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">
                  Sector 12, Dwarka,
                  <br />New Delhi – 110075
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#22c55e] shrink-0" />
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-[#22c55e] transition-colors"
                >
                  +91 93102 56281
                </a>
              </li>
            </ul>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-wa-btn"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#22c55e]/20 bg-[#22c55e]/6 text-[#22c55e] text-sm font-semibold hover:bg-[#22c55e] hover:text-black transition-all duration-200"
            >
              <Zap size={13} className="fill-current" />
              Join on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 sm:pt-7 flex flex-col xs:flex-row justify-between items-center gap-4 text-center sm:text-left xs:gap-3">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} PowerFit Gym, Dwarka. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Want a website like this?{" "}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22c55e] hover:underline"
            >
              Let's talk →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
