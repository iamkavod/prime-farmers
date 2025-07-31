"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Award,
  BadgeCheck,
  FileText,
  Mail,
  PenSquare,
  Send,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import farm3 from "@/assets/img/farm3.webp";
import hero from "@/assets/img/hero.webp";
import FarmImages from "@/components/widgets/FarmImages";

export default function Membership() {
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
    <main className="">
      <section className="relative h-[50vh] flex items-center justify-center">
        <FarmImages
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-bold text-white text-center"
        >
          Membership
        </motion.h1>
      </section>
      <div className="container mx-auto text-center mb-4 px-4 py-16">
        <div className="flex items-center flex-col-reverse md:flex-row gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=640&auto=format&fit=crop"
              alt=""
              className="size-full object-cover rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 mt-4 text-lg text-muted-foreground mx-auto text-left"
          >
        <h1 className="text-3xl text-black font-semibold mb-3">Join Our Community</h1>
            <p>
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
          </motion.div>
        </div>
      </div>

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
          <motion.div
            className="max-w-6xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-6 p-6 bg-card rounded-lg shadow-md"
            >
              <FileText className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
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
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-6 p-6 bg-card rounded-lg shadow-md"
            >
              <BadgeCheck className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
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
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-6 p-6 bg-card rounded-lg shadow-md"
            >
              <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="relative py-24 px-6"
      >
        <Image
          src={farm3.src}
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-1"
        />
        <div className="absolute -z-1 inset-0 bg-gradient-to-b from-accent/40 to-black/80 size-full" />
        <Card className="relatuve z-1 max-w-6xl mx-auto border-2 bg-card rounded-2xl">
          <CardHeader className="text-center mb-6">
            <h2 className="text-4xl text-primary">Contact the Secretariat</h2>
            <CardDescription className="text-muted-foreground pt-2">
              Have questions about membership? Fill out the form below to reach
              out to us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative flex-1">
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
                <div className="relative flex-1">
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
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Send Message <Send className="ml-1" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
