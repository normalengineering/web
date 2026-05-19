"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { fadeInUp } from "../animations";
import { FAQAccordion, FAQSection } from "./FAQAccordion";
import { NfcTagsItem } from "./items/NfcTagsItem";
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

export default function FAQ() {
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

        <FAQAccordion>
          <FAQSection title="Getting Started & Setup">
            <NfcTagsItem />
            <UnsupportedTagsItem />
            <DumbphoneItem />
            <ReselectAppsItem />
            <PreventBypassItem />
          </FAQSection>

          <FAQSection title="Privacy & Cost">
            <IsFreeItem />
            <PrivacyFriendlyItem />
            <NoInternetItem />
            <FixBugsItem />
          </FAQSection>

          <FAQSection title="Why Normal?">
            <VsScreenTimeItem />
            <VsOtherAppsItem />
          </FAQSection>

          <FAQSection title="Project & Support">
            <ContributeItem />
            <ContactItem />
          </FAQSection>
        </FAQAccordion>
      </div>
    </section>
  );
}
