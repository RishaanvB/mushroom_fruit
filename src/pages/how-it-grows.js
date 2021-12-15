import React, { useContext } from "react"

import Layout from "../components/layout"
import HorizontalNonLinearStepper from "../components/howitgrows/HorizontalNonLinearStepper"
import { languageContext } from "../context/Provider"

import { Container } from "../styles/CustomStyles"
import LayoutBackground from "../styles/LayoutBackground"

import background from "../images/banner-howitworks.png"

const HowItGrows = () => {
  const { isEnglish } = useContext(languageContext)

  const headerText = isEnglish ? "how it grows" : "hoe het groeit"
  return (
    <Layout pageTitle="How it grows">
      <LayoutBackground background={background} headerText={headerText} />
      <Container>
        <HorizontalNonLinearStepper />
      </Container>
    </Layout>
  )
}

export default HowItGrows
