import React from "react"
import styled from "styled-components"
import {
  GiMushroomGills,
  GiSuperMushroom,
  GiSpottedMushroom,
  GiTrunkMushroom,
} from "../../node_modules/react-icons/gi"

const BulletpointsContainer = () => {
  const StyledBulletpointsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    align-items: center;
    justify-content: space-between;
  `

  const BulletpointsSection = styled.section`
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 2;
    grid-column-gap: 10px;
  `
  const StyledHeader = styled.h1`
    color: white;
    font-size: 1.2rem;
    grid-column: 2;
    margin-bottom: 0;
  `
  const StyledSubtext = styled.p`
    color: white;
    font-size: 0.9rem;
    grid-column: 2;
  `

  return (
    <StyledBulletpointsContainer>
      <BulletpointsSection>
        <GiMushroomGills color="#CECBB2" size="2.5rem" />
        <StyledHeader>Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection>
        <GiSuperMushroom color="#e9e3c8" size="2.5rem" />
        <StyledHeader>Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection>
        <GiSpottedMushroom color="#e23719" size="2.5rem" />
        <StyledHeader>Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection>
        <GiTrunkMushroom color="#2799db" size="2.5rem" />
        <StyledHeader>Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
    </StyledBulletpointsContainer>
  )
}

export default BulletpointsContainer
