"use client";

import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
import PhoneMockup from "./PhoneMockup";

interface FeatureBullet {
  icon: LucideIcon;
  text: string;
}

interface PhoneConfig {
  src: string;
  alt: string;
  className?: string;
}

interface FeatureSectionProps {
  badge?: { icon: LucideIcon; label: string };
  heading: React.ReactNode;
  description: string;
  bullets: FeatureBullet[];
  phones: PhoneConfig[];
  reverse?: boolean;
  background?: boolean;
}

export default function FeatureSection({
  badge,
  heading,
  description,
  bullets,
  phones,
  reverse = false,
  background = false,
}: FeatureSectionProps) {
  const dualPhones = phones.length > 1;

  return (
    <section
      className={`py-24 lg:py-32 px-6 ${background ? "bg-zinc-950/50" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          {...fadeInUp}
        >
          {reverse && (
            <div className="flex items-center justify-center lg:order-first order-last">
              {dualPhones ? (
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                  {phones.map((phone) => (
                    <PhoneMockup
                      key={phone.src}
                      src={phone.src}
                      alt={phone.alt}
                      size="small"
                      className={phone.className}
                    />
                  ))}
                </div>
              ) : (
                <PhoneMockup src={phones[0].src} alt={phones[0].alt} />
              )}
            </div>
          )}

          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400 mb-6">
                <badge.icon size={14} />
                {badge.label}
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {heading}
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="space-y-4">
              {bullets.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <item.icon
                    size={18}
                    className="text-blue-400 mt-0.5 shrink-0"
                  />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {!reverse && (
            <div className="flex items-center justify-center">
              {dualPhones ? (
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                  {phones.map((phone) => (
                    <PhoneMockup
                      key={phone.src}
                      src={phone.src}
                      alt={phone.alt}
                      size="small"
                      className={phone.className}
                    />
                  ))}
                </div>
              ) : (
                <PhoneMockup src={phones[0].src} alt={phones[0].alt} />
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
