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
  DoorClosed,
  Car,
  Users,
} from "lucide-react";
import { FAQItem } from "../FAQAccordion";
import { KeyCard, KeyFeature } from "../primitives";

export function NfcTagsItem() {
  return (
    <FAQItem question="What NFC tags, QR codes, and barcodes can I use?">
      <div className="space-y-4">
        <p>
          Just about any NFC tag, QR code, or barcode can be a key. Here are
          some examples and tips on where to keep them.
        </p>

        <div className="flex items-start gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm">
          <Tablet className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
          <div>
            <p className="font-semibold text-blue-300">Using an iPad?</p>
            <p className="mt-1 text-blue-100/80">
              This device can&apos;t scan NFC, so NFC tags won&apos;t work here.
              Use a QR code or barcode instead.
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
              <p className="text-white font-medium text-sm mb-1.5">
                Getting one
              </p>
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

          <KeyCard icon={MapPin} title="Where to place them">
            <KeyFeature icon={DoorClosed} tint="text-orange-400">
              Another room, a closet, or a high shelf
            </KeyFeature>
            <KeyFeature icon={Car} tint="text-orange-400">
              Your car, office, mailbox or with a trusted person
            </KeyFeature>
            <KeyFeature icon={Users} tint="text-orange-400">
              However difficult you make it to reach is how difficult it will be
              to unblock your device.
            </KeyFeature>
            <p className="pt-1 text-xs text-zinc-500">
              Keep a backup key somewhere safe so you&apos;re never fully locked
              out.
            </p>
          </KeyCard>
        </div>
      </div>
    </FAQItem>
  );
}
