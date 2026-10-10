"use client";

import { motion } from "framer-motion";
import {
  Code2,
  EyeOff,
  Heart,
  LifeBuoy,
  LockKeyhole,
  WifiOff,
} from "lucide-react";
import { containerVariants, itemVariants } from "./animations";
import { Frame, SectionLabel } from "./ui";

const principles = [
  {
    icon: Heart,
    title: "Free forever",
    desc: "No subscriptions, paywalls or in-app purchases. It shouldn't cost anything to use your phone less.",
  },
  {
    icon: Code2,
    title: "Open source",
    desc: "Every line is on GitHub under the MIT license. Read it, fork it, verify every claim on this page.",
  },
  {
    icon: EyeOff,
    title: "Nothing leaves your phone",
    desc: "No accounts, analytics or tracking. Your keys, groups and schedules are stored only on your device.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "No internet connection is needed to set up or enforce blocks. Everything runs locally.",
  },
  {
    icon: LockKeyhole,
    title: "Blocked by default",
    desc: "Apple's Screen Time asks if you want to continue. Normal keeps apps blocked until you scan your key.",
  },
  {
    icon: LifeBuoy,
    title: "An emergency exit",
    desc: "Three emergency unblocks for when you truly need one. Each use takes six months to come back.",
  },
];

export default function Principles() {
  return (
    <Frame id="principles">
      <SectionLabel index="07" title="Principles" aside="No catch" />
      <motion.div
        className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            className="bg-bg p-6 transition-colors hover:bg-raised sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center border border-line-strong text-sage">
                <p.icon size={18} />
              </span>
              <span className="label text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-strong">
              {p.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Frame>
  );
}
