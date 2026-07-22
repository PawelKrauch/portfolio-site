export default function Footer() {
  return (
    <footer className="flex flex-col gap-1 border-t border-border px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-10">
      <span>© {new Date().getFullYear()} Paweł Krauch</span>
      <a
        href="https://instagram.com/pawel_krauch"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        @pawel_krauch
      </a>
      <span>Based in Poland · Available worldwide</span>
    </footer>
  );
}
