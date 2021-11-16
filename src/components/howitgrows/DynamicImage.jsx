import React from "react"
import { StaticQuery, graphql } from "gatsby"

const DynamicImage = () => (
  <StaticQuery
    query={graphql`
      {
        allFile {
          nodes {
            relativePath
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default DynamicImage
