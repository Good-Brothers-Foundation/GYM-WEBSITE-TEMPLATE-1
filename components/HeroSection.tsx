"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Users, Star } from "lucide-react";

const WA = "https://wa.me/919310256281";
const TRIAL = "https://wa.me/919310256281?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial!";

const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Expert Coaches" },
  { value: "5.0", label: "Google Rating" },
  { value: "3+", label: "Years Trusted" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0f0f0f]/40 to-[#0f0f0f]" />

      {/* Radial glow blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#22c55e]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#f97316]/4 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div {...fade(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22c55e]/25 bg-[#22c55e]/8 text-[#22c55e] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            #1 Fitness Destination in Dwarka
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fade(0.2)}
          className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.0] tracking-tight mb-6"
        >
          TRANSFORM
          <br />
          <span className="text-[#22c55e] text-glow">YOUR BODY</span>
          <br />
          <span className="text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            AT THE BEST GYM
          </span>
          <br />
          <span className="text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            IN DWARKA
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fade(0.3)}
          className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-8"
        >
          Expert coaching, world-class equipment, and a community that holds you accountable —
          every single day.
        </motion.p>

        {/* Trust line */}
        <motion.div {...fade(0.35)} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 w-full px-4">
          <div className="flex -space-x-2">
            {["RS", "PM", "AK", "VD"].map((i) => (
              <div
                key={i}
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/30 flex items-center justify-center text-[11px] sm:text-[10px] font-bold text-[#22c55e]"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#f97316] text-[#f97316]" />
              ))}
            </div>
            <span className="text-center sm:text-left">
              <span className="text-white font-semibold">500+ Members</span> already transforming
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...fade(0.4)} className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto mb-20">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-wa-btn"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#22c55e] text-black font-bold text-base hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all duration-200 glow-green w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Join Now on WhatsApp
          </a>
          <a
            href={TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-trial-btn"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white font-semibold text-base hover:border-[#22c55e]/50 hover:text-[#22c55e] hover:bg-[#22c55e]/5 active:scale-95 transition-all duration-200 w-full sm:w-auto"
          >
            Book Free Trial
            <span className="text-gray-500 group-hover:text-[#22c55e] transition-colors">→</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fade(0.5)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/8 w-full max-w-4xl"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <p className="font-oswald text-3xl sm:text-4xl font-bold text-[#22c55e] text-glow leading-none">
                {s.value}
              </p>
              <p className="text-gray-500 text-sm mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
