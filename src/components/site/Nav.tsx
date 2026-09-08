import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, LOGO_DARK } from "@/lib/portfolio";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-navy-deep/70 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={LOGO_DARK}
            alt="BAM Archipower Solution logo"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
            width={48}
            height={48}
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-extrabold tracking-wide text-navy-foreground">
              BAM ARCHIPOWER
            </span>
            <span className="block text-[0.65rem] font-semibold tracking-[0.28em] text-gold">
              SOLUTION
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-navy-foreground/75 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={CONTACT.phoneHref} className="hidden items-center gap-2 text-sm font-semibold text-navy-foreground/80 transition-colors hover:text-gold lg:flex">
            <Phone className="size-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <a href="#contact" className="btn-base btn-gold hidden px-5 py-3 text-xs sm:inline-flex">
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-navy-foreground/25 text-navy-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-navy-foreground/10 bg-navy-deep xl:hidden"
      >
        <ul className="mx-auto max-w-7xl px-5 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-navy-foreground/10 py-4 text-base font-semibold text-navy-foreground/90 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-gold w-full"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
