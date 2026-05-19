import { FAQItem } from "../FAQAccordion";

export function ContactItem() {
  return (
    <FAQItem question="How can I contact you?">
      <div className="space-y-3">
        <p>
          We&apos;d love to hear from you, whether it&apos;s a bug, a
          feature idea, or a question.
        </p>
        <p>
          Email us at{" "}
          <a
            href="mailto:info@normalengineering.org"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
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
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            GitHub repository
          </a>
          .
        </p>
      </div>
    </FAQItem>
  );
}
