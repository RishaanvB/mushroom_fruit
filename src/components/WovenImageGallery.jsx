import React, { useEffect, useState } from "react"

import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import ImageModal from "./ImageModal"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// import Box from "@mui/material/Box"
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
// import Modal from "@mui/material/Modal"

/* const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
} */

export default function WovenImageList() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
            name
            relativePath
          }
        }
      }
    }
  `)
  useEffect(() => {
    const smallWidth = window.matchMedia("(min-width: 0px)")
    const mediumWidth = window.matchMedia("(min-width: 768px)")
    const largeWidth = window.matchMedia("(min-width: 1025px)")
    smallWidth.matches && setCols(1)
    mediumWidth.matches && setCols(2)
    largeWidth.matches && setCols(3)

    const listener = () => {
      smallWidth.matches && setCols(1)
      mediumWidth.matches && setCols(2)
      largeWidth.matches && setCols(3)
    }
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [])

  const [cols, setCols] = useState()
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState()

  const allImages = data.allFile.edges

  const handleOpen = newIndex => {
    setOpen(true)
    setIndex(newIndex)
  }

  const handleClose = () => setOpen(false)
  const handleNext = () => setIndex(index + 1)
  const handlePrevious = () => setIndex(index - 1)

  const images = data.allFile.edges.map((imageNode, newIndex) => (
    <ImageListItem key={imageNode.node.name}>
      <GatsbyImage
        image={getImage(imageNode.node)}
        alt={imageNode.node.name}
        key={imageNode.node.name}
        onClick={() => handleOpen(newIndex)}
      />
      <ImageListItemBar position="below" title={imageNode.node.name} />
    </ImageListItem>
  ))

  return (
    <>
      <ImageList
        sx={{ margin: "0 auto" }}
        variant="masonry"
        cols={cols}
        gap={8}
      >
        {images}
      </ImageList>

      <ImageModal
        open={open}
        handleClose={handleClose}
        index={index}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        allImages={allImages}
      />
    </>
  )
}
