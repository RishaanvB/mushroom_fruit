import React, { useContext } from "react"

import Layout from "../components/layout"
import HowItWorksSection from "../components/HowItWorksSection"
import HeroSection from "../components/HeroSection"
import ReishiBenefitsSection from "../components/ReishiBenefitsSection"
import GallerySection from "../components/GallerySection"
import { languageContext } from "../context/Provider"
const IndexPage = () => {
  const { isEnglish, changeLanguage } = useContext(languageContext)
  console.log(isEnglish, "theme context in index.js")
  return (
    <Layout pageTitle="Home">
      <HeroSection />
      <HowItWorksSection />
      <ReishiBenefitsSection />
      <GallerySection />
    </Layout>
  )
}
export default IndexPage
