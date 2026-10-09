"use client";

import { motion } from "framer-motion";
import { SiApple, SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";
import { fadeInUp } from "./animations";
import { Ref } from "./sources";
import {
  formatHoursSpoken,
  LIFESPAN,
  useScreenTime,
  yearsOnPhone,
} from "./ScreenTime";
import {
  Accent,
  APP_STORE_URL,
  ButtonLink,
  EMAIL,
  Frame,
  GITHUB_URL,
} from "./ui";

export default function CTA() {
  const { hours, age } = useScreenTime();
  const yearsBack = yearsOnPhone(hours, age) / 2;

  return (
    <Frame id="contact">
      <div className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/10 blur-[120px]" />
        <motion.div
          {...fadeInUp}
          className="relative px-4 py-24 text-center sm:px-10 lg:py-36"
        >
          <p className="label text-faint">Free · Open source · Private</p>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-5xl leading-[0.98] font-semibold tracking-[-0.04em] text-ink-strong sm:text-6xl md:text-7xl">
            What would you do with{" "}
            <Accent>{formatHoursSpoken(hours / 2)}</Accent> a day back?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
            That&apos;s half your daily screen time, or{" "}
            <span className="text-ink-strong">
              {yearsBack.toFixed(1)} years
            </span>{" "}
            by age {LIFESPAN}. People who blocked mobile internet for two weeks
            in a 2025 study cut about 2&frac12; hours a day.
            <Ref s="castelo" />
            {" Download Normal and create a physical barrier."}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={APP_STORE_URL}>
              <SiApple size={15} />
              Download on the App Store
            </ButtonLink>
            <ButtonLink href={GITHUB_URL} variant="outline">
              <SiGithub size={15} />
              Browse on GitHub
            </ButtonLink>
            <ButtonLink
              href={`mailto:${EMAIL}`}
              variant="outline"
              external={false}
            >
              <Mail size={15} />
              Email us
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}
