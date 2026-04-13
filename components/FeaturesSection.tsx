"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Medal, Dumbbell, UserCheck, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: Medal,
    title: "Certified Trainers",
    desc: "NSCA & ACE certified coaches who craft personalized plans designed to deliver real, measurable results.",
    accent: "#22c55e",
    bg: "rgba(34,197,94,0.06)",
    border: "rgba(34,197,94,0.18)",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "5,000 sq ft training floor — Olympic racks, cable systems, cardio zone, and everything in between.",
    accent: "#f97316",
    bg: "rgba(249,115,22,0.06)",
    border: "rgba(249,115,22,0.18)",
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    desc: "Dedicated 1-on-1 sessions laser-focused on your goal — fat loss, muscle gain, or athletic performance.",
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.06)",
    border: "rgba(56,189,248,0.18)",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Open 6 AM – 10 PM every day of the week. We work around your schedule, not the other way around.",
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.18)",
  },
];

function SectionHeader({
  label,
  title,
  highlight,
  sub,
  inView,
}: {
  label: string;
  title: string;
  highlight: string;
  sub?: string;
  inView: boolean;
}) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
        className="text-[#22c55e] text-xs font-bold tracking-[0.22em] uppercase mb-4"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
      >
        {title}
        <br />
        <span className="text-[#22c55e]">{highlight}</span>
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-gray-500 text-base mt-5 max-w-md mx-auto leading-relaxed"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

export { SectionHeader };

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="features" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>
          <SectionHeader
            label="Why Choose Us"
            title="EVERYTHING YOU NEED"
            highlight="TO SUCCEED"
            sub="We've built the ultimate training environment. Your only job is to show up."
            inView={inView}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
                style={{ background: f.bg, border: `1px solid ${f.border}` }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                  style={{ boxShadow: `inset 0 0 40px ${f.bg}` }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: f.bg, border: `1px solid ${f.border}` }}
                >
                  <Icon size={20} style={{ color: f.accent }} />
                </div>

                <h3 className="font-oswald text-lg font-semibold text-white mb-2 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"
                  style={{ background: f.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
