"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Smartphone } from "lucide-react";
import { fadeInUp } from "./animations";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6 border-t border-zinc-800/60">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div {...fadeInUp}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
              <Smartphone size={16} />
              Coming Soon on App Store
            </span>
            <a
              href="https://github.com/normalengineering/normal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-900 transition-colors"
            >
              <SiGithub size={16} />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
