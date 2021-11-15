import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import background from "../images/bg-gallery-photo.webp"
import { Button, Container, UnderlineHeader } from "../styles/CustomStyles"
import ImageListIndexPage from "./ImageListIndexPage"

const StyledBGSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${background});
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeader = styled(UnderlineHeader)`
  margin: auto;
  /* margin-top:4rem; */
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
  const bg = "../images/bg-gallery-photo.jpg"
  return (
    <>
      <StyledBGSection>
        {/* <StaticImage
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "0",
          }}
          src={bg}
          alt="photo camera background"
        /> */}
        <StyledContainer>
          <StyledHeader>Gallery</StyledHeader>
          <ImageListIndexPage />
          <Button>view gallery</Button>
        </StyledContainer>
      </StyledBGSection>
    </>
  )
}

export default GallerySection
