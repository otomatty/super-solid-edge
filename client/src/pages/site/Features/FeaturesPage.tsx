import { featuresPage } from "./FeaturesPage.css";
import Footer from "../../../components/site/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureOverview from "./components/FeatureOverview/FeatureOverview";
import FeatureList from "./components/FeatureList/FeatureList";
import UseCases from "./components/UseCases/UseCases";
import CallToAction from "./components/CallToAction/CallToAction";

function FeaturesPage() {
  return (
    <div class={featuresPage}>
      <main>
        <HeroSection />
        <FeatureOverview />
        <FeatureList />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default FeaturesPage;
