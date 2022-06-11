import React from "react"
import styled from "styled-components"
import { GoChevronRight } from "react-icons/go"
import { Link } from "gatsby"

const StyledLinksContainer = styled.ul`
  height: 100%;
  margin: 0;
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 0.5rem;
`
const StyledLink = styled(Link)`
  position: relative;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: #d3d3d3;
  }
`

const ListItem = styled.li`
list-style-type: none;
`
const FooterSitemapLinks = () => {
  return (
    <StyledLinksContainer>
      <ListItem>
        <StyledLink to="/">
          <GoChevronRight color="#F3BC77" size="1.2rem" />
          Home
        </StyledLink>
      </ListItem>

      <ListItem>
        <StyledLink to="/how-it-works">
          <GoChevronRight color="#F3BC77" size="1.2rem" />
          How it works
        </StyledLink>
      </ListItem>
      <ListItem>

        <StyledLink to="/consuming-reishi">
          <GoChevronRight color="#F3BC77" size="1.2rem" />
          Consuming reishi
        </StyledLink>
      </ListItem>
     
      <ListItem>
        <StyledLink to="/faq">
          <GoChevronRight color="#F3BC77" size="1.2rem" />
          Faq
        </StyledLink>
      </ListItem>
     
      <ListItem>
        <StyledLink to="/gallery">
          <GoChevronRight color="#F3BC77" size="1.2rem" />
          Gallery
        </StyledLink>
      </ListItem>
     
      <ListItem>
        <StyledLink to="/about">
          <GoChevronRight color="#F3BC77" size="1.2rem" />
          About me
        </StyledLink>
      </ListItem>
    </StyledLinksContainer>
  )
}

export default FooterSitemapLinks
