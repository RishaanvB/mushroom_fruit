import React from "react"
import styled from "styled-components"

import NavBar from "./NavBar"

import {Container} from "../styles/CustomStyles"

const MainHeader = () => {
  const StyledHeader = styled.header`
    position: fixed;
    top: 1rem;
    width: 100%;
    background-color: #101010a6;
  `
  const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  return (
    <StyledHeader>
      <StyledContainer>
        <NavBar />
      </StyledContainer>
    </StyledHeader>
  )
}

export default MainHeader
