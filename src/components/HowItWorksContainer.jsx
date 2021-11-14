import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import BulletpointsContainer from "./BulletpointsContainer"

  const StyledHowItWorksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    column-gap:4rem;
  `
const HowItWorksContainer = () => {
  return (
    <StyledHowItWorksContainer>
      <StaticImage
        src="../images/reishi-homepage.png"
        alt="grown reishi in bag sprouted outwards on warm-colored background"
      />
      <BulletpointsContainer />
    </StyledHowItWorksContainer>
  )
}

export default HowItWorksContainer
