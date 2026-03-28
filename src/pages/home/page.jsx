import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PurposeSection from './components/PurposeSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const HomePage = () => (
  <div className="w-full font-sans">
    <Navbar />
    <main>
      <HeroSection />
      <PurposeSection />
      <KeyFeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
);

export default HomePage;
