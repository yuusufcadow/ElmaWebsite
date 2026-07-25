import AboutElman from "../components/AboutElman"
import OurResilence from "../components/AboutUs/OurResilence"
import VisionMission from "../components/AboutUs/VisionMission"
import CaptureVideo from "../components/CaptureVideo"
import Charity from "../components/Charity"
import FeaturesProgram from "../components/FeaturesProgram"
import Footer from "../components/Footer"
import HeroPage from "../components/HeroPage"


function Home() {
  return (
    <div>
      <HeroPage />
      <AboutElman/>
      <OurResilence/>
      <VisionMission/>
      <CaptureVideo/>
      
        <FeaturesProgram/>
      <Charity/>
      <Footer/>
    </div>
  )
}

export default Home