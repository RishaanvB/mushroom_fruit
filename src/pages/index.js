import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import StyledBackgroundSection from "../components/BackgroundSection"
import HeroSection from "../components/HeroSection"

const IndexPage = () => {
  

  return (
    <Layout pageTitle="MushroomFruit | Home">
      
      <HeroSection />
      <div>
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
      </div>
    </Layout>
  )
}
export default IndexPage
