import { FAQItem } from "../FAQAccordion";

export function IsFreeItem() {
  return (
    <FAQItem question="Is Normal really free?">
      <div className="space-y-3">
        <p>Yes, it shouldn&apos;t cost anything to use your phone less.</p>
        <p>
          Normal is 100% free with no in-app purchases, subscriptions, or
          hidden fees. It&apos;s an open-source project and the source code
          is available on GitHub for you to modify and tinker with.
        </p>
      </div>
    </FAQItem>
  );
}
