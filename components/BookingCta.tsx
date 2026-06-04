export function BookingCta() {
  return (
    <section className="px-4 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-flagBlue/70 bg-[linear-gradient(135deg,rgba(0,45,98,0.34),rgba(255,255,255,0.05)_45%,rgba(206,17,38,0.18))] p-8 text-center shadow-glow sm:p-12">
        <div className="mx-auto mb-7 flex h-1 w-28 overflow-hidden rounded-full bg-white/25">
          <span className="h-full flex-1 bg-flagBlue" />
          <span className="h-full flex-1 bg-white" />
          <span className="h-full flex-1 bg-flagRed" />
        </div>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">Book online</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight text-ivory sm:text-6xl">Ready for your next cut in Marietta?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ivory/76">
          Book your appointment online through Booksy for haircuts, fades, beard trims, kids' cuts, and Dominican barbering at Ivett Dominican Barber Shop in Marietta.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center rounded-md bg-flagRed px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_54px_rgba(206,17,38,0.34)] transition hover:-translate-y-1 hover:bg-white hover:text-flagBlue sm:w-auto"
          >
            Book on Booksy
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=3565+Austell+Rd+Suite+1041+Marietta+GA+30008"
            className="inline-flex w-full justify-center rounded-md border border-flagBlue/70 bg-black/20 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-ivory transition hover:-translate-y-1 hover:border-flagRed hover:text-white sm:w-auto"
          >
            Get Directions
          </a>
        </div>
        <p className="mt-5 text-sm font-semibold text-ivory/70">
          Or call{" "}
          <a href="tel:7704399977" className="text-white underline decoration-flagRed underline-offset-4 transition hover:text-flagRed">
            770-439-9977
          </a>
        </p>
      </div>
    </section>
  );
}
