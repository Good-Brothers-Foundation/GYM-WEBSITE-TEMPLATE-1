"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star, Volume2, VolumeX } from "lucide-react";

const WA = "https://wa.me/919310256281";
const TRIAL = "https://wa.me/919310256281?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial!";

const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Expert Coaches" },
  { value: "5.0", label: "Google Rating" },
  { value: "3+", label: "Years Trusted" },
];

const AVATARS = ["RS", "PM", "AK", "VD"];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] max-h-[1000px] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* ── VIDEO BACKGROUND ── */}
      {/* Drop your gym video at: /public/videos/gym-bg.mp4          */}
      {/* Free sources: coverr.co · pexels.com · pixabay.com         */}
      {/* Search "gym workout" — pick a 15-30s loop, 1080p, <15 MB   */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      >
        <source src="/videos/gym.mp4" type="video/mp4" />
      </video>

      {/* ── OVERLAYS ── */}
      {/* Base dark coat so text is always readable */}
      <div className="absolute inset-0 bg-black/58 pointer-events-none" />
      {/* Radial vignette — darkens edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.52) 100%)",
        }}
      />
      {/* Bottom fade into page background color */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />

      {/* ── CONTENT ── */}
      {/* gap-4 keeps everything tight enough to fit one viewport height */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center gap-4">

        {/* Badge */}
        <motion.div {...fade(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            #1 Fitness Destination in Dwarka
          </span>
        </motion.div>

        {/* Headline */}
        {/* clamp() scales with viewport so it never overflows vertically */}
        <motion.h1
          {...fade(0.2)}
          className="font-oswald font-black leading-[0.92] tracking-tight text-white"
          style={{ fontSize: "clamp(40px, 7.5vw, 86px)" }}
        >
          TRANSFORM
          <br />
          <span
            className="text-[#22c55e]"
            style={{
              textShadow:
                "0 0 50px rgba(34,197,94,0.55), 0 0 100px rgba(34,197,94,0.2)",
            }}
          >
            YOUR BODY
          </span>
          <br />
          <span
            style={{
              fontSize: "clamp(26px, 5vw, 58px)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            AT THE BEST GYM IN DWARKA
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fade(0.28)}
          className="text-gray-400 max-w-md leading-relaxed"
          style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}
        >
          Expert coaching, world-class equipment, and a community that holds you
          accountable — every single day.
        </motion.p>

        {/* Trust row */}
        <motion.div
          {...fade(0.34)}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <div className="flex -space-x-2">
            {AVATARS.map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#22c55e]/20 border-2 border-[#22c55e]/35 flex items-center justify-center text-[9px] font-bold text-[#22c55e]"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-[#f97316] text-[#f97316]" />
              ))}
            </div>
            <span>
              <span className="text-white font-semibold">500+ Members</span>{" "}
              already transforming
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          {...fade(0.4)}
          className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-wa-btn"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#22c55e] text-black font-bold text-sm hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto"
            style={{
              boxShadow:
                "0 0 28px rgba(34,197,94,0.4), 0 0 70px rgba(34,197,94,0.12)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Join Now on WhatsApp
          </a>
          <a
            href={TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-trial-btn"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:border-[#22c55e]/50 hover:text-[#22c55e] hover:bg-[#22c55e]/5 active:scale-95 transition-all duration-200 w-full sm:w-auto"
          >
            Book Free Trial{" "}
            <span className="text-gray-500">→</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fade(0.48)}
          className="grid grid-cols-4 gap-0 pt-4 border-t border-white/10 w-full max-w-2xl"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center ${
                i < STATS.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <p
                className="font-oswald font-bold text-[#22c55e] leading-none"
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  textShadow: "0 0 22px rgba(34,197,94,0.4)",
                }}
              >
                {s.value}
              </p>
              <p className="text-gray-500 text-[10px] sm:text-[11px] mt-1 font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── SCROLL HINT ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 z-10"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={13} />
        </motion.div>
      </motion.div>

      {/* ── MUTE TOGGLE ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-5 right-5 z-20 w-9 h-9 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white/60 hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-all duration-200"
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </motion.button>
    </section>
  );
}