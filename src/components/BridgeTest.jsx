import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const BridgeTest = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "bg-gallery.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)
  console.log(pluginImage)
  return (
    <BgImage image={pluginImage} style={{ minWidth: 600, minHeight: 600 }}>
      <div>Hello from BgImage!</div>
    </BgImage>
  )
}

export default BridgeTest
