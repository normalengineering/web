import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "../components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Normal",
  description:
    "Normal collects no data. It works fully offline with no sign-up required.",
};

export default function PrivacyPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 py-20 text-ink">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)]" />
      <div className="relative w-full max-w-2xl border border-line bg-bg/80 backdrop-blur">
        <div className="flex h-11 items-center justify-between gap-4 border-b border-line px-5 sm:px-6">
          <p className="label text-ink">Privacy policy</p>
          <p className="label text-faint">
            <span className="hidden sm:inline">Updated </span>Oct 8, 2026
          </p>
        </div>
        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/appicon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-[9px]"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-ink-strong">
              Normal
            </span>
          </Link>
          <h1 className="mt-10 font-display text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-ink-strong sm:text-5xl">
            Normal collects <span className="text-sage">no data</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            It works fully offline, with no sign-up or account required.
          </p>
          <div className="mt-8 border border-line bg-raised p-5">
            <p className="label text-faint">Disclaimer</p>
            <p className="mt-3 leading-relaxed text-muted">
              While we can&apos;t see your data, Normal uses Apple features like
              Screen Time and Keychain. Please refer to{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
              >
                Apple&apos;s Privacy Policy
              </a>{" "}
              for how Apple handles it.
            </p>
          </div>
          <p className="mt-10 text-sm text-faint">
            Questions?{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:decoration-sage"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="label relative mt-8 text-faint transition-colors hover:text-ink-strong"
      >
        ← Back to normalengineering.org
      </Link>
    </main>
  );
}
