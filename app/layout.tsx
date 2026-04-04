import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const kanSerif = Cormorant_Garamond({
  variable: "--font-kan-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const kanSans = DM_Sans({
  variable: "--font-kan-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "KAN Agency",
    template: "%s · KAN Agency",
  },
  description:
    "Full-service digital agency — web design, marketing, and brand identity. Immersive digital experiences for modern brands.",
  openGraph: {
    title: "KAN Agency",
    description:
      "We turn complexity into elegance. Your vision, our design — together, we can.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanSans.variable} ${kanSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-kan-black text-kan-light">
        {children}
      </body>
    </html>
  );
}
