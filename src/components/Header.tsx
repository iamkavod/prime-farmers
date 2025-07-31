"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookImage, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({
    href,
    label,
    isMobile = false,
  }: {
    href: string;
    label: string;
    isMobile?: boolean;
  }) => (
    <Link
      href={href}
      onClick={() => isMobile && setMobileMenuOpen(false)}
      className={cn(
        "transition-colors text-lg",
        pathname === href
          ? "bg-primary text-white py-1 px-4 rounded"
          : "text-foreground hover:text-primary",
        isMobile ? "block py-2" : "font-medium"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              Free Call +2347081087547, +23470710PRIME
            </span>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              Our Location
            </span>
            <span>KM 90 Benin Auchi road Eko Ewu Edo State</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-22 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8 py-3 px-6 rounded">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <Link
            className="hidden md:flex gap-1 items-center px-12 py-3 border border-primary bg-transparent hover:bg-primary/8 text-primary rounded-full"
            href="/gallery"
          >
            <BookImage className="-rotate-[10deg]"/>
            Gallery
          </Link>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="p-4">
                  <SheetTitle>
                    <div
                      role="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mb-8"
                    >
                      <Logo fullNameOnly />
                    </div>
                  </SheetTitle>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                  </nav>
                  <Button
                    asChild
                    className="mt-8 w-full border border-primary rounded-full bg-transparent hover:bg-primary/90 text-primary"
                  >
                    <Link href="/gallery">Gallery</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
