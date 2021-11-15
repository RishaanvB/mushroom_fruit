import React from "react"
import styled from "styled-components"
import { GoChevronRight } from "react-icons/go"

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
const StyledLinks = styled.li`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`
const FooterSitemapLinks = () => {
  const sitemapLinks = [
    "Home",
    "How it grows",
    "Consuming reishi",
    "FAQ",
    "Gallery",
    "About me",
  ]
  return (
    <StyledLinksContainer>
      {sitemapLinks.map((link, index) => (
        <StyledLinks key={index}>
          <GoChevronRight color="#F3BC77" size="1.2rem" /> {link}
        </StyledLinks>
      ))}
    </StyledLinksContainer>
  )
}

export default FooterSitemapLinks
