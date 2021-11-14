import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

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
  return (
    <ImageList>
      <StaticImage
        style={imageBoxShadow}
        src="../images/gallery-placeholder-1.png"
        alt="title"
        aspectRatio={1 / 1}
      />
      <StaticImage
        style={imageBoxShadow}
        src="../images/gallery-placeholder-2.png"
        alt="title"
        aspectRatio={1 / 1}
      />
      <StaticImage
        style={imageBoxShadow}
        src="../images/gallery-placeholder-3.png"
        alt="title"
        aspectRatio={1 / 1}
      />
      <StaticImage
        style={imageBoxShadow}
        src="../images/bg-gallery.jpg"
        alt="title"
        aspectRatio={1 / 1}
      />
    </ImageList>
  )
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
]
