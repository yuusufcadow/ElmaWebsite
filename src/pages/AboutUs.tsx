
import AboutHero from "../components/AboutUs/AboutHero"
import AboutUSPage from "../components/AboutUs/AboutUSPage"
import LearnMore from "../components/AboutUs/LearnMore"
import OurStory from "../components/AboutUs/OurStory"
import VisionMission from "../components/AboutUs/VisionMission"
import Footer from "../components/Footer"


function AboutUs() {
  return (
    <div>
        <AboutHero/>
        <AboutUSPage/>
        <VisionMission/>
        <OurStory/>
        <LearnMore/>
        <Footer/>
    </div>
  )
}

export default AboutUs