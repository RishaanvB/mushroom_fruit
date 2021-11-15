import React from "react"
import styled from "styled-components"

import { AiFillTwitterCircle } from "react-icons/ai"
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri"

const StyledLinkContainer = styled.div`
  align-self: flex-end;
  display: flex;
  column-gap: 1rem;
`
const FooterSocialsContainer = () => {
  return (
    <StyledLinkContainer>
      <a style={{ display: "block" }} href="" rel="noopener">
        <AiFillTwitterCircle size="2.5rem" color="#3A3632" />
      </a>
      <a style={{ display: "block" }} href="" rel="noopener">
        <RiFacebookCircleFill size="2.5rem" color="#3A3632" />
      </a>
      <a style={{ display: "block" }} href="" rel="noopener">
        <RiInstagramFill size="2.5rem" color="#3A3632" />
      </a>
    </StyledLinkContainer>
  )
}

export default FooterSocialsContainer
