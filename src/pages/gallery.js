import React, { useContext } from "react"

import Layout from "../components/layout"
import WovenImageGallery from "../components/WovenImageGallery"
import { languageContext } from "../context/Provider"

import LayoutBackground from "../styles/LayoutBackground"
import { Container } from "../styles/CustomStyles"
import styled from "styled-components"

import background from "../images/hero-bg-placeholder.webp"

const StyledContainer = styled(Container)`
  margin-top: 6rem;
  margin-bottom: 6rem;
`

const Gallery = () => {
  const { isEnglish } = useContext(languageContext)
  const headerText = isEnglish ? "Gallery" : "gallerij"
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
