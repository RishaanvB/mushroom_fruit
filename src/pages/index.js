import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import StyledBackgroundSection from "../components/BackgroundSection"
import background from "../images/hero-bg-placeholder.jpg"

const IndexPage = () => {
  const StyledHeroSection = styled.section`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(${background});
    background-position: center right;
    display: flex;
    align-items: center;
  `

  return (
    <Layout pageTitle="MushroomFruit | Home">
      <StyledHeroSection>
        <div>
          <h1>Grow your own mushroom!</h1>
          <p>
            Now is your chance! With the Reishi Growkit from Mushroomfruit,
            growing indoors has never been easier !
          </p>
          <button>Order here!</button>
        </div>
      </StyledHeroSection>
      <h1>outside background</h1>

      <StyledHeroSection>
        <h1>How it works</h1>
        <div>
          <StaticImage src="../images/reishi-homepage.png" alt="reishi" />
          <div>
            <section>
              <StaticImage src="../images/logo.svg" alt="reishi" />
              <h1>Lorem ipsum dolor sit amet</h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                consectetur ut labore. Dolore, quasi ut.
              </h2>
            </section>
          </div>
        </div>
      </StyledHeroSection>
    </Layout>
  )
}
export default IndexPage
