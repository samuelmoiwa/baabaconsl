import AboutTeaser from "../components/home/AboutTeaser"
import FeaturedProjects from "../components/home/FeaturedProjects"
import HeroBanner from "../components/home/HeroBanne"
import ServicesOverview from "../components/home/ServicesOverview"
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
    </div>
  )
}

export default HomePage
