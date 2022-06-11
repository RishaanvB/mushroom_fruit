import React from "react"

import Layout from "../components/layout"
import WovenImageGallery from "../components/WovenImageGallery"
 

import LayoutBackground from "../styles/LayoutBackground"
import { Container } from "../styles/CustomStyles"
import styled from "styled-components"

import background from "../images/banner_gallery.png"

const StyledContainer = styled(Container)`
  margin-top: 6rem;
  margin-bottom: 6rem;
`

const Gallery = () => {
   
  const headerText = "Gallery"
  return (
    <Layout pageTitle="Gallery">
      <LayoutBackground headerText={headerText} background={background} />
      <StyledContainer>
        <WovenImageGallery />
      </StyledContainer>
    </Layout>
  )
}

export default Gallery
