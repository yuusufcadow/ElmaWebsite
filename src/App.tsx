import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import FartuunAdanPage from "./pages/FartuunAdanPage"
import IlwadElmanPage from "./pages/IlwadElmanPage"
import SistersSomaliaPage from "./pages/SistersSomaliaPage"
import DropGunPage from "./pages/DropGunPage"
import FrontLinesActivities from "./pages/FrontLinesActivities"
import EqualVoices from "./pages/EqualVoices"
import ShePage from "./pages/ShePage"
import Volunter from "./pages/Volunter"
import Partnership from "./pages/Partnership"
import Press from "./pages/Press"
import Contacts from "./pages/Contacts"


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
         <Route path="/ilwad-elman" element={<IlwadElmanPage />} />
        <Route path="/fartuun-adan" element={<FartuunAdanPage />} />
        <Route path="/sisters-somalia" element={<SistersSomaliaPage />} />
        <Route path="/drop-gun" element={<DropGunPage />} />
        <Route path="/front-line-activities" element={<FrontLinesActivities />} />
        <Route path="/equal-voices" element={<EqualVoices />} />
        <Route path='/she-will' element={<ShePage />} />
        <Route path='/volunteer' element={<Volunter />} />
        <Route path='/partnership' element={<Partnership />} />
        <Route path='/press' element={<Press />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App