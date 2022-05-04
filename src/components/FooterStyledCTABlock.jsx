import React from "react"
import { UnderlineHeader, Button } from "../styles/CustomStyles"
import styled from "styled-components"

const StyledSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: auto;
  row-gap: 1rem;
`

const SubHeader = styled.p`
  font-size: 0.8rem;
  color: white;
`
const StyledHeader = styled.p`
  line-height: 1.5em;
  font-size: 1.4rem;
  color: white;
`

const FooterStyledCTABlock = () => {
  return (
    <StyledSection>
      <StyledHeader>Want to grow a Reishi mushroom?</StyledHeader>
      <SubHeader>
        Visit my partner's webshop and order your own Reishi grow kit.
      </SubHeader>
      <Button>
        {" "}
        <a
          href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order here!
        </a>{" "}
      </Button>
    </StyledSection>
  )
}

export default FooterStyledCTABlock
