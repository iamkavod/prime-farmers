import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import farm5Img from "@/assets/img/farm5.webp";
import { Goal } from "lucide-react";

const goalCards = [
  {
    icon: <Goal className="h-6 w-6 mr-2 text-primary" />,
    title: "Clause (a)",
    description:
      "Bring together agricultural Advisory Service (AS) providers and stakeholders in Ewu, Edo State.",
    image: farm5Img,
  },
  {
    icon: <Goal className="h-6 w-6 mr-2 text-primary" />,
    title: "Clause (b)",
    description: "Share experiences and lessons.",
    image: farm2Img,
  },
  {
    icon: <Goal className="h-6 w-6 mr-2 text-primary" />,
    title: "Clause (c)",
    description:
      "Promote the exchange of information on best global practices in agricultural extension and advisory services.",
    image: farm3Img,
  },
  {
    icon: <Goal className="h-6 w-6 mr-2 text-primary" />,
    title: "Clause (d)",
    description:
      "To actively interact with Agricultural Research, Technology Dissemination and Adaptation Institutions for the development and dissemination of relevant and proven technologies that will meet the needs of all value chain actors.",
    image: farm4Img,
  },
  {
    icon: <Goal className="h-6 w-6 mr-2 text-primary" />,
    title: "Clause (e)",
    description:
      "Identify and exploit the opportunities for providing services in line with best global practices, for both PFA providers and clients alike.",
    image: farm5Img,
  },
  {
    icon: <Goal className="h-6 w-6 mr-2 text-primary" />,
    title: "Clause (f)",
    description:
      "Regulate the activities of all Agricultural Extension and Advisory Service Providers, Individuals, Groups, Corporate, both Public and Private.",
    image: farm2Img,
  },
];

export default goalCards;
