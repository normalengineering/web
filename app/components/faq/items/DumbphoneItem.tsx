import { FAQItem } from "../FAQAccordion";

export function DumbphoneItem() {
  return (
    <FAQItem question="Can I use Normal to make my iPhone a dumbphone or semi-dumb feature phone?">
      <div className="space-y-3">
        <p>Absolutely, Normal was designed for exactly this.</p>
        <ol className="list-decimal list-inside space-y-1.5 pl-1">
          <li>Uninstall all unnecessary apps</li>
          <li>Select Safari and the App Store in Normal</li>
          <li>Block them all</li>
        </ol>
        <p>
          Now you have a dumb phone with iPhone hardware, the best of both
          worlds.
        </p>
      </div>
    </FAQItem>
  );
}
