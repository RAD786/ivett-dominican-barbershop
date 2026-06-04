import { reviews } from "@/data/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="relative px-4 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.035),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">Reviews</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ivory sm:text-5xl">Trusted by local clients.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ivory/68 lg:justify-self-end">
            Positive feedback highlights clean cuts, patient service, a comfortable shop, and professional barbers.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="group rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_18px_54px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-flagBlue/70 hover:bg-white/10">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="text-sm tracking-[0.12em] text-flagRed" aria-label="5 star review">*****</div>
                <div className="rounded-full border border-flagBlue/60 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-white">
                  Google
                </div>
              </div>
              <p className="text-base leading-7 text-ivory/78">"{review.excerpt}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-flagBlue/35 text-xs font-black text-white">
                  {review.name.slice(0, 1)}
                </div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-ivory">{review.name}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-ivory/48">
          Review excerpts are based on publicly available Google reviews.
        </p>
      </div>
    </section>
  );
}
