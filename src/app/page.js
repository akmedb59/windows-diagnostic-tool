import Footer from "../components/common/footer/footer";
import ChannelsSection from "../components/home/channelsSection";
import CustomerSection from "../components/home/customersSection";
import HeroSection from "../components/home/heroSection";
import LearnMoreSection from "../components/home/learnMoreSection";
import SpecificationsSection from "../components/home/specificationsSection";
import Navbar from "../components/common/navbar/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="w-full bg-themeBlue">
        <HeroSection />
      </div>
      <div>
        <SpecificationsSection />
        <LearnMoreSection />
        <ChannelsSection />
        <CustomerSection />
      </div>
      <Footer />
    </div>
  );
}
