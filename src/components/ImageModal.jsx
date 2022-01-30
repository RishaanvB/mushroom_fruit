import React, { useState} from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Backdrop from "@mui/material/Backdrop"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  //   maxHeight: "100%",
  //   maxWidth: "100%",
  boxShadow: 24,
}

export default function ImageModal(props) {
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
  const [currentImageIndex, setCurrentImageIndex] = useState()

  console.log(props.relativePath, "relative path in imagemodal")
  const imageFoundIndex = data.allFile.edges.findIndex(
    img => img.node.relativePath === props.relativePath
    )
    // setCurrentImageIndex(imageFoundIndex)
    console.log(imageFoundIndex, "imagefound")
    const currentImg = data.allFile.edges[currentImageIndex]
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <GatsbyImage
            image={getImage(currentImg?.node)}
            alt={"alt image"}
            //   style={{position:'relative'}}
          />
          <h1
            onClick={() => console.log("hallo")}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            Hallo
          </h1>
        </Box>
      </Fade>
    </Modal>
  )
}
