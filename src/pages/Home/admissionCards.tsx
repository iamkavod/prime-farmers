import farm2Img from "@/assets/img/farm2.webp";
import farm3Img from "@/assets/img/farm3.webp";
import farm4Img from "@/assets/img/farm4.webp";
import { Award, BadgeCheck, FileText } from "lucide-react";

const admissionCards = [
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

export default admissionCards;
