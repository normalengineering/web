import { FAQItem } from "../FAQAccordion";

export function UnsupportedTagsItem() {
  return (
    <FAQItem question="Are any NFC tags not supported?">
      <div className="space-y-3">
        <p>
          Normal identifies an NFC tag by its unique ID, not by the data stored
          inside it.
        </p>
        <p>
          Some high-security tags, like certain bank or transit cards,
          deliberately use a rotating ID that changes on every scan, for privacy
          and anti-tracking reasons.
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Their ID is different every time you tap them</li>
          <li>We can&apos;t confirm it&apos;s the same tag you registered</li>
          <li>So they can&apos;t be used as a reliable key</li>
        </ul>
        <p>
          Use a tag with a fixed unique ID; AirTags, amiibo, most credit cards
          and most everyday NFC tags work well. Or use a QR code, barcode, or
          location as a key instead.
        </p>
      </div>
    </FAQItem>
  );
}
