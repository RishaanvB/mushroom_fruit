import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { RiMenu3Line } from "react-icons/ri"

const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  column-gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`
const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    height: 100vh;
  }
`
const StyledLink = styled(GatsbyLink)`
  position: relative;
  text-decoration: none;
  color: #dad9d8;

  &.active::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 70%;
    height: 5px;
    background: #f3bc77;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 0%;
    height: 5px;
    background: #f3bc77;
    transition: width 0.3s;
  }

  &:hover::before {
    width: 70%;
  }
`
const StyledMenu = styled(RiMenu3Line)`
  margin-left: auto;
  align-self: center;
  font-size: 2rem;
  @media screen and (min-width: 770px) {
    display: none;
  }
`
const NavBar = () => {
  return (
    <StyledNavContainer>
      <StaticImage src="../images/logo.svg" alt="mushroom fruit logo" />
      <StyledNavigationBar>
        <StyledLink activeClassName="active" to="/">
          Home
        </StyledLink>
        <StyledLink activeClassName="active" to="/how-it-grows">
          How it grows
        </StyledLink>
        <StyledLink activeClassName="active" to="/consuming-reishi">
          Consuming reishi
        </StyledLink>
        <StyledLink activeClassName="active" to="/faq">
          FAQ
        </StyledLink>
        <StyledLink activeClassName="active" to="/gallery">
          Gallery
        </StyledLink>
        <StyledLink activeClassName="active" to="/about">
          About me
        </StyledLink>
      </StyledNavigationBar>
      <StyledMenu className={"hamburgerIcon"} color="white" />
    </StyledNavContainer>
  )
}

export default NavBar
