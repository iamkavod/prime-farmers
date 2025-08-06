import {
  ChevronRight,
  Leaf,
  CalendarDays,
  BarChart,
  Handshake,
  Shield,
  Globe,
  Award,
  Box,
  Wheat,
  Droplets,
  Gem,
  SproutIcon,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import georgeImg from "@/assets/img/george.webp";
import Link from "next/link";
import Image from "next/image";
import faqData from "./faqData";
import FAQItem from "@/components/widgets/FaqItem";

// Placeholder data for executives and bot. In a real app, you'd get this from an API.
const executives = [
  {
    name: "George Stephen Ehijele",
    role: "President",
    img: georgeImg.src,
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
    img: georgeImg.src,
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
        style={{ backgroundImage: "url('images/hero0.webp')" }}
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
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:h-[500px]">
              <div
                className="absolute inset-0 w-[85%] rounded-3xl bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url(images/about.webp)",
                }}
              >
                <div className="absolute top-1/2 left-[90%] -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-3xl p-6 text-center text-gray-800 shadow-lg min-w-[200px]">
                  <div className="text-green-600 text-3xl mb-2">
                    <CalendarDays className="h-10 w-10 mx-auto" />
                  </div>
                  <strong className="text-6xl font-extrabold text-green-600">
                    {new Date().getFullYear() - 2020}
                  </strong>
                  <span className="block text-sm leading-tight mt-1">
                    Years Of
                    <br />
                    Experience
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-16 py-8">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                About
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                The Prime Farmers Association
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                An important component of Agricultural and Rural Development in
                Ewu, Edo State. We are an informal educational process focused
                on strengthening capacities, empowering rural people, and
                promoting innovations that will help them overcome challenges,
                take advantage of market opportunities to create wealth, and
                improve their livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Objectives Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Goals & Objectives
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
            <li className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                To develop and promote agricultural extension and advisory
                services to have sufficient capacity to effectively support
                value chain actors towards increasing agricultural productivity,
                food security, and improved livelihoods in a sustainable manner
                for all Ewu, Edo State.
              </p>
            </li>
            <li className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <Handshake className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                Bring together agricultural Advisory Service (AS) providers and
                stakeholders in Ewu, Nigeria to share experiences and lessons.
              </p>
            </li>
            <li className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <Globe className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                Promote the exchange of information on best global practices in
                agricultural extension and advisory services.
              </p>
            </li>
            <li className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <SproutIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                Actively interact with Agricultural Research, Technology
                Dissemination, and Adaptation Institutions for the development
                and dissemination of relevant and proven technologies.
              </p>
            </li>
            <li className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                Identify and exploit the opportunities for providing services in
                line with best global practices for both PFA providers and
                clients alike.
              </p>
            </li>
            <li className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>
                Regulate the activities of all Agricultural Extension and
                Advisory Service Providers, Individuals, Groups, Corporate, both
                Public and Private.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Yearly Targets & Objectives Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Annual Production Targets
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              As part of our commitment to proficient and sustainable
              agricultural production, the Prime Farmers' Association in Ewu,
              Edo State, has set ambitious targets to produce high-quality dry
              maize and grits for local consumption and export.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Target 1 */}
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-200 rounded-full">
                  <BarChart className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold">Production Goals</h3>
              </div>
              <p className="text-gray-700">
                Produce **15,000 to 30,000 tons of dry maize** annually to
                enhance food security and provide quality feed for the
                livestock, poultry, and aquaculture sectors.
              </p>
            </Card>

            {/* Target 2 */}
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-200 rounded-full">
                  <Gem className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold">Quality Exports</h3>
              </div>
              <p className="text-gray-700">
                Aim to produce high-quality **maize grit** for the production of
                beauty-enhancing and nutritious drinks for exportation,
                promoting economic growth.
              </p>
            </Card>

            {/* Objective Cards */}
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-200 rounded-full">
                  <Leaf className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold">
                  Sustainable Agriculture
                </h3>
              </div>
              <p className="text-gray-700">
                Promote environmentally friendly practices that conserve natural
                resources and minimize environmental degradation.
              </p>
            </Card>

            {/* Economic Empowerment Card */}
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-200 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold">Economic Empowerment</h3>
              </div>
              <p className="text-gray-700">
                Enhance the livelihoods of youths and citizens through
                sustainable agricultural practices and employment opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Products</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <Box className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Dried White Maize</h3>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Maize Oil</h3>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <Wheat className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Maize Grit</h3>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-none">
              <Box className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Maize Bran</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Executives Section */}
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
            <div
              key={index}
              className="aspect-square w-[280px] sm:w-[350px] relative rounded-3xl overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${trustee.img})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-start justify-end p-6 text-white">
                <span className="font-semibold text-2xl my-1">
                  {trustee.name}
                </span>
                <p className="text-white/80">{trustee.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          Board of Trustees
        </h2>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-x-12">
          {bot.map((member, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-green-600 transition-colors">
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover size-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                Have questions about membership?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Contact the Secretariat
              </h2>
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/50 backdrop-blur-sm"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/50 backdrop-blur-sm"
                    placeholder="Last Name"
                  />
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 col-span-1 md:col-span-2 bg-white/50 backdrop-blur-sm"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    cols={30}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/50 backdrop-blur-sm"
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
                Frequently Asked Questions
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

      {/* Call to Action Section */}
      <section
        style={{
          background: `url(images/farm2.webp) no-repeat fixed center / cover`,
        }}
        className="relative py-16 md:py-24 text-white"
      >
        <div className="absolute h-full inset-0 bg-black/70 z-0" />
        <div className="relative container mx-auto px-4 text-center z-10">
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
