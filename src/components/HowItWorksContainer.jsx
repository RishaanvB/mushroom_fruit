import React, { useEffect } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import BulletpointsContainer from "./BulletpointsContainer"
import { Button } from "../styles/CustomStyles"
import { Link } from "gatsby"
const StyledHowItWorksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  column-gap: 4rem;
  margin: 4rem 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
const HowItWorksContainer = () => {

  return (
    <>
      <StyledHowItWorksContainer>
        <StaticImage
          data-aos="fade-up"
          src="../images/reishi-homepage.png"
          alt="grown reishi in bag sprouted outwards on warm-colored background"
          transformOptions={{ fit: "cover" }}
        />
        <BulletpointsContainer />
      </StyledHowItWorksContainer>
      <Button>
        <Link to="/how-it-grows">13:Show more</Link>{" "}
      </Button>
    </>
  )
}

export default HowItWorksContainer
