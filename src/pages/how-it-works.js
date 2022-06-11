import React from "react"

import Layout from "../components/layout"
import HorizontalNonLinearStepper from "../components/howitworks/HorizontalNonLinearStepper"
 

import { Container } from "../styles/CustomStyles"
import LayoutBackground from "../styles/LayoutBackground"

import background from "../images/banner-howitworks.png"

const HowItWorks = () => {
   

  const headerText = "how it works"
  return (
    <Layout pageTitle="How it works">
      <LayoutBackground background={background} headerText={headerText} />
      <Container>
        <HorizontalNonLinearStepper />
      </Container>
    </Layout>
  )
}

export default HowItWorks
