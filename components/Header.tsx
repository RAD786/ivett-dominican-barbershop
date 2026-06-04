import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  {
    label: "Book",
    href: "https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo",
    external: true
  }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Ivett Dominican Barber Shop home">
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-md border border-flagBlue/60 bg-white shadow-[0_0_32px_rgba(0,45,98,0.32)] transition group-hover:border-flagRed">
            <Image
              src="/images/ivett-logo.png"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-contain p-0.5"
              priority
            />
          </span>
          <span className="hidden leading-tight min-[390px]:block">
            <span className="block text-sm font-black uppercase tracking-[0.16em] text-ivory sm:text-base">
              Ivett Dominican
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-flagRed">
              Barber Shop
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-ivory/76 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-flagRed"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:7704399977"
            className="hidden rounded-md border border-flagBlue/60 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-ivory transition hover:-translate-y-0.5 hover:border-flagRed hover:text-white lg:inline-flex"
          >
            Call 770-439-9977
          </a>

          <details className="group md:hidden">
            <summary className="list-none rounded-md border border-white/15 px-3 py-3 text-xs font-black uppercase tracking-[0.14em] text-ivory transition hover:border-flagRed hover:text-white">
              Menu
            </summary>
            <div className="absolute right-4 top-full mt-2 w-64 rounded-lg border border-white/10 bg-ink p-3 shadow-[0_22px_70px_rgba(0,0,0,0.45)]">
              <nav className="grid gap-1 text-sm font-bold text-ivory/78" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-md px-3 py-3 transition hover:bg-white/5 hover:text-white"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="tel:7704399977" className="rounded-md border border-flagBlue/60 px-3 py-3 text-white transition hover:border-flagRed hover:bg-white/5">
                  Call 770-439-9977
                </a>
              </nav>
            </div>
          </details>

          <a
            href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-flagRed px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_12px_36px_rgba(206,17,38,0.32)] transition hover:-translate-y-0.5 hover:bg-white hover:text-flagBlue hover:shadow-[0_18px_46px_rgba(0,45,98,0.34)] sm:px-5 sm:text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
