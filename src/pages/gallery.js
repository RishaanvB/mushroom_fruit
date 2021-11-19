import React from "react"
import Layout from "../components/layout"
import LayoutBackground from "../styles/LayoutBackground"
import { Container } from "../styles/CustomStyles"
import WovenImageGallery from "../components/WovenImageGallery"
import background from "../images/hero-bg-placeholder.webp"
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  margin-top: 6rem;
  margin-bottom: 6rem;
`

const Gallery = () => {
  return (
    <Layout pageTitle="Gallery">
      <LayoutBackground headerText="Gallery" background={background} />
      <StyledContainer>
        <WovenImageGallery />
      </StyledContainer>
    </Layout>
  )
}

export default Gallery
