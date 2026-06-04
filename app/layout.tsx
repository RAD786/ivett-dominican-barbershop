import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import "./globals.css";

const businessName = "Ivett Dominican Barber Shop";
const address = {
  streetAddress: "3565 Austell Rd Suite 1041",
  addressLocality: "Marietta",
  addressRegion: "GA",
  postalCode: "30008",
  addressCountry: "US"
};

export const metadata: Metadata = {
  title: "Ivett Dominican Barber Shop | Barber Shop in Marietta, GA",
  description:
    "Book men's haircuts, fades, beard trims, kids' cuts, and Dominican barbering at Ivett Dominican Barber Shop in Marietta, GA near Austell Road."
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: businessName,
  address: {
    "@type": "PostalAddress",
    ...address
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "24"
  },
  telephone: "+17704399977",
  url: "https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo",
  bookingUrl: "https://booksy.com/en-us/1315543_ivett-dominican-barber-shop_barber-shop_16254_marietta?rwg_token=AFd1xnHEfJX4u4TVp9kNjLD4Su3CxTFvsFsDzIrJjl50qKOVbTwWxqUZUgcsmrnH3w1NN31DrfwQz6GQ90-TTwz0c4n1ucuGoQ%3D%3D#ba_s=seo"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
