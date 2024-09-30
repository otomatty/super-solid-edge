import HeroSection from './components/HeroSection/HeroSection';
import TechStackSection from './components/TechStackSection/TechStackSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import CrossPlatformSection from './components/CrossPlatformSection/CrossPlatformSection';
import GettingStartedSection from './components/GettingStartedSection/GettingStartedSection';
import Footer from '../../../components/site/Footer/Footer';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TechStackSection />
      <FeaturesSection />
      <CrossPlatformSection />
      <GettingStartedSection />
      <Footer />
    </div>
  );
}

export default HomePage;
