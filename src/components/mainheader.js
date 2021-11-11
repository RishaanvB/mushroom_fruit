import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const MainHeader = () => {
  const StyledHeader = styled.header`
    position: fixed;
    width:100%;
    background-color: #10101085;
    padding: 0 2rem;
  `
  const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1320px;
  `
  const StyledNavigationBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const StyledLink = styled(GatsbyLink)`
    margin-left: 1rem;
  `
  return (
    <StyledHeader>
      <StyledContainer>
        <StaticImage src="../images/logo.svg" alt="mushroom fruit logo" />
        <StyledNavigationBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/how-it-grows">How it grows</StyledLink>
          <StyledLink to="/consuming-reishi">Consuming reishi</StyledLink>
          <StyledLink to="/faq">FAQ</StyledLink>
          <StyledLink to="/about">About me</StyledLink>
        </StyledNavigationBar>
      </StyledContainer>
    </StyledHeader>
  )
}

export default MainHeader
