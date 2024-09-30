import { FeatureGrid } from "./FeatureGrid/FeatureGrid";
import { featuresSection, title, subtitle } from "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <section class={featuresSection}>
      <h2 class={title}>主要機能</h2>
      <p class={subtitle}>Super Solid Edgeが提供する強力な機能</p>
      <FeatureGrid />
    </section>
  );
}

export default FeaturesSection;
