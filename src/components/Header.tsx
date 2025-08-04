"use client";
import { useState } from "react";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
  Map,
  Phone,
  Menu,
} from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Data for the social media links in the top bar
  const socialLinks = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Dribbble, url: "#" },
  ];

  // Data for the main navigation links
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header className="font-sans antialiased text-gray-900">
      {/* Top Bar */}
      <div className="hidden md:block bg-green-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <a
            href="mailto:info@prime-farmers.com"
            className="flex items-center space-x-2 my-1"
          >
            <Mail className="w-4 h-4" />
            <span>info@prime-farmers.com</span>
          </a>
          <div className="flex items-center space-x-2 my-1">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-green-700 hover:bg-green-800 transition-colors"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Brand Logo */}
            <Logo fullNameOnly />

            {/* Contact Info Boxes */}
            <div className="hidden md:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center">
                <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">Free Call</p>
                  <a
                    href="tel:+2347081087547"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +234 708 108 7547
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <Map className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">Our Location</p>
                  <p className="text-gray-600">
                    KM 90 Benin Auchi road Eko Ewu Edo State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop navigation links */}
          <div className="hidden md:flex flex-1 items-center justify-start">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.url;
                return (
                  <li
                    key={index}
                    className={`font-semibold ${isActive ? "text-green-500" : "text-gray-300"} hover:text-green-500 transition-colors`}
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Membership button */}
          <div className="flex items-center justify-end flex-grow">
            <Link
              href="/membership"
              className="bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-colors"
            >
              Membership
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-gray-800 mt-4`}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.url;
              return (
                <li key={index}>
                  <Link
                    href={link.url}
                    className={`block px-4 py-2 rounded-lg ${isActive ? "bg-gray-700 text-green-500" : "text-gray-300"} hover:bg-gray-700 hover:text-green-500 transition-colors`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/membership"
                className="my-4 bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-colors"
              >
                Membership
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
