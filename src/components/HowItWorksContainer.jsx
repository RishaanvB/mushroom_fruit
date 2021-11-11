import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import BulletpointsContainer from "./BulletpointsContainer"

const HowItWorksContainer = () => {
  const StyledHowItWorksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  return (
    <StyledHowItWorksContainer>
      <StaticImage
        src="../images/reishi-homepage.png"
        alt="grown reishi in bag sprouted outwards on warm background"
      />
      <BulletpointsContainer />
    </StyledHowItWorksContainer>
  )
}

export default HowItWorksContainer
