import React, { useEffect, useState } from "react"
import styled from "styled-components"

import NavBar from "./NavBar"

import { Container } from "../styles/CustomStyles"

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  top: ${props => (props.status ? "0rem" : "1rem")};
  width: 100%;
  background-color: ${props => (props.status ? "#1B1917" : "#101010a6")};
  transition: all 0.6s ease-out;
`
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1.5rem;
`
const MainHeader = () => {
  useEffect(() => {
    scrolled()
    return function cleanUp() {
      window.removeEventListener("scroll", handleCollapseNav)
    }
  })
  const [status, collapse] = useState(false)

  const handleCollapseNav = () =>
    window.scrollY > 300 ? collapse(true) : collapse(false)
  const scrolled = () => window.addEventListener("scroll", handleCollapseNav)

  return (
    <StyledHeader status={status}>
      <StyledContainer>
        <NavBar />
      </StyledContainer>
    </StyledHeader>
  )
}

export default MainHeader
