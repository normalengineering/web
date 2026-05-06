"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Code2, Smartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="text-center max-w-3xl mx-auto mb-14 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <Code2 size={14} />
          Free &amp; Open Source
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          Take back your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            screen time.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A powerful screen time blocker that&apos;s completely free, open
          source, and private. No subscriptions. No paywalls. No data
          collection.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900/80 border border-zinc-800 px-5 py-3 text-sm text-zinc-300">
            <Smartphone size={16} />
            Coming Soon on App Store
          </span>
          <a
            href="https://github.com/normalengineering/normal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-900 transition-colors"
          >
            <SiGithub size={16} />
            View on GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <PhoneMockup
          src="/IMG_2424.PNG"
          alt="Normal app — all selected apps blocked"
          size="large"
          priority
        />
      </motion.div>
    </section>
  );
}
