import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container, UnderlineHeader } from "../styles/CustomStyles"

import LayoutBackground from "../styles/LayoutBackground"
import HorizontalNonLinearStepper from "../components/howitgrows/HorizontalNonLinearStepper"
import background from "../images/banner-howitworks.png"

const HowItGrows = () => {
  const headerText = "how it grows"
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
