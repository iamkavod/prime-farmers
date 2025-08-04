"use client";
import { useEffect, useState } from "react";
import { ChevronRight, Leaf, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQItem from "@/components/widgets/FaqItem";
import faqData from "./faqData";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const executives = [
  {
    name: "George Stephen Ehijele",
    role: "President",
    img: "https://placehold.co/300x200/e0e0e0/ffffff?text=GE",
  },
  {
    name: "Pst Pedro Arabor",
    role: "Treasurer",
    img: "https://placehold.co/300x200/e0e0e0/ffffff?text=PA",
  },
  {
    name: "Pst Allison Isiraojie",
    role: "Secretary General",
    img: "https://placehold.co/300x200/e0e0e0/ffffff?text=PI",
  },
];

const bot = [
  {
    name: "George Stephen Ehijele",
    role: "President",
    img: "https://placehold.co/150x150/e0e0e0/ffffff?text=GE",
  },
  {
    name: "Col Isiraojie O Rtd",
    role: "Member",
    img: "https://placehold.co/150x150/e0e0e0/ffffff?text=CI",
  },
  {
    name: "Umoru Abdullahi Aliyu Rtd",
    role: "Member",
    img: "https://placehold.co/150x150/e0e0e0/ffffff?text=UA",
  },
  {
    name: "Oahimi Godwin",
    role: "Member",
    img: "https://placehold.co/150x150/e0e0e0/ffffff?text=OG",
  },
  {
    name: "Gene Ekoh",
    role: "Member",
    img: "https://placehold.co/150x150/e0e0e0/ffffff?text=GE",
  },
];

export default function About() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white p-4">
          <p className="flex items-center justify-center text-sm mb-2 text-gray-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>About us</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">About Us</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 relative h-[500px]">
              <div
                className="absolute inset-0 w-[85%] rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url(images/farm1.webp)",
                }}
              >
                <div className="absolute top-1/2 left-[90%] bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center text-gray-800 shadow-lg min-w-[200px]">
                  <div className="text-green-600 text-3xl mb-2">
                    <CalendarDays className="h-10 w-10 mx-auto" />
                  </div>
                  <strong className="text-6xl font-extrabold text-green-600">
                    5
                  </strong>
                  <span className="block text-sm leading-tight mt-1">
                    Years Of
                    <br />
                    Experience
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-16 py-8">
              <div className="pb-8">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                    About
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    The Prime Farmers Association
                  </h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    An important component of Agricultural and Rural Development
                    in Ewu, Edo State, an informal educational process in
                    strengthening capacities, empowering rural people and
                    promoting innovations that will help them overcome
                    occupational challenges, take advantage of market
                    opportunities to create wealth and improve their
                    livelihoods.
                  </p>
                </div>
                <div className="my-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        Growing Maize
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="container mb-12 mx-auto text-center">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            Members
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">
            Our Executives
          </h2>
        </div>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {executives.map((trustee, index) => (
            <div key={index} className="aspect-square w-[280px] sm:w-[350px]">
              <Card
                className="text-center h-full bg-cover bg-center text-white flex flex-col items-center justify-end"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${trustee.img})`,
                }}
              >
                <CardHeader className="pt-8">
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="font-semibold my-4">{trustee.name}</span>
                  <p className="text-white/80">{trustee.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          Board of Trustees
        </h2>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-x-12">
          {bot.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                Have questions about membership?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Contact the Secreteriat
              </h2>
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Last Name"
                  />
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 col-span-1 md:col-span-2"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    cols={30}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="default"
                    className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 w-full"
                  >
                    Request A Quote
                  </Button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                Frequently Ask Question
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Frequently Ask Question
              </h2>
              <div className="w-full space-y-2">
                {faqData.map((item, index) => (
                  <FAQItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: `url(images/farm2.webp) no-repeat fixed center / cover`,
        }}
        className="relative py-16 md:py-24 text-white"
      >
        <div className="absolute h-full inset-0 bg-black/70 z-0" />
        <div className="relative container mx-auto px-4 text-center z-1">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Ready to Grow With Us?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Join a network of passionate farmers, gain access to valuable
              resources, and make a real impact on our community's future.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-500/90 text-accent-foreground"
            >
              <Link href="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
