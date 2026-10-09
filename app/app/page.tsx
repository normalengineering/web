import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiApple } from "react-icons/si";
import { APP_STORE_URL } from "../components/ui";
import InAppBrowserHint from "./InAppBrowserHint";

export const metadata: Metadata = {
  title: "Download Normal on the App Store",
  description:
    "Get Normal, the free and open source app blocker for iOS. Download it on the App Store.",
};

export default function AppStorePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-ink flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)]" />
      <div className="absolute top-1/2 left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/15 blur-[110px]" />
      <div className="relative flex flex-col items-center">
        <Image
          src="/appicon.png"
          alt="Normal"
          width={96}
          height={96}
          preload
          className="rounded-[22px] shadow-lg shadow-black/40"
        />

        <h1 className="mt-7 font-display text-4xl font-semibold tracking-[-0.03em] text-ink-strong sm:text-5xl">
          Normal
        </h1>
        <p className="mt-3 max-w-sm text-muted">
          The free, open source app blocker for iOS.
        </p>

        <a
          href={APP_STORE_URL}
          className="label mt-9 inline-flex h-12 items-center gap-2.5 bg-ink-strong px-7 font-medium text-black transition-colors hover:bg-sage"
        >
          <SiApple size={18} />
          Download on the App Store
        </a>

        <InAppBrowserHint />

        <Link
          href="/"
          className="label mt-8 text-faint transition-colors hover:text-ink-strong"
        >
          ← Back to normalengineering.org
        </Link>
      </div>
    </main>
  );
}
