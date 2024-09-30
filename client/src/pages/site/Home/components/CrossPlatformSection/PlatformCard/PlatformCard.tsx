import { platformCard, icon, name, description } from "./PlatformCard.css";

interface PlatformCardProps {
  name: string;
  description: string;
  icon: string;
}

export function PlatformCard({
  name: platformName,
  description: platformDescription,
  icon: platformIcon,
}: PlatformCardProps) {
  return (
    <div class={platformCard}>
      <img
        src={`/images/platform-icons/${platformIcon}`}
        alt={platformName}
        class={icon}
      />
      <h3 class={name}>{platformName}</h3>
      <p class={description}>{platformDescription}</p>
    </div>
  );
}
