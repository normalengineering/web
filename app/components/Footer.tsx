import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/appicon.png"
            alt="Normal"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-sm text-zinc-500">Normal Engineering</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a
            href="https://github.com/normalengineering/normal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Normal Engineering
        </p>
      </div>
    </footer>
  );
}
