import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import BulletpointsContainer from "./BulletpointsContainer"

const StyledHowItWorksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  column-gap: 4rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
const HowItWorksContainer = () => {
  return (
    <StyledHowItWorksContainer>
      <StaticImage
        src="../images/reishi-homepage.png"
        alt="grown reishi in bag sprouted outwards on warm-colored background"
        aspectRatio={1 / 1}
        transformOptions={{fit:'cover'}}
      />
      <BulletpointsContainer />
    </StyledHowItWorksContainer>
  )
}

export default HowItWorksContainer
