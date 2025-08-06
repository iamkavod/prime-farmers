import type { Metadata } from "next";
import { Roboto, Covered_By_Your_Grace } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-covered-by-your-grace",
});

export const metadata: Metadata = {
  title: "Prime Farmers Association",
  description: "Cultivating a Sustainable Future for Ewu, Edo State",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${coveredByYourGrace.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
