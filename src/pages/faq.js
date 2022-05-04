import React, { useContext } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import LayoutBackground from "../styles/LayoutBackground"
import CustomAccordion from "../components/CustomAccordion"
import { languageContext } from "../context/Provider"

import { Container, UnderlineHeader } from "../styles/CustomStyles"

import background from "../images/banner_faq.png"

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
  const { isEnglish } = useContext(languageContext)
  const headerText = "FAQ"
  return (
    <Layout pageTitle="FAQ">
      <LayoutBackground background={background} headerText={headerText} />
      <Container>
        <CustomUnderlineHeader>
          Frequently Asked Questions (FAQ)
        </CustomUnderlineHeader>
        <StyledSubheader>
          If you can’t find the answer to your question below, feel free to
          contact me.
        </StyledSubheader>
        <CustomStyledGridContainer>
          <CustomAccordion />
        </CustomStyledGridContainer>
      </Container>
    </Layout>
  )
}

export default Faq
