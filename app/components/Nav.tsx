import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-background/70 px-6 py-5 backdrop-blur sm:px-10">
      <Link href="/" className="text-sm">
        Paweł Krauch
      </Link>
      <nav className="flex items-center gap-5 text-sm text-white/70">
        <Link href="/#work" className="transition-colors hover:text-accent">
          Work
        </Link>
        <Link href="/#about" className="transition-colors hover:text-accent">
          Info
        </Link>
      </nav>
    </header>
  );
}
