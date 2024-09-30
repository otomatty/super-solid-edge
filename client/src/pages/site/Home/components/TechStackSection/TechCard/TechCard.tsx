import { techCard, icon, name, description } from "./TechCard.css";

interface TechCardProps {
  name: string;
  description: string;
  icon: string;
}

export function TechCard({
  name: techName,
  description: techDescription,
  icon: techIcon,
}: TechCardProps) {
  return (
    <div class={techCard}>
      <img src={`/images/tech-icons/${techIcon}`} alt={techName} class={icon} />
      <h3 class={name}>{techName}</h3>
      <p class={description}>{techDescription}</p>
    </div>
  );
}
