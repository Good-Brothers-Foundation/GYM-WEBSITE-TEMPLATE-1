"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

// ==========================================
// 1. TYPES & THEME MAPPING
// ==========================================
type ThemeColor = "green" | "orange" | "blue";

const THEME_MAP: Record<ThemeColor, { bg: string; text: string; border: string; lightBg: string; badge: string }> = {
  green: { bg: "bg-green-500", text: "text-green-500", border: "border-green-500/20", lightBg: "bg-green-500/5", badge: "bg-green-500/10 text-green-500" },
  orange: { bg: "bg-orange-500", text: "text-orange-500", border: "border-orange-500/20", lightBg: "bg-orange-500/5", badge: "bg-orange-500/10 text-orange-500" },
  blue: { bg: "bg-sky-400", text: "text-sky-400", border: "border-sky-400/20", lightBg: "bg-sky-400/5", badge: "bg-sky-400/10 text-sky-400" },
};

interface Testimonial {
  name: string;
  handle: string;
  initials: string;
  theme: ThemeColor;
  stars: number;
  quote: string;
}

interface Transform {
  name: string;
  tag: string;
  before: string;
  after: string;
  time: string;
  theme: ThemeColor;
}

// ==========================================
// 2. DATA (Should ideally be moved to a separate file)
// ==========================================
const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", handle: "Lost 18 kg · 4 months", initials: "RS", theme: "green", stars: 5, quote: "PowerFit completely changed my life. The trainers are genuinely invested in your progress and the atmosphere keeps you coming back every day. Couldn't recommend it more." },
  { name: "Priya Mehta", handle: "Gained strength · 3 months", initials: "PM", theme: "orange", stars: 5, quote: "I was nervous walking into a gym for the first time. The coaches made me feel welcome instantly. Three months later I feel stronger and more confident than ever." },
  { name: "Arjun Singh", handle: "Powerlifter · 3 competitions", initials: "AS", theme: "blue", stars: 5, quote: "World-class equipment and the best coaching staff in Delhi. I've trained in five gyms — PowerFit is in a different league. The PT sessions alone are worth every rupee." },
];

const TRANSFORMS: Transform[] = [
  { name: "Vikram D.", tag: "Fat Loss", before: "94 kg", after: "72 kg", time: "5 months", theme: "green" },
  { name: "Sneha R.", tag: "Muscle Gain", before: "48 kg", after: "56 kg", time: "4 months", theme: "orange" },
  { name: "Rohan K.", tag: "Strength", before: "Bench 60 kg", after: "Bench 110 kg", time: "6 months", theme: "blue" },
];

// ==========================================
// 3. ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

// ==========================================
// 4. SUB-COMPONENTS (Isolated Logic)
// ==========================================
function TestimonialCard({ data }: { data: Testimonial }) {
  const styles = THEME_MAP[data.theme];
  
  return (
    <motion.div
      variants={fadeUpVariant}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="flex flex-col gap-5 rounded-2xl p-6 bg-[#161616] border border-white/7 hover:border-white/12 transition-colors duration-300"
    >
      <div className="flex gap-0.5" aria-label={`Rated ${data.stars} out of 5 stars`}>
        {Array.from({ length: data.stars }).map((_, i) => (
          <Star key={i} size={14} className="fill-orange-500 text-orange-500" aria-hidden="true" />
        ))}
      </div>
      <p className="text-gray-400 text-sm leading-[1.75] flex-1 italic">&ldquo;{data.quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/7">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-black shrink-0 ${styles.bg}`} aria-hidden="true">
          {data.initials}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{data.name}</p>
          <p className="text-gray-600 text-xs">{data.handle}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TransformCard({ data }: { data: Transform }) {
  const styles = THEME_MAP[data.theme];

  return (
    <motion.div
      variants={scaleUpVariant}
      whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
      className={`rounded-2xl overflow-hidden border ${styles.border}`}
    >
      <div className="flex">
        <div className="flex-1 bg-[#111] p-5 border-r border-white/7">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5">Before</p>
          <p className="font-oswald text-2xl font-bold text-gray-500">{data.before}</p>
        </div>
        <div className={`flex-1 p-5 ${styles.lightBg}`}>
          <p className={`text-[10px] uppercase tracking-widest mb-1.5 font-semibold ${styles.text}`}>After</p>
          <p className={`font-oswald text-2xl font-bold ${styles.text}`}>{data.after}</p>
        </div>
      </div>
      <div className="px-5 py-3.5 flex items-center justify-between bg-[#141414]">
        <div>
          <p className="text-white text-sm font-semibold">{data.name}</p>
          <p className="text-gray-600 text-xs">{data.time}</p>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${styles.badge}`}>
          <TrendingUp size={11} aria-hidden="true" />
          {data.tag}
        </span>
      </div>
    </motion.div>
  );
}

// ==========================================
// 5. MAIN COMPONENT
// ==========================================
export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="testimonials" className="py-24 bg-[#0f0f0f]">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-24" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>
          <SectionHeader label="Real Results" title="MEMBERS WHO" highlight="TRANSFORMED" inView={inView} />
        </div>

        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} data={t} />
          ))}
        </motion.div>

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
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {TRANSFORMS.map((tr) => (
            <TransformCard key={tr.name} data={tr} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}