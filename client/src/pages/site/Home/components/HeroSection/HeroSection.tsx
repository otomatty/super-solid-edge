import { Title } from "./Title/Title";
import { Description } from "./Description/Description";
import { CallToAction } from "./CallToAction/CallToAction";
import { heroSection, content } from "./HeroSection.css";

function HeroSection() {
  return (
    <section class={heroSection}>
      <div class={content}>
        <Title />
        <Description />
        <CallToAction />
      </div>
    </section>
  );
}

export default HeroSection;
