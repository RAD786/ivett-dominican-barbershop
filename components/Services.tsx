import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-1/4 -z-10 h-80 bg-[radial-gradient(circle,rgba(0,45,98,0.22),transparent_62%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">Services</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-ivory sm:text-5xl">Men's haircuts, fades, beard trims, and clean details.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-ivory/68">
            Looking for men's haircuts in Marietta, GA, a beard trim in Marietta, GA, or fresh fades in Marietta, GA? Service details and appointment availability are managed on Booksy, so you always see the current options before booking.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-flagBlue/70 hover:bg-white/10">
              <div className="absolute right-4 top-4 text-6xl font-black leading-none text-white/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md border border-flagBlue/50 bg-flagBlue/20 text-sm font-black text-white transition group-hover:border-flagRed group-hover:bg-flagRed">
                {service.kicker.slice(0, 1)}
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-flagRed">{service.kicker}</p>
              <h3 className="mt-4 text-2xl font-black text-ivory">{service.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-ivory/64">{service.description}</p>
              <a
                href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-md border border-flagBlue/60 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white transition group-hover:border-flagRed group-hover:bg-flagRed"
              >
                Book on Booksy
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
