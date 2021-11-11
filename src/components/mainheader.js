import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import NavBar from "./NavBar"

import StyledContainer from  '../styles/container'

const MainHeader = () => {
  const StyledHeader = styled.header`
    position: fixed;
    top: 1rem;
    width:100%;
    background-color: #101010a6;
    padding: 0 2rem;
  `



  return (
    <StyledHeader>
      <StyledContainer>
        <StaticImage src="../images/logo.svg" alt="mushroom fruit logo" />
       <NavBar />
      </StyledContainer>
    </StyledHeader>
  )
}

export default MainHeader
