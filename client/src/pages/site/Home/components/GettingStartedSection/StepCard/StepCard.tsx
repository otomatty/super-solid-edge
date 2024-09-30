import {
  stepCard,
  stepNumber,
  stepTitle,
  stepDescription,
} from "./StepCard.css";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div class={stepCard}>
      <div class={stepNumber}>{number}</div>
      <h3 class={stepTitle}>{title}</h3>
      <p class={stepDescription}>{description}</p>
    </div>
  );
}
