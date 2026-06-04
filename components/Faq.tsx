import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-flagRed">FAQ</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ivory sm:text-5xl">
            Helpful details before you book.
          </h2>
          <p className="mt-5 text-base leading-7 text-ivory/68">
            Planning a visit to our barbershop near Austell Road? Here are the basics for appointments, location, and services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-white/10 bg-white/5 p-5 transition hover:border-flagBlue/70 hover:bg-white/10">
              <summary className="cursor-pointer list-none text-lg font-black text-ivory">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-flagRed transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ivory/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
