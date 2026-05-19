"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { containerVariants, itemVariants } from "../animations";

type FAQContextValue = {
  openId: string | null;
  toggle: (id: string) => void;
};

const FAQContext = createContext<FAQContextValue | null>(null);

export function FAQAccordion({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) =>
    setOpenId((current) => (current === id ? null : id));

  return (
    <FAQContext.Provider value={{ openId, toggle }}>
      <motion.div
        className="flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {children}
      </motion.div>
    </FAQContext.Provider>
  );
}

export function FAQSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <motion.h3
        variants={itemVariants}
        className="text-xs font-semibold uppercase tracking-wider text-zinc-500 px-1 mb-1"
      >
        {title}
      </motion.h3>
      {children}
    </div>
  );
}

export function FAQItem({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  const id = useId();
  const ctx = useContext(FAQContext);
  if (!ctx) {
    throw new Error("<FAQItem> must be rendered inside <FAQAccordion>");
  }
  const isOpen = ctx.openId === id;

  return (
    <motion.div
      className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden"
      variants={itemVariants}
    >
      <button
        onClick={() => ctx.toggle(id)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
      >
        <span className="font-medium text-sm sm:text-base">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-zinc-500" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-zinc-400 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
