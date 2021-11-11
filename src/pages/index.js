import React from "react"

import Layout from "../components/layout"
import HowItWorksSection from "../components/HowItWorksSection"
import HeroSection from "../components/HeroSection"

const IndexPage = () => {
  return (
    <Layout pageTitle="MushroomFruit | Home">
      <HeroSection />
      <HowItWorksSection />
    </Layout>
  )
}
export default IndexPage
