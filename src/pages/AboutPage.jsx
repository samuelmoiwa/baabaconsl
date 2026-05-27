import AboutGallery from "../components/about/AboutGallery"
import AboutHero from "../components/about/AboutHero"
import CompanyOverview from "../components/about/CompanyOverview"
import CompanyStatistics from "../components/about/CompanyStatistics"
import CoreValues from "../components/about/CoreValues"
import KeyMilestones from "../components/about/KeyMilestones"
import MissionStatement from "../components/about/MissionStatement"
import OurStory from "../components/about/OurStory"
import OurTeam from "../components/about/OurTeam"


const AboutPage = () => {
  return (
    <>
        <AboutHero />
        <CompanyOverview />
        <OurStory />
        <KeyMilestones />
        <MissionStatement />
        <CoreValues />
        <OurTeam />
        <CompanyStatistics />
        <AboutGallery />
    </>
  )
}

export default AboutPage
