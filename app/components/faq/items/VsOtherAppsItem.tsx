import { FAQItem } from "../FAQAccordion";

export function VsOtherAppsItem() {
  return (
    <FAQItem question="How is Normal different from the other screen time apps?">
      <div className="space-y-4">
        <p>
          Aside from being completely free and open source, Normal is built
          to be much stronger and better serve its purpose.
        </p>
        <div className="space-y-1">
          <p className="text-white font-medium text-sm">Opt-in approach</p>
          <p>
            Most screen time apps use an opt-out approach, like
            Apple&apos;s Screen Time, where you&apos;re asked to confirm
            each time you exceed a limit. With Normal, selected apps are
            blocked by default. To use them, you have to physically scan an
            NFC tag, QR code, or barcode you&apos;ve placed somewhere
            intentional.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-white font-medium text-sm">Physical layer</p>
          <p>
            However hard you make it to scan your key is however hard it is
            to use your phone.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-white font-medium text-sm">Timed unblocks</p>
          <p>
            Other apps require you to manually reblock when you&apos;re
            done, and users commonly report forgetting to reblock or
            falling back into doom-scrolling. With Normal, set a timed
            unblock for 15 minutes and you&apos;ll be automatically blocked
            again when it&apos;s up. Going to an event where you need to
            stay reachable? Unblock for a few hours and Normal handles the
            rest.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-white font-medium text-sm">App groups</p>
          <p>
            Only need to unblock Instagram to post quickly? Create an app
            group for it. Select a 15-minute unblock and only the apps you
            need will be available, no excuse to check anything else.
            Complete granular control with Normal.
          </p>
        </div>
      </div>
    </FAQItem>
  );
}
