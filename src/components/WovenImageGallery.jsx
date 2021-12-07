import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"

export default function WovenImageList() {
  const imageData = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  console.log(imageData.allFile.edges[0].node.childImageSharp.gatsbyImageData)
  return (
    <>
      <ImageList sx={{ margin: "0 auto" }} variant="woven" cols={3} gap={10}>
        {/* {itemData.map(item => item)}
      
      */}
        {imageArray}
      </ImageList>
      <h1>image graphql</h1>

      <GatsbyImage
        image={imageData.allFile.edges[0].node.childImageSharp.gatsbyImageData}
        alt={"placeholder image"}
      />
    </>
  )
}

const imageArray = [
  <StaticImage
    src={"../images/gallery/gallery-placeholder-2.png"}
    alt={"placeholder image"}
    key="1"
  />,
  <StaticImage
    src={"../images/gallery/gallery-placeholder-3.png"}
    alt={"placeholder image"}
    key="2"
  />,
  <StaticImage
    src={"../images/gallery/gallery-placeholder-1.png"}
    alt={"placeholder image"}
    key="3"
  />,
]
