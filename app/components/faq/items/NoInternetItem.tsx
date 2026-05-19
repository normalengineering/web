import { FAQItem } from "../FAQAccordion";

export function NoInternetItem() {
  return (
    <FAQItem question="Does Normal work without an internet connection?">
      <div className="space-y-3">
        <p>Yes, everything runs locally on your iPhone.</p>
        <p>
          Normal works fully offline. No internet connection is required to
          set up or enforce your screen time limits.
        </p>
      </div>
    </FAQItem>
  );
}
