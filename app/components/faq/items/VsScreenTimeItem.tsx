import { FAQItem } from "../FAQAccordion";

export function VsScreenTimeItem() {
  return (
    <FAQItem question="How is Normal different from Apple's built-in Screen Time?">
      <div className="space-y-3">
        <p>
          <span className="font-medium text-ink-strong">
            Apple&apos;s Screen Time{" "}
          </span>
          works on an opt-out basis. When you hit a limit, you&apos;re simply
          asked whether to continue or not. It&apos;s easy to dismiss with a
          single tap, easy to bypass with a passcode, and tedious to set up.
        </p>
        <p>
          <span className="font-medium text-ink-strong">Normal </span>takes an
          opt-in approach. Apps you select are blocked by default. To use them,
          you have to physically scan an NFC tag, QR code, or barcode
          you&apos;ve placed somewhere intentional.
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Stronger, harder-to-bypass blocking</li>
          <li>Can be made completely impossible to bypass</li>
          <li>As strict or as flexible as you choose</li>
        </ul>
      </div>
    </FAQItem>
  );
}
