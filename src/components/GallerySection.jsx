import React from "react"
import styled from "styled-components"
import background from "../images/bg-gallery-photo.webp"
import { Button, Container, UnderlineHeader } from "../styles/CustomStyles"
import ImageListIndexPage from "./ImageListIndexPage"
import { Link } from "gatsby"

const StyledBGSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  /* background-image: url(${background}); */
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeader = styled(UnderlineHeader)`
  margin: auto;
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 6rem;
`
const GallerySection = () => {
  return (
    <>
      <StyledBGSection>
        <StyledContainer>
          <StyledHeader color='#1B1917'>Gallery</StyledHeader>
          <ImageListIndexPage />
          <Button>
            <Link to={"/gallery"}>View gallery</Link>{" "}
          </Button>
        </StyledContainer>
      </StyledBGSection>
    </>
  )
}

export default GallerySection
