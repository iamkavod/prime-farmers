"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Leaf,
  Target,
  Users,
  ClipboardList,
  TrendingUp,
  Sparkle,
  Recycle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import aboutImg from "@/assets/img/about.webp";
import farm1Img from "@/assets/img/farm1.webp";
import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import faqItems from "./faqItems";

const MotionAccordionItem = motion(AccordionItem);

export default function About() {
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

  return (
    <main className="py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl">
          About Prime Farmers Association
        </h1>
        <p className="mt-4 text-lg text-muted-foreground mx-auto">
          Learn about our journey, our values, and the impact we're making in
          the agricultural community of Ewu, Edo State.
        </p>
      </motion.div>

      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-headline font-bold mb-4">Our History</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2024 by a small group of passionate farmers, Prime
            Farmers Association (PFA) was born from a shared vision: to create a
            unified voice for the agricultural community in Ewu, Edo State. We
            started with just 20 members, meeting in a small community hall to
            discuss challenges and share knowledge.
          </p>
          <p className="text-muted-foreground">
            Over the years, our association has grown exponentially. We've
            championed modern agricultural practices, facilitated access to
            markets, and advocated for policies that support local farmers.
            Today, we are a thriving organization representing hundreds of
            farmers, dedicated to building a prosperous and sustainable
            agricultural sector in Edo State.
          </p>
        </motion.div>
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={aboutImg.src}
            alt="Founding members of the association"
            data-ai-hint="farmers meeting"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          Our Impact & Values
        </h2>
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="h-full">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-max mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline font-semibold">
                  Community Empowerment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have fostered a strong network of farmers, encouraging
                  collaboration and mutual support to overcome common challenges
                  and achieve collective success.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="h-full">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-max mb-2">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline font-semibold">
                  Sustainable Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our initiatives have led to the widespread adoption of
                  sustainable farming methods, improving soil health and
                  increasing long-term productivity for our members.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="h-full">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-max mb-2">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline font-semibold">
                  Market Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We've created direct links between our farmers and larger
                  markets, ensuring better prices and reducing post-harvest
                  losses, significantly boosting profitability.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          Our Executives
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {executives.map((trustee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square w-[280px] sm:w-[350px]"
            >
              <Card
                className="text-center h-full bg-cover bg-center text-white flex flex-col items-center justify-end"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${trustee.img})`,
                }}
              >
                <CardHeader className="pt-8">
                  <CardTitle className="font-headline font-semibold">
                    {trustee.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{trustee.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          Board of Trustees
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-x-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {bot.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-secondary px-4 py-12 my-24">
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
                  <ClipboardList className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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
                  <ClipboardList className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our association.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <MotionAccordionItem
                key={index}
                value={`item-${index}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </MotionAccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
