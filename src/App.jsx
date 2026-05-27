import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import ProjectPage from "./pages/ProjectPage"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
