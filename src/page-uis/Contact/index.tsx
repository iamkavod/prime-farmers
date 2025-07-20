"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ClipboardList,
  Mail,
  MapPin,
  PenSquare,
  Phone,
  Recycle,
  Send,
  Sparkle,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import farm1Img from "@/assets/img/farm1.webp";
import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: <Mail className="size-6 text-primary" />,
    title: "General Inquiries",
    value: "info@prime-farmers.com",
    href: "mailto:info@prime-farmers.com",
  },
  {
    icon: <User className="size-6 text-primary" />,
    title: "Lead Coordinator (Stephen George)",
    value: "Stephen@prime-farmers.com",
    href: "mailto:Stephen@prime-farmers.com",
  },
  {
    icon: <MapPin className="size-6 text-primary" />,
    title: "Physical Address",
    value: "KM 90 Benin Auchi road Eko Ewu Edo State",
    href: "https://www.google.com/maps/search/?api=1&query=KM+90+Benin+Auchi+road+Eko+Ewu+Edo+State",
  },
  {
    icon: <Phone className="size-6 text-primary" />,
    title: "Phone Number",
    value: "+2347081087547",
    href: "tel:+2347081087547",
  },
  {
    icon: <Phone className="size-6 text-primary" />,
    title: "Phone Word",
    value: "+23470710PRIME",
    href: "tel:+23470710PRIME",
  },
];
const objectives = [
  {
    icon: Target,
    title: "Food Security",
    description:
      "Ensure a steady supply of maize and other essential crops for the people of Edo State.",
    image: farm1Img,
  },
  {
    icon: Users,
    title: "Economic Empowerment",
    description:
      "Enhance the livelihoods of youths and citizens through sustainable agricultural practices and employment opportunities.",
    image: farm2Img,
  },
  {
    icon: Sparkle,
    title: "Quality Products",
    description:
      "Provide high-quality grits and other products that promote health, beauty, and well-being.",
    image: farm3Img,
  },
  {
    icon: Recycle,
    title: "Sustainable Agriculture",
    description:
      "Promote environmentally friendly and sustainable agricultural practices that conserve natural resources and minimize environmental degradation.",
    image: farm4Img,
  },
];

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Contact form submitted:", data);
    alert("Message sent successfully! We will get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mt-12 mb-24"
      >
        <Card className="container mx-auto border rounded-2xl p-6">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl">
              Get In Touch
            </CardTitle>
            <CardDescription className="text-muted-foreground text-xl mt-2 mb-6">
              We'd love to hear from you. Whether you have a question about
              membership, partnerships, or anything else, our team is ready to
              answer all your questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-800">
                Contact the Secretariat
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="flex h-12 w-full rounded-md border border-input bg-transparent pl-12 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@example.com"
                    required
                    className="flex h-12 w-full rounded-md border border-input bg-transparent pl-12 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="relative">
                  <PenSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    required
                    className="flex h-12 w-full rounded-md border border-input bg-transparent pl-12 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    rows={6}
                    required
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-white font-medium py-6 text-lg rounded-lg transition-all duration-300"
                >
                  Send Message <Send className="ml-1" />
                </Button>
              </form>
            </div>

            <div className="space-y-8 mt-8 md:mt-0">
              <h3 className="text-2xl text-gray-800">
                Our Contact Information
              </h3>
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-sans font-[500]">{detail.title}</h3>
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors break-all"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <section className="bg-secondary px-4 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-headline font-bold text-center mb-2">
            Yearly Target
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="p-8"
          >
            <p className="text-xl mb-2 text-center">
              Prime Farmers' Association, Ewu, Edo State: Annual Production
              Targets.
            </p>
            <p className="text-muted-foreground text-lg mb-6 text-center">
              As part of our commitment to proficient, sustainable agricultural
              production, the Prime Farmers' Association in Ewu, Edo State, has
              set ambitious targets to produce:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={itemVariants}>
                <div className="flex items-start space-x-3">
                  <ClipboardList className="size-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      1. 15,000 to 30,000 tons of dry maize annually
                    </span>{" "}
                    to enhance food security, provide quality dry maize for feed
                    production for the livestock, poultry, and aquaculture
                    sectors, and promote economic empowerment.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="flex items-start space-x-3">
                  <ClipboardList className="size-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      2. Grits for export:
                    </span>{" "}
                    We aim to produce high-quality maize grit for the production
                    of beauty-enhancing and nutritious drinks for exportation.
                  </p>
                </div>
              </motion.div>
            </div>

            <h3 className="text-2xl font-headline mb-4 text-center">
              Objectives:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 shadow-md rounded-xl text-center text-white flex flex-col bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,100,0,0.6), rgba(0,0,0,0.6)), url(${objective.image.src})`,
                  }}
                >
                  <CardHeader className="flex flex-col items-center">
                    <div className="mx-auto bg-primary/80 rounded-full p-3 w-max mb-2">
                      <objective.icon className="size-6 text-white" />
                    </div>
                    <CardTitle className="font-headline text-lg font-semibold my-2">
                      {objective.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">{objective.description}</p>
                  </CardContent>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-headline mb-4 text-center">
              Benefits:
            </h3>
            <ul className="list-none space-y-2 text-muted-foreground mb-8">
              <motion.li variants={itemVariants} className="flex items-start">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
                <span>
                  Increased production of Dry maize, Grits and maize bran to
                  meet growing demands.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
                <span>
                  Improved food security and self-sufficiency for the people of
                  Edo State.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
                <span>
                  Enhanced livelihoods for youths and citizens through
                  employment and income-generating opportunities.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
                <span>
                  Availability of quality grits and products that promote
                  health, beauty, and well-being.
                </span>
              </motion.li>
            </ul>

            <p className="text-muted-foreground italic text-center">
              By achieving our production targets, we aim to make a significant
              contribution to the economic development of Edo State Nigeria,
              while promoting sustainable agriculture practices and improving
              the lives of our citizens.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
