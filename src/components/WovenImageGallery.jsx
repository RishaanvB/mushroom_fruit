import React, { useEffect, useState } from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

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
          }
        }
      }
    }
  `)
  useEffect(() => {
    const largeWidth = window.matchMedia("(min-width: 1025px)")
    const mediumWidth = window.matchMedia("(min-width: 768px)")
    const smallWidth = window.matchMedia("(min-width: 0px)")

    const listener = () => {
      smallWidth.matches && setCols(1)
      mediumWidth.matches && setCols(2)
      largeWidth.matches && setCols(3)
    }
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [])
  const [cols, setCols] = useState()

  const images = data.allFile.edges.map(imageNode => (
    <ImageListItem key={imageNode.node.name}>
      <GatsbyImage
        image={getImage(imageNode.node)}
        alt={imageNode.node.name}
        key={imageNode.node.name}
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
    </>
  )
}
