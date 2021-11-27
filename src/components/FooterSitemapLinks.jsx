import React from "react"
import styled from "styled-components"
import { GoChevronRight } from "react-icons/go"
import { Link } from "gatsby"

const StyledLinksContainer = styled.ul`
  width: clamp(100px, 300px, 100%);
  height: 100%;
  margin: 0;
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-items: start;
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

const FooterSitemapLinks = () => {
  return (
    <StyledLinksContainer>
      <StyledLink to="/">
        <GoChevronRight color="#F3BC77" size="1.2rem" />
        Home
      </StyledLink>
      <StyledLink to="/how-it-grows">
        <GoChevronRight color="#F3BC77" size="1.2rem" />
        How it grows
      </StyledLink>
      <StyledLink to="/consuming-reishi">
        <GoChevronRight color="#F3BC77" size="1.2rem" />
        Consuming reishi
      </StyledLink>
      <StyledLink to="/faq">
        <GoChevronRight color="#F3BC77" size="1.2rem" />
        Faq
      </StyledLink>
      <StyledLink to="/gallery">
        <GoChevronRight color="#F3BC77" size="1.2rem" />
        Gallery
      </StyledLink>
      <StyledLink to="/about">
        <GoChevronRight color="#F3BC77" size="1.2rem" />
        About me
      </StyledLink>
    </StyledLinksContainer>
  )
}

export default FooterSitemapLinks
