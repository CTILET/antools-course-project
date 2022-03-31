import "./styles.css"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import ToolsSection from "./components/tools-section/tools-section"
import BrandSection from "./components/brands/brand-section"
import Footer from "./components/footer/footer"
import Contributor from "./components/contributor/contributor"
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ToolsSection />
      <BrandSection />
      <Contributor />

      <Footer />
    </>
  )
}
