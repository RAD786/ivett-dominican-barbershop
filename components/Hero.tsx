import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative isolate px-4 pb-16 pt-8 sm:px-8 sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%,rgba(0,45,98,0.18))]" />
      <div className="absolute left-1/2 top-10 -z-10 h-80 w-[min(56rem,92vw)] -translate-x-1/2 rounded-full bg-flagBlue/25 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="relative z-10">
          <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-md border border-flagBlue/60 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white sm:text-sm">
            <span>4.8 Google Rating</span>
            <span className="h-1 w-1 rounded-full bg-flagRed" />
            <span>24 Reviews</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-none text-ivory sm:text-6xl lg:text-7xl">
            Dominican Barber Shop in Marietta for Fresh Cuts and Clean Fades.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/72 sm:text-xl">
            Book men's haircuts, fades, beard trims, kids' haircuts, and family-friendly barber services at Ivett Dominican Barber Shop near Austell Road.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-semibold text-ivory/75 sm:grid-cols-2">
            <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3">
              3565 Austell Rd Suite 1041
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3">
              Located in Austell Market Fair
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-flagRed px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_52px_rgba(206,17,38,0.34)] transition hover:-translate-y-1 hover:bg-white hover:text-flagBlue hover:shadow-[0_22px_62px_rgba(0,45,98,0.36)]"
            >
              Book on Booksy
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3565+Austell+Rd+Suite+1041+Marietta+GA+30008"
              className="rounded-md border border-flagBlue/70 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-ivory transition hover:-translate-y-1 hover:border-flagRed hover:bg-white/10 hover:text-white"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-2xl bg-flagBlue/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-coal p-3 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/fade.jpg"
                alt="Fresh fade haircut at Ivett Dominican Barber Shop"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute left-4 top-4 rounded-md border border-flagBlue/70 bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                Premium Barbering
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="mb-4 flex h-1 w-24 overflow-hidden rounded-full bg-white/25">
                  <span className="h-full flex-1 bg-flagBlue" />
                  <span className="h-full flex-1 bg-white" />
                  <span className="h-full flex-1 bg-flagRed" />
                </div>
                <p className="max-w-sm text-3xl font-black leading-tight text-ivory sm:text-4xl">
                  Fades, beard trims, and detail-first barbering in Marietta, GA.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Cuts", "Fades", "Beards"].map((item) => (
                    <div key={item} className="rounded-md border border-white/10 bg-black/50 p-3 text-center text-xs font-black uppercase tracking-[0.14em] text-ivory/85 backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
