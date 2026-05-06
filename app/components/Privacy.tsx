"use client";

import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, Code2, Smartphone } from "lucide-react";
import { fadeInUp, containerVariants, itemVariants } from "./animations";

const cards = [
  {
    title: "Zero Data Collection",
    desc: "We don't collect, store, or transmit any of your data. Period.",
    icon: EyeOff,
  },
  {
    title: "Fully Open Source",
    desc: "Every line of code is public. Verify our privacy claims yourself.",
    icon: Code2,
  },
  {
    title: "Local Storage Only",
    desc: "All settings, keys, and preferences stay on your device.",
    icon: Smartphone,
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 lg:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent pointer-events-none" />
      <div className="mx-auto max-w-4xl text-center relative">
        <motion.div {...fadeInUp}>
          <ShieldCheck size={48} className="text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Your data never leaves
            <br />
            your device.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-14 leading-relaxed">
            No accounts. No cloud sync. No analytics. No tracking. Everything is
            stored locally on your iPhone and never transmitted anywhere.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {cards.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-left"
              variants={itemVariants}
            >
              <item.icon size={24} className="text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
