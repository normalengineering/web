import Image from "next/image";
import { SiGithub, SiApple } from "react-icons/si";
import { APP_STORE_URL, GITHUB_URL } from "./ui";

const links = [
  { href: "#why", label: "Why it matters" },
  { href: "#research", label: "Research" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-14 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="flex h-full items-stretch">
        <a
          href="#"
          className="flex items-center gap-3 border-r border-line px-4 sm:px-6"
        >
          <Image
            src="/appicon.png"
            alt=""
            width={28}
            height={28}
            className="rounded-[7px]"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink-strong">
            Normal
          </span>
        </a>

        <div className="hidden items-stretch lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label flex items-center px-5 text-muted transition-colors hover:text-ink-strong"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-stretch">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Normal on GitHub"
            className="label flex items-center gap-2.5 border-l border-line px-4 text-muted transition-colors hover:text-ink-strong sm:px-6"
          >
            <SiGithub size={16} />
            <span className="hidden sm:inline">Star on GitHub</span>
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label flex items-center gap-2.5 bg-ink-strong px-4 font-medium text-black transition-colors hover:bg-sage sm:px-6"
          >
            <SiApple size={15} />
            App Store
          </a>
        </div>
      </div>
    </nav>
  );
}
