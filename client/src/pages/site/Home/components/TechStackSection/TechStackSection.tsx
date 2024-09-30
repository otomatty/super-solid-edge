import { TechList } from "./TechList/TechList";
import { techStackSection, title } from "./TechStackSection.css";

function TechStackSection() {
  return (
    <section class={techStackSection}>
      <h2 class={title}>最先端の技術スタック</h2>
      <TechList />
    </section>
  );
}

export default TechStackSection;
