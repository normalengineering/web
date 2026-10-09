import {
  Tablet,
  Nfc,
  Tag,
  ShoppingCart,
  ShieldCheck,
  QrCode,
  FileText,
  RefreshCw,
  MapPin,
  MapPinned,
  LocateFixed,
  LocateOff,
  Smartphone,
  DoorClosed,
  Car,
  Navigation,
  Users,
} from "lucide-react";
import { FAQItem } from "../FAQAccordion";
import { KeyCard, KeyFeature } from "../primitives";

export function KeyTypesItem() {
  return (
    <FAQItem question="What can I use as a key?">
      <div className="space-y-4">
        <p>
          Just about any NFC tag, QR code, or barcode can be a key, and so can a
          location. Here are some examples and tips on where to keep them.
        </p>

        <div className="flex items-start gap-3 border border-sage/30 bg-sage/[0.06] p-4 text-sm">
          <Tablet className="h-4 w-4 shrink-0 text-sage mt-0.5" />
          <div>
            <p className="font-semibold text-sage">Using an iPad?</p>
            <p className="mt-1 text-ink/80">
              iPads can&apos;t scan NFC, so NFC tags won&apos;t work there. Use
              a QR code, barcode, or location instead.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <KeyCard icon={Nfc} title="NFC tag examples">
            <KeyFeature icon={Tag}>
              Almost any NFC tag works. AirTags, amiibo, and even credit cards
              have NFC chips you can use.
            </KeyFeature>
            <KeyFeature icon={ShoppingCart}>
              You can also buy packs of blank NFC tags online for very little.
            </KeyFeature>
            <KeyFeature icon={ShieldCheck}>
              Normal only reads the tag&apos;s unique ID, never the data on it.
              That means only the tag you register can unblock your apps, and
              your privacy stays protected.
            </KeyFeature>
          </KeyCard>

          <KeyCard icon={QrCode} title="QR code or barcode examples">
            <KeyFeature icon={FileText}>
              Any QR code or barcode works, even a product barcode off a snack
              wrapper. Print one on paper, put it on a sticker, or show it on a
              second device&apos;s screen.
            </KeyFeature>
            <KeyFeature icon={RefreshCw}>
              Normal reads the value inside the QR code or barcode. Use
              something you can recreate later if you lose it, or make it random
              so it&apos;s hard to reproduce.
            </KeyFeature>
            <div className="pt-1">
              <p className="mb-1.5 font-medium text-ink-strong">Getting one</p>
              <ul className="list-disc list-inside space-y-1.5 pl-1">
                <li>
                  Any product barcode, like one off a snack wrapper or book
                </li>
                <li>Any free &quot;QR code generator&quot; website</li>
                <li>
                  The Shortcuts app&apos;s &quot;Generate QR Code&quot; action
                </li>
              </ul>
            </div>
          </KeyCard>

          <KeyCard icon={MapPinned} title="Location examples">
            <KeyFeature icon={LocateFixed} tint="text-green-400">
              <span className="text-ink-strong">Unblock radius:</span> your key
              only works inside the areas you choose, like your office or the
              gym.
            </KeyFeature>
            <KeyFeature icon={LocateOff} tint="text-red-400">
              <span className="text-ink-strong">Block radius:</span> your key
              only works outside the areas you choose, like home or school, so
              you can&apos;t unblock while you&apos;re there.
            </KeyFeature>
            <KeyFeature icon={Smartphone}>
              To use a location key, open Normal and unblock. Normal only checks
              your location at that moment, never in the background.
            </KeyFeature>
          </KeyCard>

          <KeyCard icon={MapPin} title="Where to place them">
            <KeyFeature icon={DoorClosed} tint="text-orange-400">
              Another room, a closet, or a high shelf
            </KeyFeature>
            <KeyFeature icon={Car} tint="text-orange-400">
              Your car, office, mailbox or with a trusted person
            </KeyFeature>
            <KeyFeature icon={Navigation} tint="text-orange-400">
              For location keys, the park, the office or somewhere random far
              away
            </KeyFeature>
            <KeyFeature icon={Users} tint="text-orange-400">
              However difficult you make it to reach is how difficult it will be
              to unblock your device.
            </KeyFeature>
            <p className="pt-1 text-xs text-faint">
              Set up an accessible backup key so you&apos;re never fully locked
              out.
            </p>
          </KeyCard>
        </div>
      </div>
    </FAQItem>
  );
}
