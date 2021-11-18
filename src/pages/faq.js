import React from "react"
import Layout from "../components/layout"
import LayoutBackground from "../styles/LayoutBackground"
import background from "../images/banner-howitworks.png"
import { Container, UnderlineHeader } from "../styles/CustomStyles"
import styled from "styled-components"

import CustomAccordion from "../components/CustomAccordion"
const CustomStyledGridContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 4rem;
`
const StyledSubheader = styled.p`
  font-weight: bold;
  margin-bottom: 4rem;
`
const CustomUnderlineHeader = styled(UnderlineHeader)`
  color: black;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 2rem;
`

const Faq = () => {
  const headerText = "Frequently Asked Questions"
  return (
    <Layout pageTitle="FAQ">
      <LayoutBackground background={background} headerText={headerText} />
      <Container>
        <CustomUnderlineHeader>Have any questions?</CustomUnderlineHeader>
        <StyledSubheader>
          Check below. If you can’t find what you’re looking for you please let
          me know.
        </StyledSubheader>
        <CustomStyledGridContainer>
          <CustomAccordion />
        </CustomStyledGridContainer>
      </Container>
    </Layout>
  )
}

export default Faq
