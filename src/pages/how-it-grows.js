import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container, UnderlineHeader } from "../styles/CustomStyles"

import HorizontalNonLinearStepper from "../components/howitgrows/HorizontalNonLinearStepper"
import InfoSection from "../components/howitgrows/InfoSection"
import background from "../images/banner-howitworks.png"

const StyledBackgroundFill = styled.div`
  background-color: #302c28;
  width: 100%;
  padding-top: 6rem;
`

const StyledBGSection = styled.section`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${background});
  background-position: bottom right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 5rem;
`
const SyledUnderlineHeader = styled(UnderlineHeader)`
  text-transform: uppercase;
  margin: 0;
`
const HowItGrows = () => {
  return (
    <Layout>
      <StyledBackgroundFill />
      <StyledBGSection>
        <Container>
          <SyledUnderlineHeader>How it grows</SyledUnderlineHeader>
        </Container>
      </StyledBGSection>
      <Container>
        <HorizontalNonLinearStepper />
      </Container>
    </Layout>
  )
}

export default HowItGrows
