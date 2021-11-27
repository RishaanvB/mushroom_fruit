import React from "react"
import styled from "styled-components"

import { AiFillTwitterCircle } from "react-icons/ai"
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri"

const StyledLinkContainer = styled.div`
  align-self: flex-end;
  display: flex;
  column-gap: 0.7rem;
  @media screen and (max-width: 1024px) {
    align-self: flex-start;
  }
`


const FooterSocialsContainer = () => {
  return (
    <StyledLinkContainer>
      <a 
        style={{ display: "block" }}
        href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle size="2.5rem" color="#3A3632" />
      </a>
      <a
        style={{ display: "block" }}
        href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookCircleFill size="2.5rem" color="#3A3632" />
      </a>
      <a
        style={{ display: "block" }}
        href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramFill size="2.5rem" color="#3A3632" />
      </a>
    </StyledLinkContainer>
  )
}

export default FooterSocialsContainer
