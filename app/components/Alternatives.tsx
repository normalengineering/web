"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { containerVariants, fadeInUp, itemVariants } from "./animations";
import { Accent, Frame, SectionLabel } from "./ui";
import { Ref } from "./sources";

const fixes = [
  { name: "Screen Time limits", flaw: "Ignore Limit is one tap away." },
  { name: "Deleting apps", flaw: "Reinstalling takes seconds." },
  { name: "Grayscale mode", flaw: "One toggle and it's undone." },
];

export default function Alternatives() {
  return (
    <Frame id="why-normal">
      <SectionLabel
        index="04"
        title="Why Normal"
        aside="Willpower not required"
      />
      <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <motion.div
          {...fadeInUp}
          className="border-b border-line px-4 py-16 sm:px-10 lg:border-r lg:border-b-0 lg:py-24"
        >
          <h2 className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl">
            Willpower isn&apos;t a <Accent>strategy</Accent>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Even people who volunteered to block their mobile internet
            struggled. Only about{" "}
            <span className="text-ink-strong">1 in 4</span> kept the block on
            for 10 of 14 days.
            <Ref s="castelo" />
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            If turning it off is easy, you will. So Normal makes it hard on
            purpose.
          </p>
        </motion.div>

        <motion.ul
          className="grid gap-px bg-line sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {fixes.map((f) => (
            <motion.li
              key={f.name}
              variants={itemVariants}
              className="flex flex-col bg-bg p-6 sm:p-8"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-line-strong text-faint">
                <X size={16} />
              </span>
              <p className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em] text-faint line-through decoration-1">
                {f.name}
              </p>
              <p className="mt-2 text-muted">{f.flaw}</p>
            </motion.li>
          ))}
          <motion.li
            variants={itemVariants}
            className="theme-sage flex flex-col p-6 sm:p-8"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-brand-ink text-[#b8d4c8]">
              <Check size={16} />
            </span>
            <p className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em]">
              Normal
            </p>
            <p className="mt-2 text-muted">
              Your key creates a physical barrier: no key, no unblock. Prevent
              bypassing and there&apos;s no way around it.
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </Frame>
  );
}
