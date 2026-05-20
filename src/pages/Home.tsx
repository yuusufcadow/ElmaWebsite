import AboutElman from "../components/AboutElman"
import CaptureVideo from "../components/CaptureVideo"
import Charity from "../components/Charity"
import FeaturesProgram from "../components/FeaturesProgram"
import Footer from "../components/Footer"
import HeroPage from "../components/HeroPage"
import Redical from "../components/Redical"


function Home() {
  return (
    <div>
      <HeroPage />
      <AboutElman/>
      <CaptureVideo/>
      <FeaturesProgram/>
      <Redical />
      <Charity/>
      <Footer/>
    </div>
  )
}

export default Home