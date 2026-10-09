import Image from "next/image";
import type { ReactNode } from "react";

export const APP_STORE_URL =
  "https://apps.apple.com/app/normal-screen-time-control/id6768861415";
export const GITHUB_URL = "https://github.com/normalengineering/normal";
export const KOFI_URL = "https://ko-fi.com/normalengineering";
export const EMAIL = "info@normalengineering.org";

function Cross({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 hidden h-[11px] w-[11px] sm:block ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line-strong" />
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-line-strong" />
    </span>
  );
}

export function Frame({
  id,
  children,
  className = "",
  tone,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "sage";
}) {
  return (
    <section
      id={id}
      className={`relative border-b border-line ${tone === "sage" ? "theme-sage" : ""}`}
    >
      <div
        className={`relative mx-auto max-w-[1280px] sm:border-x border-line ${className}`}
      >
        <Cross className="-left-[6px] -top-[6px]" />
        <Cross className="-right-[6px] -top-[6px]" />
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({
  index,
  title,
  aside,
}: {
  index: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="flex h-11 items-center justify-between gap-4 border-b border-line px-4 sm:px-10">
      <p className="label text-faint">
        {index} <span className="px-1.5">/</span>
        <span className="text-ink">{title}</span>
      </p>
      {aside && (
        <p className="label hidden truncate text-faint sm:block">{aside}</p>
      )}
    </div>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-sage">{children}</span>;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
}) {
  const styles =
    variant === "solid"
      ? "bg-ink-strong text-black hover:bg-sage"
      : "border border-line-strong text-ink hover:border-sage hover:text-sage";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`label inline-flex h-12 items-center justify-center gap-2.5 px-6 font-medium transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}

export function Phone({
  src,
  alt,
  className = "",
  preload = false,
  sizes = "300px",
}: {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`rounded-[2.6rem] bg-[#0b0b0c] p-[5px] shadow-[0_0_0_1px_#34353b,0_0_0_3px_#141418,0_30px_80px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="overflow-hidden rounded-[2.3rem]">
        <Image
          src={src}
          alt={alt}
          width={804}
          height={1748}
          sizes={sizes}
          preload={preload}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
