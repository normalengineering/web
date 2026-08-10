import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiApple } from "react-icons/si";
import InAppBrowserHint from "./InAppBrowserHint";

const APP_STORE_URL =
  "https://apps.apple.com/app/normal-screen-time-control/id6768861415";

export const metadata: Metadata = {
  title: "Download Normal on the App Store",
  description:
    "Get Normal, the free and open source app blocker for iOS. Download it on the App Store.",
};

export default function AppStorePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/appicon.png"
        alt="Normal"
        width={96}
        height={96}
        priority
        className="rounded-[22px] shadow-lg shadow-black/40"
      />

      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
        Normal
      </h1>
      <p className="mt-3 text-zinc-400 max-w-sm">
        The free, open source app blocker for iOS. Take back your time.
      </p>

      <a
        href={APP_STORE_URL}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
      >
        <SiApple size={18} />
        Download on the App Store
      </a>

      <InAppBrowserHint />

      <Link
        href="/"
        className="mt-6 text-sm text-zinc-500 hover:text-white transition-colors"
      >
        ← Back to normalengineering.org
      </Link>
    </main>
  );
}
