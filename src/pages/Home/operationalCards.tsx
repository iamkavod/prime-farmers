import { CalendarDays, Leaf, MapPin, Scaling } from "lucide-react";

const operationalCards = [
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

export default operationalCards;
