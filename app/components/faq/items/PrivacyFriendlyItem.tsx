import { FAQItem } from "../FAQAccordion";

export function PrivacyFriendlyItem() {
  return (
    <FAQItem question="Is it really privacy friendly?">
      <div className="space-y-3">
        <p>
          We don&apos;t collect or sell any data. You can view the source code
          to verify this yourself.
        </p>
        <p>
          There are no accounts, no internet connection required, and no data
          logging.
        </p>
        <p>
          Normal uses Apple&apos;s Screen Time API and the Managed Settings
          framework to enforce app limits entirely on your device. All blocking
          rules, schedules, and configurations are stored locally, nothing is
          ever sent to a server.
        </p>
      </div>
    </FAQItem>
  );
}
