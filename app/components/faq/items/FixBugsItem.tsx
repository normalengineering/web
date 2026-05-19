import { FAQItem } from "../FAQAccordion";

export function FixBugsItem() {
  return (
    <FAQItem question="How does Normal fix bugs and improve without data collection?">
      <div className="space-y-3">
        <p>
          We rely on community feedback and contributions to identify issues
          and implement improvements.
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
    </FAQItem>
  );
}
