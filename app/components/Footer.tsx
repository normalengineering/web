import Image from "next/image";
import { APP_STORE_URL, EMAIL, GITHUB_URL, KOFI_URL } from "./ui";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Why it matters", href: "#why" },
      { label: "Research", href: "#research" },
      { label: "How it works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Principles", href: "#principles" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Get Normal",
    links: [
      { label: "App Store", href: APP_STORE_URL, external: true },
      { label: "Source code", href: GITHUB_URL, external: true },
      { label: "Report a bug", href: `${GITHUB_URL}/issues`, external: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Donate on Ko-fi", href: KOFI_URL, external: true },
      { label: "Contribute", href: GITHUB_URL, external: true },
      { label: "Email us", href: `mailto:${EMAIL}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto grid max-w-[1280px] gap-px bg-line sm:border-x sm:border-line md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="bg-bg px-4 py-10 sm:px-10">
          <div className="flex items-center gap-3">
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
          </div>
          <p className="mt-5 max-w-xs leading-relaxed text-muted">
            The free, open source screen time blocker for iPhone and iPad.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="label mt-5 inline-block text-faint transition-colors hover:text-sage"
          >
            {EMAIL}
          </a>
        </div>
        {columns.map((col) => (
          <nav key={col.title} className="bg-bg px-4 py-10 sm:px-8">
            <p className="label text-faint">{col.title}</p>
            <ul className="mt-6 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-muted transition-colors hover:text-ink-strong"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-2 px-4 py-5 sm:flex-row sm:border-x sm:border-line sm:px-10">
          <p className="label text-faint">
            &copy; {new Date().getFullYear()} Normal Engineering
          </p>
          <p className="label text-faint">
            <a
              href="/privacy"
              className="transition-colors hover:text-ink-strong"
            >
              Privacy
            </a>{" "}
            · MIT licensed · Made to be put down
          </p>
        </div>
      </div>
    </footer>
  );
}
