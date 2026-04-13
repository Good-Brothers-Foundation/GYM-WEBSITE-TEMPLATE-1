"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Results", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#lead" },
];
const WA = "https://wa.me/919310256281";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center glow-green-sm group-hover:scale-110 transition-transform duration-200">
              <Zap className="w-4.5 h-4.5 text-black fill-black" size={18} />
            </div>
            <span className="font-oswald text-base sm:text-lg font-bold tracking-widest text-white">
              POWER<span className="text-[#22c55e]">FIT</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150 tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-cta"
              className="px-5 py-2 rounded-xl bg-[#22c55e] text-black text-sm font-bold hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all duration-150 glow-green-sm"
            >
              Join Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#111]/95 backdrop-blur-xl border-b border-white/8 px-6 py-5 flex flex-col gap-4"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-[#22c55e] font-medium py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 py-3 rounded-xl bg-[#22c55e] text-black font-bold text-center text-sm glow-green"
            >
              Join Now on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
