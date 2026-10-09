import { FAQItem } from "../FAQAccordion";

export function ContributeItem() {
  return (
    <FAQItem question="Can I contribute to the project?">
      <div className="space-y-3">
        <p>
          Absolutely. Normal is fully open source and we welcome contributions
          of all kinds:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Code</li>
          <li>Design</li>
          <li>Documentation</li>
          <li>Bug reports</li>
        </ul>
        <p>
          Head to our GitHub repository to get started, check out open issues,
          or submit a pull request.
        </p>
      </div>
    </FAQItem>
  );
}
