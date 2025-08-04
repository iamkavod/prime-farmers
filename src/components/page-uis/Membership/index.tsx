"use client";
import {
  Award,
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQItem from "@/components/widgets/FaqItem";
import Link from "next/link";
import faqData from "./faqData";

export default function Membership() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
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
            <span>Memberships</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Memberships</h1>
        </div>
      </section>

      <section
        style={{
          background: `url(images/farm1.webp) no-repeat fixed center / cover`,
        }}
        className="relative py-16 md:py-24 text-white"
      >
        <div className="absolute h-full inset-0 bg-black/70 z-0" />
        <div className="relative container mx-auto px-4 text-center z-1">
          <div>
            <p className="md:text-2xl mb-8 container mx-auto">
              Become a part of Prime Farmers Association and help us shape the
              future of agriculture. Choose the membership that's right for you.
              Membership types include: Ordinary, for practicing farmers and
              related professionals (ordinary membership fee is ₦50,000, Uniform
              is ₦20,000 - Polo or Shirt and Cap); Life, a one-time payment
              option with enhanced benefits; Corporate, for organizations
              aligned with agricultural extension and advisory services in Ewu,
              Nigeria; and Honorary, conferred upon distinguished individuals
              for significant contributions to agriculture and rural
              development.
            </p>
          </div>
        </div>
      </section>

      <section id="admission" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
              Mode of Admission
            </h2>
            <p className="text-secondary-foreground/80 mt-2 text-lg">
              Joining the Prime Farmers Association is a straightforward
              process.
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-start space-x-6 p-6 bg-card rounded-lg shadow-md">
              <FileText className="h-10 w-10 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-headline">
                  Ordinary & Life Membership
                </h3>
                <p className="text-lg text-muted-foreground">
                  Application for ordinary and life membership shall be
                  submitted to the Secretary-General on the prescribed form
                  along with Registration fee for the category of membership
                  desired and required annual subscription. The
                  Secretary-General shall, on receipt of the same, admit the
                  applicant subject to the approval of the Executive Council.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 bg-card rounded-lg shadow-md">
              <BadgeCheck className="h-10 w-10 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-headline">
                  Membership Confirmation
                </h3>
                <p className="text-muted-foreground">
                  Each member having been registered by the Association will
                  receive a membership certificate/ID Card indicating his
                  membership category and registration number. In case of denial
                  of membership by the Association, all monies paid by the
                  applicant shall be refunded.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 bg-card rounded-lg shadow-md">
              <Award className="h-10 w-10 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 font-headline">
                  Honorary Membership
                </h3>
                <p className="text-muted-foreground">
                  Honorary membership shall be conferred to an eligible persons
                  by a resolution in a General Meeting after his/her name has
                  been proposed by a member in good financial standing and
                  seconded by another of the same status and subsequently
                  endorsed by at least two-thirds (2/3) of the members present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                Have questions about membership? reach out to us.
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
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Frequently Ask Questions
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
    </main>
  );
}
