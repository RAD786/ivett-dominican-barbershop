import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-smoke px-4 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/30 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
          <div className="overflow-hidden rounded-md border border-flagBlue/60">
            <Image
              src="/images/inside-shop.jpg"
              alt="Inside Ivett Dominican Barber Shop"
              width={750}
              height={580}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-5 text-lg leading-8 text-ivory/72">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">About the shop</p>
          <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
            A local barber shop in Marietta, GA built around clean work.
          </h2>
          <p>
            Ivett Dominican Barber Shop brings professional Dominican barbering to Marietta with a clean space, skilled service, and a relaxed atmosphere for adults and families.
          </p>
          <p>
            Customers frequently praise the team for attention to detail, clean work, patience, and great customer service. Whether you need a sharp fade, a beard trim, kids haircuts in Marietta, GA, or a fresh lineup, the experience is built around taking the time to get it right.
          </p>
          <a
            href="https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-flagRed px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_50px_rgba(206,17,38,0.28)] transition hover:-translate-y-1 hover:bg-white hover:text-flagBlue"
          >
            View details on Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
