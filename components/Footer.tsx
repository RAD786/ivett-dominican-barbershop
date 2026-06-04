import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <Image src="/images/ivett-logo.png" alt="" width={54} height={54} className="h-14 w-14 rounded-md bg-white object-contain p-1" />
          <div>
            <p className="text-lg font-black text-ivory">Ivett Dominican Barber Shop</p>
            <p className="mt-2 text-sm leading-6 text-ivory/60">
              3565 Austell Rd Suite 1041, Marietta, GA 30008<br />
              Located in Austell Market Fair<br />
              Phone:{" "}
              <a href="tel:7704399977" className="text-ivory underline decoration-flagRed underline-offset-4 transition hover:text-flagRed">
                770-439-9977
              </a>
            </p>
            <p className="mt-3 text-xs text-ivory/44">Copyright {new Date().getFullYear()} Ivett Dominican Barber Shop. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-flagRed px-4 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-flagBlue"
          >
            Book on Booksy
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=3565+Austell+Rd+Suite+1041+Marietta+GA+30008"
            className="rounded-md border border-flagBlue/70 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-ivory transition hover:border-flagRed hover:text-white"
          >
            Get Directions
          </a>
        </div>
      </div>
    </footer>
  );
}
