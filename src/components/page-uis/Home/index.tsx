"use client";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Leaf,
  Play,
  BookOpen,
  Users,
  Lightbulb,
  Settings,
  Weight,
  LandPlot,
  CalendarRange,
  BriefcaseBusiness,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQItem from "@/components/widgets/FaqItem";
import faqData from "./faqData";
import Link from "next/link";
import BgCarousel from "@/components/widgets/BgCarousel";

const missionCards = [
  {
    title: "Knowledge Sharing",
    description:
      "Fostering an environment where farmers and stakeholders can exchange vital information and best practices.",
    icon: <BookOpen className="size-12 text-green-500 drop-shadow-xl" />,
    image: "https://placehold.co/800x600/e0e0e0/ffffff?text=Knowledge",
  },
  {
    title: "Capacity Building",
    description:
      "Equipping farmers with modern skills and technologies to improve productivity and ensure sustainable growth.",
    icon: <Users className="size-12 text-green-500 drop-shadow-xl" />,
    image: "https://placehold.co/800x600/e0e0e0/ffffff?text=Farming",
  },
  {
    title: "Promoting Innovation",
    description:
      "Encouraging the adoption of innovative agricultural methods and technologies to drive efficiency.",
    icon: <Lightbulb className="size-12 text-green-500 drop-shadow-xl" />,
    image: "https://placehold.co/800x600/e0e0e0/ffffff?text=Innovation",
  },
  {
    title: "Stakeholder Collaboration",
    description:
      "Building strong partnerships with research institutions and government bodies for mutual success.",
    icon: <Settings className="size-12 text-green-500 drop-shadow-xl" />,
    image: "https://placehold.co/800x600/e0e0e0/ffffff?text=Collaboration",
  },
];

interface CounterBlockProps {
  icon: React.ElementType;
  endValue: number;
  label: string;
  includePlus?: boolean;
}

const CounterBlock: React.FC<CounterBlockProps> = ({
  icon: Icon,
  endValue,
  label,
  includePlus = false,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const duration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTimestamp = performance.now();
          const step = (timestamp: number) => {
            const progress = timestamp - startTimestamp;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(percentage * endValue));
            if (percentage < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue]);

  return (
    <div
      ref={ref}
      className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-500-foreground text-green-500">
        <Icon className="h-8 w-8" />
      </div>
      <div className="flex-grow text-white">
        <div className="text-4xl font-bold">
          {count.toLocaleString()}
          {includePlus && "+"}
        </div>
        <div className="text-lg font-medium opacity-80">{label}</div>
      </div>
    </div>
  );
};

const metrics = [
  {
    icon: LandPlot,
    endValue: 300,
    label: "Hectares Cultivated",
    includePlus: true,
  },
  {
    icon: Weight,
    endValue: 15000,
    label: "Tons of Maize Annually",
    includePlus: true,
  },
  { icon: CalendarRange, endValue: 2, label: "Planting Cycle" },
  {
    icon: BriefcaseBusiness,
    endValue: 240,
    label: "Jobs Created",
    includePlus: true,
  },
  { icon: Users, endValue: 2, label: "Communities Empowered" },
  {
    icon: BookOpen,
    endValue: 100,
    label: "Small Holder Farmers Onboarded",
    includePlus: true,
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center">
        <BgCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-50 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <span className="text-xl md:text-2xl font-semibold text-green-300">
                Welcome to Prime Farmers Association
              </span>
              <h1 className="text-4xl md:text-6xl font-bold my-4">
                Cultivating a Sustainable Future for Ewu, Edo State
              </h1>
              <p className="text-base md:text-lg mb-6 opacity-90">
                We are is dedicated to empowering farmers through innovation,
                education, and community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3"
                >
                  <Link href="/membership">Become a member</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full px-6 py-3"
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block w-full lg:w-1/2 relative h-[500px]">
              <div
                className="absolute inset-0 w-[85%] rounded-lg"
                style={{
                  backgroundImage: "url(images/hero.webp)",
                }}
              >
                <div className="absolute top-1/2 left-[90%] bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center text-gray-800 shadow-lg min-w-[200px]">
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
                <Button
                  asChild
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          background: "url(images/about.webp) no-repeat fixed center / cover",
        }}
      >
        <div className="absolute inset-0 bg-green-800 opacity-70 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="text-white text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Impact in Numbers
            </h2>
            <p className="opacity-90 mt-4 text-lg">
              We are empowering the agricultural value chain in Edo State
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((item, index) => (
              <CounterBlock key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        id="mission"
        className="relative bg-gray-50 py-16 md:py-24 overflow-hidden"
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              To empower agricultural value chain actors in Ewu, Edo State, by
              fostering collaboration, innovation, and capacity building among
              extension service providers, research institutions, and
              stakeholders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionCards.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative z-10">
                  {card.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 italic mx-auto max-w-2xl">
            These mission statements serve as a foundation for PFA's strategic
            direction and guide its efforts to support agricultural development
            in Ewu, Edo State, Nigeria.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section
        id="vision"
        className="relative py-16 md:py-24 bg-background overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="images/farm1.webp"
            alt="Farmland background"
            className="w-full h-full object-cover"
          />
          <div className="absolute size-full inset-0 bg-lime-900/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 drop-shadow-xl">
              Our Vision
            </h2>
            <p className="text-white/80 mt-4 text-lg">
              To enhance agricultural productivity, food security, and
              livelihoods in Ewu, Edo State, by providing a platform for
              collaboration, innovation, and capacity building among extension
              service providers, farmers, and other stakeholders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-6">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg italic text-white/90 shadow-lg h-full">
                <p>
                  "Empowering agricultural value chain actors in Ewu, Edo State,
                  Nigeria, through knowledge sharing, capacity building, and
                  promotion of best practices, to improve productivity, food
                  security, and sustainable livelihoods."
                </p>
                <p>
                  "To foster a vibrant agricultural sector in Ewu, Edo State,
                  Nigeria, by facilitating collaboration, innovation, and
                  information sharing among extension service providers,
                  research institutions, and farmers, for improved productivity,
                  food security, and livelihoods."
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-white border border-white/20 shadow-lg">
                <Users className="size-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">
                    Bringing together stakeholders
                  </h4>
                  <p className="text-white/80">
                    Fostering collaboration and knowledge sharing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-white border border-white/20 shadow-lg">
                <BookOpen className="size-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Sharing experiences</h4>
                  <p className="text-white/80">
                    Promoting the exchange of information on best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-white border border-white/20 shadow-lg">
                <Lightbulb className="size-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Promoting innovation</h4>
                  <p className="text-white/80">
                    Encouraging the adoption of proven technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-white border border-white/20 shadow-lg">
                <Settings className="size-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Regulating activities</h4>
                  <p className="text-white/80">
                    Ensuring that extension service providers operate in line
                    with best practices.
                  </p>
                </div>
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
                Have questions about membership?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Contact the Secretariat
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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

      <section
        style={{
          background: `url(images/farm4.webp) no-repeat fixed center / cover`,
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
    </div>
  );
}
