"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { fadeInUp, containerVariants, itemVariants } from "./animations";

interface FAQEntry {
  question: string;
  answer: ReactNode;
}

const faqs: FAQEntry[] = [
  {
    question: "Is Normal really free?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes, it shouldn&apos;t cost anything to use your phone less.
        </p>
        <p>
          Normal is 100% free with no in-app purchases, subscriptions, or hidden
          fees. It&apos;s an open-source project and the source code is available
          on GitHub for you to modify and tinker with.
        </p>
      </div>
    ),
  },
  {
    question: "Is it really privacy friendly?",
    answer: (
      <div className="space-y-3">
        <p>We don&apos;t collect or sell any data. You can view the source code to verify this yourself.</p>
        <p>There are no accounts, no internet connection required, and no data logging.</p>
        <p>
          Normal uses Apple&apos;s Screen Time API and the Managed Settings
          framework to enforce app limits entirely on your device. All blocking
          rules, schedules, and configurations are stored locally, nothing is
          ever sent to a server.
        </p>
      </div>
    ),
  },
  {
    question:
      "How does Normal fix bugs and improve without data collection?",
    answer: (
      <div className="space-y-3">
        <p>
          We rely on community feedback and contributions to identify issues and
          implement improvements.
        </p>
        <p>
          Since all data remains on your device, we can&apos;t gather usage
          statistics. Instead, we encourage users to report bugs and suggest
          features directly through our GitHub repository.
        </p>
        <p>
          You can also reach us at{" "}
          <a
            href="mailto:info@normalengineering.org"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            info@normalengineering.org
          </a>{" "}
          if you have anything you&apos;d like to report.
        </p>
      </div>
    ),
  },
  {
    question: "Does Normal work without an internet connection?",
    answer: (
      <div className="space-y-3">
        <p>Yes, everything runs locally on your iPhone.</p>
        <p>
          Normal works fully offline. No internet connection is required to set
          up or enforce your screen time limits.
        </p>
      </div>
    ),
  },
  {
    question: "How is Normal different from Apple's built-in Screen Time?",
    answer: (
      <div className="space-y-3">
        <p>
          Apple&apos;s Screen Time is easy to dismiss with a single tap.
        </p>
        <p>Normal is built to actually hold you accountable:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Stronger blocking mechanisms</li>
          <li>Better scheduling options</li>
          <li>
            A focus on helping you build lasting habits, not just showing you
            usage stats
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I contribute to the project?",
    answer: (
      <div className="space-y-3">
        <p>
          Absolutely. Normal is fully open source and we welcome contributions
          of all kinds:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Code</li>
          <li>Design</li>
          <li>Documentation</li>
          <li>Bug reports</li>
        </ul>
        <p>
          Head to our GitHub repository to get started, check out open issues, or
          submit a pull request.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I use Normal to make my iPhone a dumbphone or semi-dumb feature phone?",
    answer: (
      <div className="space-y-3">
        <p>Absolutely, Normal was designed for exactly this.</p>
        <ol className="list-decimal list-inside space-y-1.5 pl-1">
          <li>Uninstall all unnecessary apps</li>
          <li>Select Safari and the App Store in Normal</li>
          <li>Block them all</li>
        </ol>
        <p>
          Now you have a dumb phone with iPhone hardware, the best of both
          worlds.
        </p>
      </div>
    ),
  },
  {
    question:
      "Why do I have to reselect apps in my schedules and groups when I update my selected apps?",
    answer: (
      <div className="space-y-3">
        <p>This is an Apple limitation, not a Normal one.</p>
        <p>
          Apple&apos;s Screen Time API is restrictive for privacy reasons. The
          app-selection pop-over is made by Apple, not us, and is the only way to
          select apps for Screen Time.
        </p>
        <p>Here&apos;s the technical reason:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>
            Apple creates a random ID for each app every time you use the picker
          </li>
          <li>
            Developers aren&apos;t told which apps were previously selected
          </li>
          <li>
            There&apos;s no way for us to carry over your previous selections
            automatically
          </li>
        </ul>
        <p>
          We require reselecting schedules and groups to ensure Normal&apos;s
          groups, apps, and timed unlocks work consistently. We wish we could
          make this smoother, but Apple enforces this strictly to protect user
          privacy.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I prevent disabling Normal via Settings? I want to make it impossible to access blocked apps.",
    answer: (
      <div className="space-y-4">
        <p>
          Yes! Fixing the Settings bypass is straightforward using Apple&apos;s
          Shortcuts app.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-white font-medium text-sm">
              Step 1: Create the automation
            </p>
            <ol className="list-decimal list-inside space-y-1.5 pl-1">
              <li>Open the Shortcuts app</li>
              <li>Go to the Automation tab</li>
              <li>
                Tap the <span className="text-white">+</span> button to create a
                new automation
              </li>
              <li>
                Set the trigger to{" "}
                <span className="text-white">
                  &quot;When Settings is closed&quot;
                </span>
              </li>
              <li>
                Set the action to{" "}
                <span className="text-white">
                  &quot;Go to Home Screen&quot;
                </span>
              </li>
            </ol>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="rounded-xl overflow-hidden border border-zinc-800/60">
                <Image
                  src="/IMG_2503.PNG"
                  alt="Shortcuts Automation tab showing the completed automation"
                  width={400}
                  height={870}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-800/60">
                <Image
                  src="/IMG_2504.PNG"
                  alt="Automation detail: When Settings is closed, Go to Home Screen"
                  width={400}
                  height={870}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-white font-medium text-sm">
              Step 2: Set it to run automatically
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                Set the automation to{" "}
                <span className="text-white">Run Immediately</span>
              </li>
              <li>
                Turn off{" "}
                <span className="text-white">Notify When Run</span>
              </li>
            </ul>
            <p className="mt-2">
              This ensures it runs silently in the background every time.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white font-medium text-sm">
              Step 3: Block the Shortcuts app in Normal
            </p>
            <p>
              Add Shortcuts to your selected apps in Normal so the automation
              itself can&apos;t be easily modified.
            </p>
            <div className="max-w-[200px] mt-3">
              <div className="rounded-xl overflow-hidden border border-zinc-800/60">
                <Image
                  src="/IMG_2505.PNG"
                  alt="Selecting the Shortcuts app in Normal's app picker"
                  width={400}
                  height={870}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-white font-medium text-sm">How it works</p>
            <p>
              Screen Time opens authentication in Settings. The automation
              detects Settings closing and immediately returns you to the Home
              Screen, preventing you from reaching the disable option.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>You may need to enable Face ID for this to work</li>
              <li>You can still access other device settings normally</li>
            </ul>
          </div>

          <div className="rounded-xl bg-zinc-800/40 border border-zinc-700/40 p-4 space-y-3">
            <p className="text-white font-medium text-sm">Important notes</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                When you update your selected apps in Normal, you&apos;ll need
                to reselect apps in your schedules and groups due to an Apple
                Screen Time limitation.
              </li>
              <li>
                After this setup, the only ways to disable Normal are:
                <ul className="list-disc list-inside pl-5 mt-1.5 space-y-1">
                  <li>Using an NFC or QR key you&apos;ve configured in Normal</li>
                  <li>Resetting your device</li>
                </ul>
              </li>
              <li>
                Unblocking Shortcuts or all apps won&apos;t turn off this
                automation. To manage it:
                <ul className="list-disc list-inside pl-5 mt-1.5 space-y-1">
                  <li>
                    <span className="text-white">To disable:</span> Unblock
                    Shortcuts, then manually turn off the automation
                  </li>
                  <li>
                    <span className="text-white">To re-enable:</span> Unblock
                    Shortcuts, turn the automation back on, then re-block
                    Shortcuts
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden"
      variants={itemVariants}
    >
      <button
        onClick={onToggle}
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
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent pointer-events-none" />
      <div className="mx-auto max-w-3xl relative">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <HelpCircle size={48} className="text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Frequently asked
            <br />
            questions
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Normal.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
