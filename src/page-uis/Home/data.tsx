import farm1Img from "@/assets/img/farm1.webp";
import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import farm5Img from "@/assets/img/farm5.webp";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  FileText,
  Goal,
  Handshake,
  Leaf,
  Lightbulb,
  MapPin,
  Scaling,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export const admissionCards = [
  {
    icon: <FileText className="h-10 w-10 text-primary flex-shrink-0 mt-1" />,
    title: "Ordinary & Life Membership",
    description:
      "Application for ordinary and life membership shall be submitted to the Secretary-General on the prescribed form along with Registration fee for the category of membership desired and required annual subscription. The Secretary-General shall, on receipt of the same, admit the applicant subject to the approval of the Executive Council.",
    image: farm2Img,
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary flex-shrink-0 mt-1" />,
    title: "Membership Confirmation",
    description:
      "Each member having been registered by the Association will receive a membership certificate/ID Card indicating his membership category and registration number. In case of denial of membership by the Association, all monies paid by the applicant shall be refunded.",
    image: farm3Img,
  },
  {
    icon: <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />,
    title: "Honorary Membership",
    description:
      "Honorary membership shall be conferred to an eligible persons by a resolution in a General Meeting after his/her name has been proposed by a member in good financial standing and seconded by another of the same status and subsequently endorsed by at least two-thirds (2/3) of the members present.",
    image: farm4Img,
  },
];

export const goalCards = [
  {
    icon: <Goal className="size-6 mr-2 text-primary" />,
    title: "Clause (a)",
    description:
      "Bring together agricultural Advisory Service (AS) providers and stakeholders in Ewu, Edo State.",
    image: farm5Img,
  },
  {
    icon: <Goal className="size-6 mr-2 text-primary" />,
    title: "Clause (b)",
    description: "Share experiences and lessons.",
    image: farm2Img,
  },
  {
    icon: <Goal className="size-6 mr-2 text-primary" />,
    title: "Clause (c)",
    description:
      "Promote the exchange of information on best global practices in agricultural extension and advisory services.",
    image: farm3Img,
  },
  {
    icon: <Goal className="size-6 mr-2 text-primary" />,
    title: "Clause (d)",
    description:
      "To actively interact with Agricultural Research, Technology Dissemination and Adaptation Institutions for the development and dissemination of relevant and proven technologies that will meet the needs of all value chain actors.",
    image: farm4Img,
  },
  {
    icon: <Goal className="size-6 mr-2 text-primary" />,
    title: "Clause (e)",
    description:
      "Identify and exploit the opportunities for providing services in line with best global practices, for both PFA providers and clients alike.",
    image: farm1Img,
  },
  {
    icon: <Goal className="size-6 mr-2 text-primary" />,
    title: "Clause (f)",
    description:
      "Regulate the activities of all Agricultural Extension and Advisory Service Providers, Individuals, Groups, Corporate, both Public and Private.",
    image: farm2Img,
  },
];

export const keyFacts = [
  {
    icon: <Sparkles className="mx-auto size-8 text-primary" />,
    title: "Sustainable Focus",
    description:
      "Pioneering eco-friendly farming techniques for a greener tomorrow.",
  },
  {
    icon: <Sparkles className="mx-auto size-8 text-primary" />,
    title: "Community Driven",
    description:
      "Connecting and empowering over 500 local farmers in the Ewu region.",
  },
  {
    icon: <Sparkles className="mx-auto size-8 text-primary" />,
    title: "Strategic Location",
    description:
      "Operating at KM 90 Benin Auchi road, a central hub for agriculture.",
  },
];

export const missionCards = [
  {
    icon: <Zap className="mx-auto size-8 text-primary" />,
    title: "Empowerment",
    description:
      "Enhance the capacity of value chain actors through knowledge sharing, training, and support.",
    image: farm2Img,
  },
  {
    icon: <Handshake className="mx-auto size-8 text-primary" />,
    title: "Collaboration",
    description:
      "Foster partnerships among extension service providers, research institutions, and stakeholders.",
    image: farm3Img,
  },
  {
    icon: <Lightbulb className="mx-auto size-8 text-primary" />,
    title: "Innovation",
    description:
      "Promote the adoption of best global practices and proven technologies.",
    image: farm4Img,
  },
  {
    icon: <TrendingUp className="mx-auto size-8 text-primary" />,
    title: "Sustainability",
    description:
      "Focus on sustainable agricultural practices that improve productivity and livelihoods.",
    image: farm5Img,
  },
];

export const operationalCards = [
  {
    icon: <CalendarDays className="mx-auto size-8 text-primary" />,
    title: "Activity",
    description: "Meet once every month",
    subDescription: "AGM every December",
  },
  {
    icon: <Leaf className="mx-auto size-8 text-primary" />,
    title: "Farming Focus",
    description: "Maize only",
  },
  {
    icon: <MapPin className="mx-auto size-8 text-primary" />,
    title: "Farm Locations",
    description: "Ekpoma & Agbede",
  },
  {
    icon: <Scaling className="mx-auto size-8 text-primary" />,
    title: "Farm Capacity",
    description: "50 to 300 hectares",
  },
];
