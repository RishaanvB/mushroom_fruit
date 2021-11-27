import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import styled from "styled-components"
import { MdOutlineClose } from "react-icons/md"

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
    display: none;
  }
`
const StyledNavigationBarMobile = styled.nav`
  padding-left: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 2rem;
`

const StyledLink = styled(GatsbyLink)`
  position: relative;
  text-decoration: none;
  color: #dad9d8;

  @media screen and (max-width: 769px) {
    width: 100%;

    color: #181818;
  }
  @media screen and (min-width: 770px) {
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
const CloseMenuIcon = styled(MdOutlineClose)`
  display: block;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 1rem;
`
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = state => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setIsOpen(state)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <StyledNavigationBarMobile>
        <CloseMenuIcon size={"2rem"} onClick={toggleDrawer(false)} />
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
      </StyledNavigationBarMobile>
    </Box>
  )
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
      <StyledMenu color={"white"} onClick={toggleDrawer(true)} />
      <Drawer open={isOpen} onClose={toggleDrawer(false)} anchor={"right"}>
        {list()}
      </Drawer>
    </StyledNavContainer>
  )
}

export default NavBar
