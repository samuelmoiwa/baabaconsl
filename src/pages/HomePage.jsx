import AboutTeaser from "../components/home/AboutTeaser"
import CallToAction from "../components/home/CallToAction"
import FeaturedProjects from "../components/home/FeaturedProjects"
import HeroBanner from "../components/home/HeroBanne"
import MissionValues from "../components/home/MissionValues"
import ServicesOverview from "../components/home/ServicesOverview"
import Testimonials from "../components/home/Testimonials"
import TrustBar from "../components/home/TrustBar"
import WhyChooseUs from "../components/home/WhyChooseUs"

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <TrustBar />
      <AboutTeaser />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <MissionValues />
      <CallToAction />
    </div>
  )
}

export default HomePage
