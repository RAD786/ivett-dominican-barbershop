import { About } from "@/components/About";
import { BookingCta } from "@/components/BookingCta";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Reviews />
      <Location />
      <Faq />
      <BookingCta />
      <Footer />
    </main>
  );
}
