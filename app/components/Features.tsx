"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  CalendarClock,
  Hourglass,
  Layers,
  MapPin,
  Nfc,
  ShieldCheck,
  Timer,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { containerVariants, itemVariants } from "./animations";
import { Frame, Phone, SectionLabel } from "./ui";

interface Feature {
  category: string;
  icon: LucideIcon;
  title: [string, string];
  desc: string;
  tags: string[];
  screen: string;
  alt: string;
  color: string;
  isNew?: boolean;
}

const features: Feature[] = [
  {
    category: "Physical keys",
    icon: Nfc,
    title: ["Any ", "Key"],
    desc: "Use any NFC tag, QR code or barcode as your key. AirTags, stickers, cards, even a snack wrapper.",
    tags: ["NFC", "QR Code", "Barcode"],
    screen: "/screens/keys.png",
    alt: "Keys screen with NFC, QR code and location keys",
    color: "#5aa9ff",
  },
  {
    category: "Location keys",
    icon: MapPin,
    title: ["Location ", "Keys"],
    desc: "Only unblock at the park, the office or the gym. Or never at home, with a block radius.",
    tags: ["Unblock radius", "Block radius"],
    screen: "/screens/locationKey.png",
    alt: "Location key with an unblock radius around Central Park",
    color: "#4ade80",
    isNew: true,
  },
  {
    category: "App groups",
    icon: Layers,
    title: ["App ", "Groups"],
    desc: "Socials, email, games. Unblock just the group you need and keep everything else locked.",
    tags: ["Unlimited groups", "Group keys"],
    screen: "/screens/groups.png",
    alt: "App groups: Socials, Email and Entertainment",
    color: "#c084fc",
  },
  {
    category: "Timed unblocks",
    icon: Timer,
    title: ["Timed ", "Unblocks"],
    desc: "Unblock for 15 minutes and Normal re-blocks on its own. No willpower required.",
    tags: ["Auto re-block", "Custom durations"],
    screen: "/screens/timed.png",
    alt: "Timed unblock duration picker",
    color: "#ffb340",
  },
  {
    category: "Max daily limits",
    icon: Hourglass,
    title: ["Daily ", "Limits"],
    desc: "Hard daily caps that hold, even when everything else is unblocked. Out of time means out of time.",
    tags: ["Hard cap", "Custom reset"],
    screen: "/screens/limits.png",
    alt: "Max daily limits with available, almost reached and limit reached states",
    color: "#ff6b61",
    isNew: true,
  },
  {
    category: "Schedules",
    icon: CalendarClock,
    title: ["Auto ", "Schedules"],
    desc: "Block during work, evenings or weekends. Set it once and it runs every week.",
    tags: ["Recurring", "Block or unblock"],
    screen: "/screens/schedules.png",
    alt: "Schedules: Work Focus, Evening Email and Wind Down",
    color: "#5ee0e6",
  },
  {
    category: "Prevent bypassing",
    icon: ShieldCheck,
    title: ["Prevent ", "Bypassing"],
    desc: "Prevent app deletion and lock Screen Time settings so there's no way around it.",
    tags: ["Prevent deletion", "Bypass guide"],
    screen: "/screens/screenTime.png",
    alt: "iOS Screen Time settings with Lock Screen Time Settings",
    color: "#ff7ab0",
  },
  {
    category: "Shortcuts & widgets",
    icon: Zap,
    title: ["Quick ", "Actions"],
    desc: "Block from Control Center, the Shortcuts app or an automation. Start an unblock from a Home Screen widget.",
    tags: ["Control Center", "Shortcuts", "Widgets"],
    screen: "/screens/homeTimed.png",
    alt: "Home screen with a timed unblock active and a Block All Now button",
    color: "#b8d4c8",
  },
];

function FeatureCard({ f, index }: { f: Feature; index: number }) {
  return (
    <motion.article
      variants={itemVariants}
      style={{ "--c": f.color } as CSSProperties}
      className="group relative flex flex-col bg-bg"
    >
      <div className="flex h-12 items-center justify-between gap-3 border-b border-line px-5">
        <span className="label bg-(--c) px-1.5 py-1 font-semibold text-black">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="label flex items-center gap-2 truncate text-faint">
          {f.isNew && <span className="text-(--c)">New ·</span>}
          {f.category}
        </span>
      </div>

      <div className="relative h-72 overflow-hidden border-b border-line bg-sunken">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--c) opacity-[0.14] blur-[70px] transition-opacity duration-500 group-hover:opacity-25" />
        <div className="absolute top-8 left-1/2 w-[220px] -translate-x-1/2 transition-transform duration-500 ease-out group-hover:-translate-y-3">
          <Phone src={f.screen} alt={f.alt} sizes="220px" />
        </div>
      </div>

      <div className="relative flex grow flex-col px-5 pt-12 pb-7 sm:px-7">
        <span className="absolute -top-8 left-5 flex h-16 w-16 items-center justify-center rounded-[18px] border border-white/10 bg-(--c) text-black shadow-[0_12px_30px_-8px_rgba(0,0,0,0.7)] sm:left-7">
          <f.icon size={28} strokeWidth={2} />
        </span>
        <h3 className="font-display text-[1.9rem] leading-none font-semibold tracking-[-0.03em] text-ink-strong">
          {f.title[0]}
          <span className="text-(--c)">{f.title[1]}</span>
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{f.desc}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {f.tags.map((t) => (
            <li
              key={t}
              className="label border border-(--c)/40 px-2 py-1.5 text-[10px] text-(--c)"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Features() {
  return (
    <Frame id="features">
      <SectionLabel index="06" title="Features" aside="Everything is free" />
      <motion.div
        className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {features.map((f, i) => (
          <FeatureCard key={f.category} f={f} index={i} />
        ))}
      </motion.div>
    </Frame>
  );
}
