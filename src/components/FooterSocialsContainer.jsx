import React from "react"
import styled from "styled-components"

import { AiFillTwitterCircle } from "react-icons/ai"
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri"

const StyledLinkContainer = styled.div`
  align-self: flex-end;
  display: flex;
  column-gap: 0.7rem;
  @media screen and (max-width: 1024px) {
    align-self: center;
  }
`
const StyledSocials = styled.a`
  color: #3a3632;
  &:hover > * {
    color: #9b8e81 ;
    transition: color 0.1s ease-in;
  }
`

const FooterSocialsContainer = () => {
  return (
    <StyledLinkContainer>
      <StyledSocials
        style={{ display: "block" }}
        href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle size="2.5rem" />
      </StyledSocials>
      <StyledSocials
        style={{ display: "block" }}
        href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookCircleFill size="2.5rem" />
      </StyledSocials>
      <StyledSocials
        style={{ display: "block" }}
        href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramFill size="2.5rem" />
      </StyledSocials>
    </StyledLinkContainer>
  )
}

export default FooterSocialsContainer
