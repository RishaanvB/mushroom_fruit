import React from "react"

import Layout from "../components/layout"
import HowItWorksSection from "../components/HowItWorksSection"
import HeroSection from "../components/HeroSection"
import ReishiBenefitsSection from "../components/ReishiBenefitsSection"
import GallerySection from "../components/GallerySection"

const IndexPage = () => {
  return (
    <Layout pageTitle="MushroomFruit | Home">
      <HeroSection />
      <HowItWorksSection />
      <ReishiBenefitsSection />
      <GallerySection />
    </Layout>
  )
}
export default IndexPage
