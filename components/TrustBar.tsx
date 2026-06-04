const highlights = [
  "4.8 Google Rating",
  "24 Reviews",
  "Barber near Austell Market Fair",
  "Family-Friendly Atmosphere",
  "Book Online with Booksy"
];

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/5 px-5 py-6 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold text-ivory/82">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
