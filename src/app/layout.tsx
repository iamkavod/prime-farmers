import type { Metadata } from "next";
import "./globals.css";
import { PT_Sans, Noto_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Prime Farmers Association",
  description: "Website for the Prime Farmers Association of Ewu.",
};

const sans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

const serif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headline",
  weight: ["300", "400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col",
          serif.className,
          sans.className,
        )}
      >
        <Header />
        <div className="grow">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
