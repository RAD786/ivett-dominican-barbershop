import Image from "next/image";

export function Location() {
  return (
    <section id="location" className="bg-smoke px-4 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">Location</p>
          <h2 className="mt-3 text-4xl font-black text-ivory sm:text-5xl">A barbershop near Austell Road and Austell Market Fair.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-ivory/68">
            If you are searching for a barber near Austell Market Fair, visit Ivett Dominican Barber Shop at 3565 Austell Rd Suite 1041 in Marietta, GA. Hours may vary. Check Google or Booksy before visiting.
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-black/24 p-6">
            <p className="text-2xl font-black text-ivory">Ivett Dominican Barber Shop</p>
            <p className="mt-4 text-lg leading-8 text-ivory/72">
              3565 Austell Rd Suite 1041<br />
              Marietta, GA 30008
            </p>
            <p className="mt-3 font-semibold text-flagRed">Located in Austell Market Fair</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=3565+Austell+Rd+Suite+1041+Marietta+GA+30008"
              className="rounded-md bg-flagRed px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_42px_rgba(206,17,38,0.28)] transition hover:-translate-y-1 hover:bg-white hover:text-flagBlue"
            >
              Get Directions
            </a>
            <a
              href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-flagBlue/70 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-ivory transition hover:-translate-y-1 hover:border-flagRed hover:bg-white/5 hover:text-white"
            >
              Book on Booksy
            </a>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-lg border border-flagBlue/60 bg-black shadow-[0_22px_70px_rgba(0,0,0,0.32)] lg:min-h-96">
          <Image
            src="/images/outside-shop.jpg"
            alt="Exterior sign for Ivett Dominican Barber Shop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-5 flex flex-col justify-end rounded-md border border-white/10 bg-black/20 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">Marietta, GA</p>
            <p className="mt-3 max-w-md text-3xl font-black leading-tight text-ivory">
              Easy online booking. Clean local shop. Sharp results near Austell Road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
