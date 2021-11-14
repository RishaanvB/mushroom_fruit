import React from "react"
import styled from "styled-components"

import NavBar from "./NavBar"

import { Container } from "../styles/CustomStyles"

  const StyledHeader = styled.header`
    position: fixed;
    z-index:1000;
    top: 1rem;
    width: 100%;
    background-color: #101010a6;
  `
  const StyledContainer = styled(Container)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `
const MainHeader = () => {

  return (
    <StyledHeader>
      <StyledContainer>
        <NavBar />
      </StyledContainer>
    </StyledHeader>
  )
}

export default MainHeader
