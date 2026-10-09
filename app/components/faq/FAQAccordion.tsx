"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
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
        className="flex flex-col gap-14"
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
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <motion.h3 variants={itemVariants} className="label mb-4 text-faint">
        {title}
      </motion.h3>
      <div className="border-t border-line">{children}</div>
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
    <motion.div className="border-b border-line" variants={itemVariants}>
      <button
        onClick={() => ctx.toggle(id)}
        aria-expanded={isOpen}
        className="group flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left"
      >
        <span
          className={`text-base leading-snug font-medium transition-colors sm:text-lg ${
            isOpen ? "text-sage" : "text-ink-strong group-hover:text-sage"
          }`}
        >
          {question}
        </span>
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border transition-colors ${
            isOpen
              ? "border-sage text-sage"
              : "border-line-strong text-muted group-hover:border-sage group-hover:text-sage"
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex"
          >
            <Plus size={15} />
          </motion.span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pr-2 pb-7 text-[15px] leading-relaxed text-muted sm:pr-12">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
