
import WhyChooseUs from "../components/WhyChooseUs";
import PopularDestinations from "../components/PopularDestinations";
import HowItWorks from "../components/HowItWorks";
import { usePackages } from "../context/PackageContext";
import ExplorePackages from "../components/ExplorePackages";
import AboutSection from "../components/AboutSection";

function Home({ onInquiry }) {
  usePackages();
  return (
    <div>
      <AboutSection />

      <WhyChooseUs />

      <PopularDestinations />

      <HowItWorks />

      <ExplorePackages />
    </div>
  );
}

export default Home;