"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
import { Accent, Frame, SectionLabel } from "./ui";
import { Ref } from "./sources";
import {
  formatHours,
  LIFESPAN,
  useScreenTime,
  yearsOnPhone,
} from "./ScreenTime";

const WAKING_HOURS = 16;

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between">
        <span className="label text-faint">{label}</span>
        <span className="font-display text-2xl font-semibold tabular-nums">
          {display}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full cursor-pointer accent-brand-ink"
      />
    </label>
  );
}

export default function Cost() {
  const { hours, age, setHours, setAge } = useScreenTime();

  const daysPerYear = Math.round((hours * 365) / 24);
  const yearsLeft = yearsOnPhone(hours, age);
  const wakingShare = Math.round((hours / WAKING_HOURS) * 100);

  const results = [
    { value: `${daysPerYear}`, unit: "days", desc: "on your phone every year" },
    {
      value: yearsLeft.toFixed(1),
      unit: "years",
      desc: `of the rest of your life, by age ${LIFESPAN}`,
    },
    { value: `${wakingShare}%`, unit: "", desc: "of every waking hour" },
  ];

  return (
    <Frame id="why" tone="sage">
      <SectionLabel index="02" title="Why it matters" aside="Do the math" />
      <div className="grid lg:grid-cols-2">
        <motion.div
          {...fadeInUp}
          className="border-b border-line px-4 py-16 sm:px-10 lg:border-r lg:border-b-0 lg:py-24"
        >
          <p className="font-display text-7xl leading-none font-semibold tracking-[-0.05em] sm:text-8xl xl:text-[8.5rem]">
            3h 46m
          </p>
          <p className="mt-8 max-w-md text-xl leading-relaxed text-muted">
            That&apos;s how long the average person spends online on their phone
            every day.
            <Ref s="datareportal" />
            {" Most of it isn't a choice. It's a default."}
          </p>
          <p className="mt-10 max-w-md font-display text-3xl leading-tight font-semibold tracking-[-0.03em]">
            Normal flips the default. Apps stay <Accent>blocked</Accent> until
            you decide otherwise.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="flex flex-col px-4 py-16 sm:px-10 lg:py-24"
        >
          <p className="label text-faint">Your screen time, over a lifetime</p>
          <div className="mt-8 space-y-8">
            <Slider
              label="Daily screen time"
              value={hours}
              display={formatHours(hours)}
              min={1}
              max={10}
              step={0.5}
              onChange={setHours}
            />
            <Slider
              label="Your age"
              value={age}
              display={`${age}`}
              min={13}
              max={75}
              step={1}
              onChange={setAge}
            />
          </div>

          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            {results.map((r) => (
              <div key={r.desc} className="bg-bg p-5">
                <p className="font-display text-4xl font-semibold tracking-[-0.03em] tabular-nums">
                  {r.value}
                  {r.unit && (
                    <span className="ml-1.5 text-lg font-medium">{r.unit}</span>
                  )}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">{r.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-brand-ink pl-4 text-lg leading-relaxed">
            Cut it in half and you get back{" "}
            <strong className="font-semibold">
              {(yearsLeft / 2).toFixed(1)} years
            </strong>
            .
          </p>
          <p className="mt-auto pt-8 text-xs text-faint">
            Assumes {WAKING_HOURS} waking hours a day. Calculated in your
            browser; nothing is sent anywhere.
          </p>
        </motion.div>
      </div>
    </Frame>
  );
}
