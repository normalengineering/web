import { FAQItem } from "../FAQAccordion";

export function ContactItem() {
  return (
    <FAQItem question="How can I contact you?">
      <div className="space-y-3">
        <p>
          We&apos;d love to hear from you, whether it&apos;s a bug, a feature
          idea, or a question.
        </p>
        <p>
          Email us at{" "}
          <a
            href="mailto:info@normalengineering.org"
            className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
          >
            info@normalengineering.org
          </a>
        </p>
        <p>
          Or raise an issue on our{" "}
          <a
            href="https://github.com/normalengineering/normal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
          >
            GitHub repository
          </a>
          .
        </p>
      </div>
    </FAQItem>
  );
}
