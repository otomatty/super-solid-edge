import { featureCard, icon, title, description } from "./FeatureCard.css";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({
  title: featureTitle,
  description: featureDescription,
  icon: featureIcon,
}: FeatureCardProps) {
  return (
    <div class={featureCard}>
      <img
        src={`/images/feature-icons/${featureIcon}`}
        alt={featureTitle}
        class={icon}
      />
      <h3 class={title}>{featureTitle}</h3>
      <p class={description}>{featureDescription}</p>
    </div>
  );
}
