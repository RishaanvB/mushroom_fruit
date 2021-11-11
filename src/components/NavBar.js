import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
  const StyledNavigationBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const StyledLink = styled(GatsbyLink)`
    position: relative;
    margin-left: 1rem;
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
  return (
    <>
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
        <StyledLink activeClassName="active" to="/about">
          About me
        </StyledLink>
      </StyledNavigationBar>
    </>
  )
}

export default NavBar
