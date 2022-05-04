import React, { useContext } from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

import Avatar from "@mui/material/Avatar"

import Layout from "../components/layout"
import LayoutBackground from "../styles/LayoutBackground"
import { Container } from "../styles/CustomStyles"

import { HiOutlineMail } from "react-icons/hi"
import { languageContext } from "../context/Provider"

import background from "../images/banner_about.png"
import profilePic from "../images/hugo_aboutme.jpg"

const StyledHeader = styled.h1`
  position: relative;
  flex: 2 1 0;
  z-index: 8;
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  color: black;
  margin: 0;
`

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 4rem;
  margin-top: 4rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    row-gap: 3rem;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
`
const Divider = styled.span`
  height: 1.8px;
  flex: 1 1 0;
  background-color: #bababa;
  width: 100%;
`

const StyledAboutSection = styled.section`
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

const TextInfoIntro = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:first-letter {
    text-transform: uppercase;
  }
`

const StyledContactSmall = styled.small`
  margin: 0;
  padding: 0;
  font-style: italic;
  font-size: 0.8rem;
`

const StyledAvatarContainer = styled.address`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  column-gap: 1rem;
  margin-top: 1rem;
`
const About = () => {
  const { isEnglish } = useContext(languageContext)
  const headerText = "About me"
  return (
    <Layout pageTitle="About me">
      <LayoutBackground background={background} headerText={headerText} />
      <Container>
        <StyledContainer>
          <StaticImage
            width={520}
            aspectRatio={1 / 1}
            fit="cover"
            src="../images/hugo_aboutme.jpg"
            alt="Hugo standing in front of a tree pointing at a mushroom"
          />

          <StyledAboutSection>
            <HeaderContainer>
              <StyledHeader>Hugo de Vries</StyledHeader>
              <Divider />
            </HeaderContainer>
            <TextInfoIntro>
              Ever since I graduated at Wageningen University in 2014, I have
              been passionately growing all sorts of culinary and medicinal
              mushrooms. Soon I came across the Reishi mushroom and ever since
              that first encounter, I have focused my efforts on how to best
              grow and consume this mushroom species. For the past six years,
              this mushroom species has introduced me into the world of
              mushrooms and has strengthened my interest in the field of
              mycology.
            </TextInfoIntro>
            <div style={{ display: "flex", width: "30%" }}>
              <Divider />
            </div>
            <TextInfoIntro>
              {" "}
              Because of all this, it is no wonder that I am delighted to share
              this wonderful mushroom with others by offering Reishi mushroom
              Growkits.
            </TextInfoIntro>
            <div style={{ display: "flex", marginBottom: "1rem" }}>
              <Divider />
            </div>
            <StyledContactSmall>
              If you have any more questions, business inquiries, or just simply
              would like to know more about me and my future endeavors, please
              don't hesitate to contact me at the following address:
            </StyledContactSmall>
            <StyledAvatarContainer>
              <Avatar sx={{ bgcolor: "#F3BC77 " }}>
                <HiOutlineMail />
              </Avatar>
              <address style={{ margin: "0" }}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="mailto:info@mushroomfruit.com"
                >
                  info@mushroomfruit.com
                </a>{" "}
              </address>
            </StyledAvatarContainer>
          </StyledAboutSection>
        </StyledContainer>
      </Container>
    </Layout>
  )
}

export default About
