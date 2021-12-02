import React, { useEffect } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import AOS from "aos"
import "aos/dist/aos.css"
const ImageList = styled.div`
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 4rem;
  display: grid;
  justify-items: stretch;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

const imageBoxShadow = { boxShadow: "rgb(0 0 0 / 30%) 4px 6px 10px 5px" }

export default function ImageListIndexPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
    })
  }, [])
  return (
    <ImageList>
      <figure data-aos="zoom-in-up">
        <StaticImage
          style={imageBoxShadow}
          src="../images/gallery-placeholder-1.png"
          alt="title"
          aspectRatio={1 / 1}
        />
      </figure>
      <figure data-aos="zoom-in-up" data-aos-delay="150">
        <StaticImage
          style={imageBoxShadow}
          src="../images/gallery-placeholder-2.png"
          alt="title"
          aspectRatio={1 / 1}
        />
      </figure>
      <figure data-aos="zoom-in-up" data-aos-delay="300">
        <StaticImage
          style={imageBoxShadow}
          src="../images/gallery-placeholder-3.png"
          alt="title"
          aspectRatio={1 / 1}
        />
      </figure>
      <figure data-aos="zoom-in-up" data-aos-delay="450">
        <StaticImage
          style={imageBoxShadow}
          src="../images/gallery-placeholder-1.png"
          alt="title"
          aspectRatio={1 / 1}
        />
      </figure>
    </ImageList>
  )
}
