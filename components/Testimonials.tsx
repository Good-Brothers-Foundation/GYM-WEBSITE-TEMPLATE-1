"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    handle: "Lost 18 kg · 4 months",
    initials: "RS",
    color: "#22c55e",
    stars: 5,
    quote:
      "PowerFit completely changed my life. The trainers are genuinely invested in your progress and the atmosphere keeps you coming back every day. Couldn't recommend it more.",
  },
  {
    name: "Priya Mehta",
    handle: "Gained strength · 3 months",
    initials: "PM",
    color: "#f97316",
    stars: 5,
    quote:
      "I was nervous walking into a gym for the first time. The coaches made me feel welcome instantly. Three months later I feel stronger and more confident than ever.",
  },
  {
    name: "Arjun Singh",
    handle: "Powerlifter · 3 competitions",
    initials: "AS",
    color: "#38bdf8",
    stars: 5,
    quote:
      "World-class equipment and the best coaching staff in Delhi. I've trained in five gyms — PowerFit is in a different league. The PT sessions alone are worth every rupee.",
  },
];

const TRANSFORMS = [
  { name: "Vikram D.", tag: "Fat Loss",   before: "94 kg",       after: "72 kg",       time: "5 months", color: "#22c55e" },
  { name: "Sneha R.", tag: "Muscle Gain", before: "48 kg",       after: "56 kg",       time: "4 months", color: "#f97316" },
  { name: "Rohan K.", tag: "Strength",    before: "Bench 60 kg", after: "Bench 110 kg", time: "6 months", color: "#38bdf8" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="testimonials" className="py-24 bg-[#0f0f0f]">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-24" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>
          <SectionHeader
            label="Real Results"
            title="MEMBERS WHO"
            highlight="TRANSFORMED"
            inView={inView}
          />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="flex flex-col gap-5 rounded-2xl p-6 bg-[#161616] border border-white/7 hover:border-white/12 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-[#f97316] text-[#f97316]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-400 text-sm leading-[1.75] flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/7">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-black shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex-1 h-px bg-white/7" />
          <span className="text-gray-600 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
            Before & After Highlights
          </span>
          <div className="flex-1 h-px bg-white/7" />
        </motion.div>

        {/* Transformation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TRANSFORMS.map((tr, i) => (
            <motion.div
              key={tr.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: `${tr.color}20` }}
            >
              {/* Before / After split */}
              <div className="flex">
                <div className="flex-1 bg-[#111] p-5 border-r border-white/7">
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5">Before</p>
                  <p className="font-oswald text-2xl font-bold text-gray-500">{tr.before}</p>
                </div>
                <div className="flex-1 p-5" style={{ background: `${tr.color}08` }}>
                  <p
                    className="text-[10px] uppercase tracking-widest mb-1.5 font-semibold"
                    style={{ color: tr.color }}
                  >
                    After
                  </p>
                  <p className="font-oswald text-2xl font-bold" style={{ color: tr.color }}>
                    {tr.after}
                  </p>
                </div>
              </div>

              {/* Footer row */}
              <div
                className="px-5 py-3.5 flex items-center justify-between"
                style={{ background: "#141414" }}
              >
                <div>
                  <p className="text-white text-sm font-semibold">{tr.name}</p>
                  <p className="text-gray-600 text-xs">{tr.time}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: `${tr.color}12`, color: tr.color }}
                >
                  <TrendingUp size={11} />
                  {tr.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
