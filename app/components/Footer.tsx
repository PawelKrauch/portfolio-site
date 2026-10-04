import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

const label = "mb-4 font-mono text-xs uppercase text-white/40";
const item = "font-mono text-xs uppercase text-white/70 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-16 pb-8 sm:px-10">
      <div className="grid gap-12 sm:grid-cols-[2fr_1fr_1fr_1fr]">
        <p className="font-serif text-4xl leading-none tracking-tight sm:text-5xl">
          Director &amp;
          <br />
          Filmmaker
        </p>
        <div>
          <p className={label}>Menu</p>
          <ul className="flex flex-col gap-1.5">
            <li><Link href="/" className={item}>[Home]</Link></li>
            <li><Link href="/#featured" className={item}>[Work]</Link></li>
            <li><Link href="/#about" className={item}>[Info]</Link></li>
            <li><Link href="/#contact" className={item}>[Contact]</Link></li>
          </ul>
        </div>
        <div>
          <p className={label}>Socials</p>
          <ul className="flex flex-col gap-1.5">
            <li>
              <a href="https://instagram.com/pawel_krauch" target="_blank" rel="noopener noreferrer" className={item}>
                [Instagram]
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={label}>Get in touch</p>
          <a href="mailto:pavelkrauch@gmail.com" className={item}>
            pavelkrauch@gmail.com
          </a>
          <p className="mt-1.5 font-mono text-xs uppercase text-white/40">
            Based in Poland · Worldwide
          </p>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-2 font-mono text-xs uppercase text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Paweł Krauch · Krauch Media</span>
        <span className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
          <CookieSettingsButton className="text-left uppercase hover:text-white" />
        </span>
      </div>
    </footer>
  );
}
