"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { containerVariants, fadeInUp, itemVariants } from "./animations";
import { Accent, Frame, SectionLabel } from "./ui";
import { Ref, SOURCES, type SourceKey } from "./sources";

const findings: {
  stat: string;
  unit: string;
  finding: string;
  source: SourceKey;
  study: string;
  normal: string;
}[] = [
  {
    stat: "10",
    unit: "years",
    finding:
      "Two weeks without mobile internet improved sustained attention by about as much as 10 years of age-related decline. 91% of people improved in attention, mental health or well-being.",
    source: "castelo",
    study: "467 people · PNAS Nexus, 2025",
    normal: "Block distracting apps and turn your iPhone into a dumbphone.",
  },
  {
    stat: "Out",
    unit: "of reach",
    finding:
      "People with their phones in another room scored higher on working memory and fluid intelligence than people with their phones face-down on the desk.",
    source: "ward",
    study: "~800 people · JACR, 2017",
    normal: "Your key creates a physical barrier between you and your apps.",
  },
  {
    stat: "57",
    unit: "% fewer",
    finding:
      "Adding friction before opening distracting apps cut how often people actually opened them by 57% after six weeks.",
    source: "gruning",
    study: "280 people · PNAS, 2023",
    normal: "Normal's friction is physical: no key, no unblock.",
  },
  {
    stat: "30",
    unit: "min a day",
    finding:
      "Limiting social media to 30 minutes a day for three weeks significantly reduced loneliness and depression.",
    source: "hunt",
    study: "143 students · JSCP, 2018",
    normal:
      "Max daily limits and timed unblocks keep it to the time you choose.",
  },
];

export default function Research() {
  return (
    <Frame id="research">
      <SectionLabel index="03" title="The research" aside="Peer-reviewed" />
      <motion.div {...fadeInUp} className="px-4 py-16 sm:px-10 lg:py-24">
        <h2 className="max-w-4xl font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-ink-strong sm:text-5xl md:text-6xl">
          Less phone, <Accent>measurably</Accent> better life.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          The ideas behind Normal come straight from published studies on
          attention, friction and well-being.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-px border-t border-line bg-line md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {findings.map((f) => (
          <motion.article
            key={f.source}
            variants={itemVariants}
            className="flex flex-col bg-bg"
          >
            <div className="flex flex-col p-6 sm:p-10">
              <p className="font-display leading-none font-semibold tracking-[-0.05em] text-ink-strong">
                <span className="text-7xl sm:text-8xl">{f.stat}</span>
                <span className="ml-2 text-2xl tracking-[-0.02em] text-sage sm:text-3xl">
                  {f.unit}
                </span>
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {f.finding}
                <Ref s={f.source} />
              </p>
              <p className="label mt-5 text-faint">{f.study}</p>
            </div>
            <div className="mt-auto flex items-center gap-3 border-t border-line bg-raised px-6 py-5 sm:min-h-24 sm:px-10">
              <ArrowRight size={16} className="shrink-0 text-sage" />
              <p className="text-ink">
                <span className="label mr-2 text-sage">In Normal</span>
                {f.normal}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div
        id="sources"
        className="scroll-mt-24 border-t border-line px-4 py-10 sm:px-10"
      >
        <p className="label text-faint">Sources</p>
        <ol className="mt-5 grid gap-x-10 gap-y-3 text-sm text-faint lg:grid-cols-2">
          {Object.values(SOURCES).map((s) => (
            <li key={s.n} className="flex gap-3">
              <span className="font-mono">[{s.n}]</span>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group leading-relaxed transition-colors hover:text-ink"
              >
                {s.cite}
                <ArrowUpRight
                  size={12}
                  className="ml-1 inline opacity-60 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}
