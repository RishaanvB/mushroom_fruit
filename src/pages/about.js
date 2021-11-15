import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout id="main">
      <header class="about-banner">
        <h1 class="onload">
          <i class="far fa-user-circle"></i>this is me
        </h1>
      </header>

      <div class="about-container">
        <div class="about-container__profile">
          <img
            src="../Assets/placeholder images/image2.jpg"
            alt="hugo de vries"
          />
        </div>
        <div class="about-container__biography">
          <h3>About me</h3>
          <p>
            Ever since I graduated at Wageningen University in 2014, I have been
            passionately growing all sorts of culinary and medicinal mushrooms.
            Soon I came across the Reishi mushroom and ever since that first
            encounter, I have focused my efforts on how to best grow and consume
            this mushroom species. For the past five years, this mushroom
            species has introduced me into the world of mushrooms and has
            strengthened my interest in the field of mycology. Because of all
            this, it is no wonder that I am delighted to share this wonderful
            mushroom with others by offering Reishi mushroom Growkits.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
