import React from "react"
import styled from "styled-components"
import { Container } from "../styles/CustomStyles"
import FooterStyledCTABlock from "./FooterStyledCTABlock"
import FooterSitemapLinks from "./FooterSitemapLinks"
import FooterSocialsContainer from "./FooterSocialsContainer"

const StyledBackgroundFill = styled.section`
  background-color: #1b1917;
  width: 100%;
`
const StyledContainer = styled(Container)`
  /* height: 360px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  column-gap: 3rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    row-gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
`

const CopyrightContainer = styled(Container)`
  padding: 0.5rem 0;
  border-top: 1px solid #f3bb7716;
  color: #ffffff8d;
`
const Footer = () => {
  return (
    <StyledBackgroundFill>
      <StyledContainer as="footer">
        <FooterStyledCTABlock />
        <FooterSitemapLinks />
        <FooterSocialsContainer />
      </StyledContainer>
      <CopyrightContainer as="footer">
        <small style={{ paddingLeft: "1rem" }}>
          &copy; 2021 MushroomFruit. All rights reserved.{" "}
        </small>
      </CopyrightContainer>
    </StyledBackgroundFill>
  )
}

export default Footer
