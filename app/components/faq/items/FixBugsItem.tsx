import { FAQItem } from "../FAQAccordion";

export function FixBugsItem() {
  return (
    <FAQItem question="How does Normal fix bugs and improve without data collection?">
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
            className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
          >
            info@normalengineering.org
          </a>{" "}
          if you have anything you&apos;d like to report.
        </p>
      </div>
    </FAQItem>
  );
}
