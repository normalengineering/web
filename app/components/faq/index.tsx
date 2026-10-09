"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../animations";
import { Accent, EMAIL, Frame, SectionLabel } from "../ui";
import { FAQAccordion, FAQSection } from "./FAQAccordion";
import { KeyTypesItem } from "./items/KeyTypesItem";
import { UnsupportedTagsItem } from "./items/UnsupportedTagsItem";
import { DumbphoneItem } from "./items/DumbphoneItem";
import { ReselectAppsItem } from "./items/ReselectAppsItem";
import { PreventBypassItem } from "./items/PreventBypassItem";
import { IsFreeItem } from "./items/IsFreeItem";
import { PrivacyFriendlyItem } from "./items/PrivacyFriendlyItem";
import { NoInternetItem } from "./items/NoInternetItem";
import { FixBugsItem } from "./items/FixBugsItem";
import { VsScreenTimeItem } from "./items/VsScreenTimeItem";
import { VsOtherAppsItem } from "./items/VsOtherAppsItem";
import { ContributeItem } from "./items/ContributeItem";
import { ContactItem } from "./items/ContactItem";

const sections = [
  { id: "faq-setup", title: "Getting Started & Setup" },
  { id: "faq-privacy", title: "Privacy & Cost" },
  { id: "faq-why", title: "Why Normal?" },
  { id: "faq-project", title: "Project & Support" },
];

export default function FAQ() {
  return (
    <Frame id="faq">
      <SectionLabel index="08" title="FAQ" aside="Same answers as in the app" />
      <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)]">
        <div className="border-b border-line px-4 py-14 sm:px-10 lg:border-r lg:border-b-0 lg:py-20">
          <motion.div {...fadeInUp} className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-ink-strong sm:text-5xl">
              Questions,
              <br />
              <Accent>answered</Accent>.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
              Everything you need to know about setting up Normal and preventing
              bypassing.
            </p>
            <nav className="mt-10 hidden border-t border-line lg:block">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-center justify-between border-b border-line py-3.5 text-muted transition-colors hover:text-ink-strong"
                >
                  <span>{s.title}</span>
                  <span className="label text-faint group-hover:text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </nav>
            <p className="label mt-8 text-faint">
              Still stuck?{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-sage normal-case tracking-normal hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </motion.div>
        </div>

        <div className="px-4 py-14 sm:px-10 lg:py-20">
          <FAQAccordion>
            <FAQSection id={sections[0].id} title={sections[0].title}>
              <KeyTypesItem />
              <UnsupportedTagsItem />
              <DumbphoneItem />
              <ReselectAppsItem />
              <PreventBypassItem />
            </FAQSection>

            <FAQSection id={sections[1].id} title={sections[1].title}>
              <IsFreeItem />
              <PrivacyFriendlyItem />
              <NoInternetItem />
              <FixBugsItem />
            </FAQSection>

            <FAQSection id={sections[2].id} title={sections[2].title}>
              <VsScreenTimeItem />
              <VsOtherAppsItem />
            </FAQSection>

            <FAQSection id={sections[3].id} title={sections[3].title}>
              <ContributeItem />
              <ContactItem />
            </FAQSection>
          </FAQAccordion>
        </div>
      </div>
    </Frame>
  );
}
