import React, { useContext } from "react"

import Layout from "../components/layout"
import HorizontalNonLinearStepper from "../components/howitworks/HorizontalNonLinearStepper"
import { languageContext } from "../context/Provider"

import { Container } from "../styles/CustomStyles"
import LayoutBackground from "../styles/LayoutBackground"

import background from "../images/banner-howitworks.png"

const HowItWorks = () => {
  const { isEnglish } = useContext(languageContext)

  const headerText = isEnglish ? "how it works" : "hoe het werkt"
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
