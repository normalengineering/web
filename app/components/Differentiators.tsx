"use client";

import { motion } from "framer-motion";
import { Heart, Code2, EyeOff, Zap } from "lucide-react";
import { containerVariants, itemVariants } from "./animations";

const items = [
  {
    icon: Heart,
    title: "Free Forever",
    desc: "No hidden costs or premium tiers",
  },
  {
    icon: Code2,
    title: "Open Source",
    desc: "Fully transparent and auditable",
  },
  {
    icon: EyeOff,
    title: "No Data Collection",
    desc: "Everything stays on your device",
  },
  {
    icon: Zap,
    title: "Full Featured",
    desc: "Actually use your phone less",
  },
];

export default function Differentiators() {
  return (
    <section className="border-y border-zinc-800/60 bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              className="text-center"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 mb-4">
                <item.icon size={22} className="text-blue-400" />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
