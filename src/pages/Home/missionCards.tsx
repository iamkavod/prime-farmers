import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import farm5Img from "@/assets/img/farm5.webp";
import { Handshake, Lightbulb, TrendingUp, Zap } from "lucide-react";

const missionCards = [
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

export default missionCards;
