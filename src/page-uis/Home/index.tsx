"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import farm1Img from "@/assets/img/farm1.webp";
import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import FarmImages from "@/components/widgets/FarmImages";
import { BookOpen, Lightbulb, Settings, Users, CalendarDays, LeafyGreen, Apple } from "lucide-react";
import {
  admissionCards,
  goalCards,
  keyFacts,
  missionCards,
  operationalCards,
} from "./data";

export default function Home() {
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

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] max-h-[1200px] flex items-center justify-center text-center text-white overflow-hidden">
      <FarmImages />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative z-20 p-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl mb-4 tracking-tight leading-tight">
            Cultivating a Sustainable Future for Ewu, Edo State
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Prime Farmers Association is dedicated to empowering farmers through
            innovation, education, and community.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/membership">Join Our Mission</Link>
          </Button>
        </motion.div>
      </section>

      {/* Company Description Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-black">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative w-full h-[300px] md:h-[500px] -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out"
            >
              <Image
                src="https://images.unsplash.com/photo-1683543124257-1d214be3a366?q=80&w=640&auto=format&fit=crop"
                alt="Maize"
                layout="fill"
                objectFit="cover"
                className="z-0 rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <p className="text-primary font-semibold mb-2">ABOUT</p>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">
               The Prime Farmers Association
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
              An important component of Agricultural and Rural Development in
                Ewu, Edo State, an informal educational process in strengthening
                capacities, empowering rural people and promoting innovations
                that will help them overcome occupational challenges, take
                advantage of market opportunities to create wealth and improve
                their livelihoods.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <div className="bg-primary text-white rounded-full p-4 flex items-center justify-center size-20 flex-shrink-0">
                  <CalendarDays className="size-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-primary">5</h3>
                  <p className="text-muted-foreground">YEARS OF EXPERIENCED</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <LeafyGreen className="size-6 text-primary" />
                  <p className="text-muted-foreground font-semibold">Growing Maize</p>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
              Our Mission
            </h2>
            <p className="text-secondary-foreground/80 mt-2 text-lg mx-auto">
              To empower agricultural value chain actors in Ewu, Edo State, by
              fostering collaboration, innovation, and capacity building among
              extension service providers, research institutions, and
              stakeholders. We aim to promote sustainable agricultural
              practices, improve productivity, enhance food security, and
              increase livelihoods through the dissemination of best global
              practices and proven technologies.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {missionCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={card.image.src}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-0 brightness-40"
                />
                <div className="relative z-10 text-white">
                  {card.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2 font-headline">
                    {card.title}
                  </h3>
                  <p className="text-white/80">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section
        id="vision"
        className="relative py-16 md:py-24 bg-background overflow-hidden"
      >
        <Image
          src={farm1Img.src}
          alt="Farmland background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute size-full inset-0 bg-gradient-to-b from-lime-900/90 to-black/80" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Our Vision
            </h2>
            <p className="text-white/80 mt-2 text-lg mx-auto">
              To enhance agricultural productivity, food security, and
              livelihoods in Ewu, Edo State, by providing a platform for
              collaboration, innovation, and capacity building among extension
              service providers, farmers, and other stakeholders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="prose lg:prose-xl space-y-6"
            >
              <p className="text-lg italic p-4 border rounded-xl bg-white/10">
                "Empowering agricultural value chain actors in Ewu, Edo State,
                Nigeria, through knowledge sharing, capacity building, and
                promotion of best practices, to improve productivity, food
                security, and sustainable livelihoods."
              </p>
              <p className="text-lg italic p-4 border rounded-xl bg-white/10">
                "To foster a vibrant agricultural sector in Ewu, Edo State,
                Nigeria, by facilitating collaboration, innovation, and
                information sharing among extension service providers, research
                institutions, and farmers, for improved productivity, food
                security, and livelihoods."
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-card rounded-lg text-black"
              >
                <Users className="size-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">
                    Bringing together stakeholders
                  </h4>
                  <p className="text-muted-foreground">
                    Fostering collaboration and knowledge sharing.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-card rounded-lg text-black"
              >
                <BookOpen className="size-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Sharing experiences</h4>
                  <p className="text-muted-foreground">
                    Promoting the exchange of information on best practices.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-card rounded-lg text-black"
              >
                <Lightbulb className="size-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Promoting innovation</h4>
                  <p className="text-muted-foreground">
                    Encouraging the adoption of proven technologies.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-card rounded-lg text-black"
              >
                <Settings className="size-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Regulating activities</h4>
                  <p className="text-muted-foreground">
                    Ensuring that extension service providers operate in line
                    with best practices.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mt-12 text-white/80 italic mx-auto"
          >
            These mission statements serve as a foundation for PFA's strategic
            direction and guide its efforts to support agricultural development
            in Ewu, Edo State, Nigeria. This mission statement has effectively
            guided PFA's efforts to support agricultural development in Ewu, Edo
            State, Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Mode of Admission Section */}
      <section id="admission" className="py-16 md:py-24 bg-white">
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
          <motion.div
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {admissionCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-6 p-6 rounded-lg bg-accent/10 overflow-hidden"
              >
                <div className="relative z-10 flex items-start space-x-6">
                  {card.icon}
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-headline">
                      {card.title}
                    </h3>
                    <p className="text-black/80">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Goals and Objectives Section */}
      <section id="goals" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Our Goals and Objectives
            </h2>
            <p className="text-muted-foreground mt-2 text-lg mx-auto">
              The overall goal of PFA is to develop and promote agricultural
              extension and advisory services to have sufficient capacity to
              effectively support value chain actors towards increasing
              agricultural productivity, food security, and improved livelihoods
              in a sustainable manner for all Ewu, Edo State.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {goalCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-card p-6 rounded-lg border overflow-hidden"
              >
                <Image
                  src={card.image.src}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-0 brightness-40"
                />
                <div className="relative z-10 text-white">
                  <h4 className="font-bold text-lg flex items-center">
                    {card.icon}
                    {card.title}
                  </h4>
                  <p className="text-white/80 mt-2">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operational Details Section */}
      <section id="operations" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
              Operational Details
            </h2>
            <p className="text-secondary-foreground/80 mt-2 text-lg">
              A quick look into our activities and capacity.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {operationalCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div>
                  {card.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2 font-headline">
                    {card.title}
                  </h3>
                  <p>{card.description}</p>
                  {card.subDescription && (
                    <p className="font-semibold">{card.subDescription}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section id="key-facts" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Our Impact at a Glance
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Key facts about our operations and values.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md transition-transform hover:scale-105 overflow-hidden"
              >
                <Image
                  src={
                    index % 3 === 0
                      ? farm2Img.src
                      : index % 3 === 1
                        ? farm3Img.src
                        : farm4Img.src
                  }
                  alt={fact.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-0 brightness-40"
                />
                <div className="relative z-10 text-white">
                  {fact.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2 font-headline">
                    {fact.title}
                  </h3>
                  <p className="text-white/80">{fact.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{background: `url(${farm1Img.src}) no-repeat fixed center / cover`}} className="relative py-16 md:py-24 text-white">
      <div className="absolute h-full inset-0 bg-black/70 z-0" />
        <div className="relative container mx-auto px-4 text-center z-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/membership">Become a Member</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
