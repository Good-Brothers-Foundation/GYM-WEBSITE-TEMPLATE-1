"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, Flame, MessageCircle, Zap } from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

const WA = "https://wa.me/919310256281";

const PLANS = [
  {
    name: "Starter",
    tag: "1 Month",
    price: "₹1,499",
    sub: null,
    popular: false,
    features: [
      "Full gym floor access",
      "Locker room facility",
      "Cardio + free weights",
      "Group fitness classes",
      "Gym induction session",
    ],
    btnClass: "border border-white/12 text-white hover:border-[#22c55e]/40 hover:text-[#22c55e] hover:bg-[#22c55e]/5",
    cardGlow: "",
  },
  {
    name: "Power",
    tag: "3 Months",
    price: "₹3,499",
    sub: "Save ₹999 · ₹1,166/mo",
    popular: true,
    features: [
      "Everything in Starter",
      "1 PT session per week",
      "Nutrition consultation",
      "Body composition tracking",
      "Priority coach support",
      "Free protein shake / visit",
    ],
    btnClass: "bg-[#22c55e] text-black hover:bg-[#16a34a] glow-green font-bold",
    cardGlow: "shadow-[0_0_60px_rgba(34,197,94,0.08)]",
  },
  {
    name: "Elite",
    tag: "12 Months",
    price: "₹9,999",
    sub: "Best value · ₹833/mo",
    popular: false,
    features: [
      "Everything in Power",
      "Unlimited PT sessions",
      "Custom meal plan",
      "Supplement guidance",
      "4× guest passes",
      "Annual transformation plan",
    ],
    btnClass: "border border-[#f97316]/30 text-[#f97316] hover:bg-[#f97316]/8 hover:border-[#f97316]/60",
    cardGlow: "",
  },
];

export default function MembershipPlans() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="plans" className="py-24 bg-[#0c0c0c]">
      {/* Top divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-24" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>
          <SectionHeader
            label="Membership Plans"
            title="SIMPLE, HONEST"
            highlight="PRICING"
            sub="No hidden fees. No lock-in tricks. Just results you can count on."
            inView={inView}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative flex flex-col rounded-2xl border p-7 ${plan.cardGlow} ${plan.popular
                  ? "border-[#22c55e]/30 bg-[#22c55e]/4"
                  : "border-white/7 bg-[#161616]"
                }`}
            >
              {/* Popular pill */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#22c55e] text-black text-[11px] font-black tracking-widest uppercase glow-green">
                    <Flame size={12} />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-7 mt-3">
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">
                  {plan.tag}
                </p>
                <h3 className="font-oswald text-2xl font-bold text-white tracking-wide">
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-7 pb-7 border-b border-white/7">
                <span className="font-oswald text-5xl font-bold text-white">{plan.price}</span>
                {plan.sub && (
                  <p className="text-gray-500 text-xs mt-2">{plan.sub}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.popular ? "text-[#22c55e]" : "text-gray-600"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${WA}?text=Hi%2C%20I%27m%20interested%20in%20the%20${plan.name}%20plan`}
                target="_blank"
                rel="noopener noreferrer"
                id={`plan-${plan.name.toLowerCase()}`}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${plan.btnClass}`}
              >
                <MessageCircle size={15} />
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-10 flex items-center justify-center gap-2"
        >
          <Zap size={13} className="text-[#22c55e]" />
          All plans include locker access, WiFi, and group classes
        </motion.p>
      </div>
    </section>
  );
}
