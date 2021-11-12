import React from "react"
import styled from "styled-components"
import background from "../images/bg-gallery-photo.png"
import { Button as CustomButton, Container, UnderlineHeader } from "../styles/CustomStyles"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const GallerySection = () => {
  const StyledBGSection = styled.section`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(${background});
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const StyledHeader = styled(UnderlineHeader)`
    margin: auto;
    /* margin-top:4rem; */
  `

  return (<>


    <StyledBGSection>
      <Container>
        <StyledHeader>Gallery</StyledHeader>
      </Container>
    </StyledBGSection>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
  )
}

export default GallerySection
