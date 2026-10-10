"use client";

import { motion } from "framer-motion";
import { SiApple, SiGithub } from "react-icons/si";
import { MapPin, Nfc, QrCode, ScanBarcode } from "lucide-react";
import {
  Accent,
  APP_STORE_URL,
  ButtonLink,
  Frame,
  GITHUB_URL,
  Phone,
  SectionLabel,
} from "./ui";

const keyTypes = [
  { icon: Nfc, label: "NFC Tag", bg: "bg-[#0a84ff]" },
  { icon: QrCode, label: "QR Code", bg: "bg-[#bf5af2]" },
  { icon: ScanBarcode, label: "Barcode", bg: "bg-[#ff9f0a]" },
  { icon: MapPin, label: "Location", bg: "bg-[#30d158]" },
];

const facts = ["Free forever", "Open source", "No tracking", "Works offline"];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <Frame>
      <SectionLabel
        index="01"
        title="Screen time control"
        aside="iPhone · iPad · iOS 18+"
      />
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="px-4 pt-14 pb-14 sm:px-10 lg:pt-24 lg:pb-20">
          <motion.h1
            {...rise(0)}
            className="font-display text-[3.4rem] leading-[0.98] font-semibold tracking-[-0.04em] text-ink-strong sm:text-7xl xl:text-[5.6rem]"
          >
            Reclaim
            <br />
            your <Accent>time</Accent>.
          </motion.h1>
          <motion.p
            {...rise(0.1)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Keep your apps blocked. Only unblock them with an NFC tag, QR code,
            barcode or location. Completely free, open source and private.
          </motion.p>

          <motion.div
            {...rise(0.2)}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={APP_STORE_URL}>
              <SiApple size={15} />
              Download on the App Store
            </ButtonLink>
            <ButtonLink href={GITHUB_URL} variant="outline">
              <SiGithub size={15} />
              Browse on GitHub
            </ButtonLink>
          </motion.div>

          <motion.ul
            {...rise(0.28)}
            className="mt-6 flex flex-wrap border-t border-l border-line sm:inline-flex"
          >
            {facts.map((f) => (
              <li
                key={f}
                className="label flex h-10 grow items-center justify-center border-r border-b border-line px-4 text-muted"
              >
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.36)} className="mt-14">
            <p className="label mb-5 text-faint">Physical barrier</p>
            <div className="flex flex-wrap gap-5 sm:gap-7">
              {keyTypes.map((k, i) => (
                <motion.div
                  key={k.label}
                  className="flex flex-col items-center gap-2.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.45 + i * 0.08,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-[18px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] ${k.bg}`}
                  >
                    <k.icon size={28} strokeWidth={2} />
                  </span>
                  <span className="text-sm text-muted">{k.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative h-[560px] overflow-hidden border-t border-line sm:h-[640px] lg:h-auto lg:border-t-0 lg:border-l">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sage/15 blur-[110px]" />

          <motion.div
            className="absolute top-20 left-[calc(50%-12px)] w-[200px] rotate-[7deg] sm:w-[260px] lg:top-28"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          >
            <Phone
              src="/screens/keys.png"
              alt="Keys screen: an NFC desk tag, a fridge QR code and location keys"
              sizes="260px"
            />
          </motion.div>

          <motion.div
            className="absolute top-12 left-[calc(50%-196px)] w-[214px] -rotate-[4deg] sm:left-[calc(50%-250px)] sm:w-[290px] lg:top-16"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <Phone
              src="/screens/homeBlocked.png"
              alt="Normal home screen showing all selected apps blocked"
              sizes="290px"
              preload
            />
          </motion.div>

          <motion.div
            className="absolute right-4 bottom-10 border border-line-strong bg-bg/85 px-4 py-3 backdrop-blur sm:right-10 lg:bottom-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="label flex items-center gap-2 text-sage">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
              8 of 8 apps blocked
            </p>
          </motion.div>
        </div>
      </div>
    </Frame>
  );
}
