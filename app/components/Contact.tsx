"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { fadeInUp } from "./animations";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 bg-zinc-950/50">
      <div className="mx-auto max-w-2xl">
        <motion.div {...fadeInUp}>
          <div className="text-center mb-12">
            <Mail size={40} className="text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Get in touch.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Have questions, feedback? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="text-center">
            <a
              href="mailto:info@normalengineering.org"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
            >
              <Send size={16} />
              info@normalengineering.org
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
