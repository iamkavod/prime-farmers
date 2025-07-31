import Link from "next/link";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import Image from "next/image";
import product1 from "@/assets/img/farm1.webp"; // Assuming these images exist or need to be added
import product2 from "@/assets/img/farm2.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263125] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Logo fullNameOnly />
            <p className="font-semibold">RC: 8114536</p>
            <p className="text-sm opacity-80">
              Cultivating a sustainable future for farmers in Ewu, Edo State.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-bold mb-6 text-xl">Explore</h3>
            <div className="space-y-4">
              <div className="flex space-x-4 items-center">
                <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                  <Image src={product1.src} alt="Organic Products" layout="fill" objectFit="cover" />
                </div>
                <div>
                  <Link href="#" className="text-md font-semibold hover:text-primary transition-colors">
                    Organic Products For Healthy Living
                  </Link>
                  <p className="text-xs text-gray-400 mt-1 flex items-center space-x-2">
                    <span>Oct. 06, 2050</span>
                    <span>• Admin</span>
                    <span>• 11</span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                  <Image src={product2.src} alt="Organic Products" layout="fill" objectFit="cover" />
                </div>
                <div>
                  <Link href="#" className="text-md font-semibold hover:text-primary transition-colors">
                    Organic Products For Healthy Living
                  </Link>
                  <p className="text-xs text-gray-400 mt-1 flex items-center space-x-2">
                    <span>Oct. 06, 2050</span>
                    <span>• Admin</span>
                    <span>• 11</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-bold mb-6 text-xl">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/home" className="hover:text-primary transition-colors">
                  &gt; Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  &gt; About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  &gt; Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  &gt; Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4 opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="text-primary size-4 mt-1 shrink-0" />
                <span>KM 90 Benin Auchi road Eko Ewu Edo State</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-primary size-4 shrink-0" />
                <a
                  href="mailto:info@prime-farmers.com"
                  className="hover:text-primary transition-colors"
                >
                  info@prime-farmers.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-primary size-4 shrink-0" />
                <a
                  href="tel:+2347081087547"
                  className="hover:text-primary transition-colors"
                >
                  +2347081087547
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-primary size-4 shrink-0" />
                <a
                  href="tel:+23470710PRIME"
                  className="hover:text-primary transition-colors"
                >
                  +23470710PRIME
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Prime Farmers Association. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
