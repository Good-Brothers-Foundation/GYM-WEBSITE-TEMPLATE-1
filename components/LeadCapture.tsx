"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, MessageCircle, User, Phone, ArrowRight, ShieldCheck } from "lucide-react";

const WA = "https://wa.me/919310256281";
const TRIAL_WA = "https://wa.me/919310256281?text=Hi%2C%20I%20want%20to%20book%20a%20FREE%20trial%20at%20PowerFit!";

const PERKS = [
  "Free 1-day full gym pass",
  "Body assessment included",
  "No payment or card needed",
];

export default function LeadCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit mobile number";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    
    setLoading(true);
    try {
      // Send to backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone }),
      });

      if (!response.ok) {
        const error = await response.json();
        setErrors({ name: error.error || "Something went wrong" });
        return;
      }

      // Success - show confirmation message
      setSubmitted(true);
      // Reset form after showing success for 3 seconds
      setTimeout(() => {
        setForm({ name: "", phone: "" });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setErrors({ name: "Failed to submit. Please try again." });
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="lead" className="py-24 bg-[#0c0c0c] relative overflow-hidden">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent mb-24" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[400px] rounded-full bg-[#22c55e]/4 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        <div
          className="rounded-3xl border border-[#22c55e]/15 overflow-hidden"
          style={{ background: "linear-gradient(135deg,#111 0%,#0e1a0e 100%)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ── Left copy ─────────────────── */}
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35 }}
                className="text-[#22c55e] text-xs font-bold tracking-[0.22em] uppercase mb-4"
              >
                Limited Slots This Month
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-oswald text-4xl sm:text-5xl font-bold text-white leading-[1.05] mb-4"
              >
                CLAIM YOUR
                <br />
                <span className="text-[#22c55e]">FREE TRIAL</span>
                <br />
                TODAY
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs"
              >
                Drop your details — our team will reach out within the hour to confirm your slot.
              </motion.p>

              {/* Perks */}
              <div className="space-y-3 mb-8">
                {PERKS.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={15} className="text-[#22c55e] shrink-0" />
                    <span className="text-gray-400 text-sm">{p}</span>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp alt */}
              <motion.a
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                href={TRIAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                id="lead-wa-alt"
                className="group inline-flex items-center gap-2 text-[#25D366] text-sm font-semibold hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                Or book directly on WhatsApp
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* ── Right form ────────────────── */}
            <div className="p-6 sm:p-10 lg:p-14 border-t md:border-t-0 md:border-l border-white/6 flex items-center">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center text-center gap-5"
                >
                  <div className="w-20 h-20 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center glow-green-sm">
                    <CheckCircle size={36} className="text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-3xl font-bold text-white mb-2">You're In! 🎉</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Redirecting you to WhatsApp…
                      <br />Our team will confirm your free trial slot shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="w-full space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                      <input
                        id="lead-name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0f0f0f] border text-white placeholder-gray-700 text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-[#22c55e]/15 ${errors.name
                            ? "border-red-500/50 focus:border-red-500/50"
                            : "border-white/8 focus:border-[#22c55e]/40"
                          }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400/80 text-xs mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2"
                    >
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                      />
                      <input
                        id="lead-phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0f0f0f] border text-white placeholder-gray-700 text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-[#22c55e]/15 ${errors.phone
                            ? "border-red-500/50 focus:border-red-500/50"
                            : "border-white/8 focus:border-[#22c55e]/40"
                          }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400/80 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    id="lead-submit"
                    className="w-full py-4 rounded-xl bg-[#22c55e] text-black font-bold text-sm tracking-wide hover:bg-[#16a34a] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-150 glow-green mt-2"
                  >
                    {loading ? "Submitting..." : "Get My Free Trial →"}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-gray-700 text-xs">
                    <ShieldCheck size={13} />
                    <span>100% private. We never share your info.</span>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
