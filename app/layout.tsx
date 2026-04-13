import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PowerFit Gym Dwarka | Best Gym in Dwarka, Delhi",
  description:
    "Join PowerFit Gym in Dwarka, Delhi. 500+ members, certified trainers, modern equipment, and flexible timings. Book your free trial today!",
  keywords: "gym Dwarka, best gym Delhi, fitness center Dwarka, personal training Dwarka",
  openGraph: {
    title: "PowerFit Gym Dwarka | Transform Your Body",
    description: "Join 500+ members achieving their fitness goals at PowerFit Gym, Dwarka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
