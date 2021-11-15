import React from "react"
import { Container, UnderlineHeader, Button } from "../styles/CustomStyles"
import styled from "styled-components"

const StyledSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: auto;
  row-gap: 1rem;
`
const StyledUnderLineHeader = styled(UnderlineHeader)`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`
const Subheader = styled.p`
  font-size: 0.8rem;
  color: white;
`

const FooterStyledCTABlock = () => {
  return (
    <StyledSection>
      <StyledUnderLineHeader>grow your own reishi!</StyledUnderLineHeader>
      <Subheader>Visit my partner's shop and order your own reishi..</Subheader>
      <Button>Order here</Button>
    </StyledSection>
  )
}

export default FooterStyledCTABlock
