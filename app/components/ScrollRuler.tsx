"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const TICKS = Array.from({ length: 51 }, (_, i) => i * 2);

export default function ScrollRuler() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });
  const top = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-14 right-0 bottom-0 z-40 hidden w-12 2xl:block"
    >
      <div className="relative h-full py-4">
        <div className="relative h-full">
          {TICKS.map((t) => (
            <div
              key={t}
              className="absolute right-0 flex -translate-y-1/2 items-center gap-1.5"
              style={{ top: `${t}%` }}
            >
              {t % 10 === 0 && (
                <span className="font-mono text-[9px] text-faint">{t}</span>
              )}
              <span
                className={`h-px bg-line-strong ${t % 10 === 0 ? "w-4" : "w-2"}`}
              />
            </div>
          ))}
          <motion.div
            className="absolute right-0 flex -translate-y-1/2 items-center"
            style={{ top }}
          >
            <span className="h-px w-7 bg-sage" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
