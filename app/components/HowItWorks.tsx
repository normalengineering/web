"use client";

import { motion } from "framer-motion";
import { AppWindow, DoorClosed, KeyRound } from "lucide-react";
import { containerVariants, fadeInUp, itemVariants } from "./animations";
import { Accent, Frame, SectionLabel } from "./ui";

const steps = [
  {
    icon: AppWindow,
    title: "Pick your apps",
    desc: "Choose the apps and websites to block with Apple's Screen Time picker. Normal blocks them right away.",
  },
  {
    icon: KeyRound,
    title: "Register a key",
    desc: "Scan any NFC tag, QR code or barcode, or drop a pin on a map. That key is now the only way to unblock.",
  },
  {
    icon: DoorClosed,
    title: "Create a physical barrier",
    desc: "Keep your key in your car, at the office or with a friend. However hard it is to reach your key is how hard it is to unblock.",
  },
];

export default function HowItWorks() {
  return (
    <Frame id="how">
      <SectionLabel index="05" title="How it works" aside="Setup in a minute" />
      <motion.div {...fadeInUp} className="px-4 py-16 sm:px-10 lg:py-24">
        <h2 className="max-w-3xl font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl">
          A physical barrier for a <Accent>digital</Accent> habit.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Most blockers ask if you&apos;re sure. Normal makes you get up.
        </p>
      </motion.div>

      <motion.ol
        className="grid gap-px border-t border-line bg-line md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            variants={itemVariants}
            className="relative bg-bg p-6 sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center border border-line-strong text-sage">
                <s.icon size={18} />
              </span>
              <span className="font-display text-6xl leading-none font-semibold text-line-strong">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-strong">
              {s.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Frame>
  );
}
