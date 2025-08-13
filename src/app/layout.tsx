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
  description:
    "Empowering farmers in Ewu, Edo State through innovation, collaboration, and capacity building. Join Prime Farmers Association to cultivate sustainable agriculture and transform rural livelihoods.",
  keywords:
    "Prime Farmers Association, Ewu Edo State agriculture, farmer empowerment Nigeria, agricultural value chain, maize farming Nigeria, sustainable agriculture, rural development, smallholder farmers, extension services Nigeria, agricultural innovation, capacity building for farmers, knowledge sharing in agriculture, food security Nigeria, community farming initiatives, agricultural collaboration, farming best practices, modern farming techniques, agricultural education, stakeholder partnerships, farmer-led innovation, hectares cultivated, maize production statistics, job creation in agriculture, farming communities empowered, agricultural membership benefits, join farming association, farmer training programs, agricultural events Nigeria, farming technology adoption, agricultural research collaboration, how to join a farming association in Nigeria, benefits of agricultural membership in Edo State, innovative farming practices for smallholder farmers, maize yield improvement techniques, collaborative farming models in rural Nigeria",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Prime Farmers" />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
              // Handle PWA install prompt
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                console.log('beforeinstallprompt fired');
                e.preventDefault();
                deferredPrompt = e;
                // Show install button or banner here
                console.log('PWA install prompt available');
              });
              
              window.addEventListener('appinstalled', (evt) => {
                console.log('PWA was installed');
              });
            `,
          }}
        />
      </head>
      <body className={`${roboto.variable} ${coveredByYourGrace.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
