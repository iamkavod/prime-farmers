"use client";
import React, { useState } from "react";
import { ChevronRight, MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Reusable component for a single contact information box
const ContactInfoCard = ({
  icon: Icon,
  title,
  content,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: (...props: any[]) => React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 text-green-600">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-gray-600">
        <p className="font-bold text-gray-800">{title}</p>
        {content}
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would handle form submission here (e.g., API call)
    alert("Thank you for your message!");
  };

  return (
    <main className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(images/hero0.webp)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white p-4">
          <p className="flex items-center justify-center text-sm mb-2 text-gray-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Contact us</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Contact us</h1>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ContactInfoCard
            icon={MapPin}
            title="Address:"
            content={<p>KM 90 Benin Auchi road Eko Ewu Edo State</p>}
          />
          <ContactInfoCard
            icon={Phone}
            title="Phone:"
            content={
              <a href="tel:+2349136590235" className="hover:underline">
                +234 708 108 7547
              </a>
            }
          />
          <ContactInfoCard
            icon={Mail}
            title="Email:"
            content={
              <a
                href="mailto:info@prime-farmers.com"
                className="hover:underline"
              >
                info@prime-farmers.com
              </a>
            }
          />
          <ContactInfoCard
            icon={Globe}
            title="Website"
            content={
              <Link
                href="https://www.prime-farmers.com"
                className="hover:underline"
              >
                prime-farmers.com
              </Link>
            }
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-4 p-4">
              <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:col-span-3 flex items-stretch">
              <div
                className="w-full rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url('images/hero1.webp')" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Map Section - Placeholder */}
        <div className="w-full h-96 bg-gray-200 mt-12 rounded-2xl flex items-center justify-center text-gray-500 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3893323311467!2d6.255505674815019!3d6.471554993505792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104171757240b93b%3A0x3e0b59369b54e7c1!2sKM%2090%20Benin%20Auchi%20Rd%2C%20Eko%20Ewu%20Edo%20State!5e0!3m2!1sen!2sng!4v1702164853828!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
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
