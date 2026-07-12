import AboutElman from "../components/AboutElman"
import AboutHero from "../components/AboutUs/AboutHero"
import LearnMore from "../components/AboutUs/LearnMore"
import OurStory from "../components/AboutUs/OurStory"
import VisionMission from "../components/AboutUs/VisionMission"
import Footer from "../components/Footer"


function AboutUs() {
  return (
    <div>
        <AboutHero/>
        <AboutElman/>
        <VisionMission/>
        <OurStory/>
        <LearnMore/>
        <Footer/>
    </div>
  )
}

export default AboutUs