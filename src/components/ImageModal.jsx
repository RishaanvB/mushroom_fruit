import React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Backdrop from "@mui/material/Backdrop"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#11100f",
  boxShadow: 24,
  minWidth: "60vw",
}

export default function ImageModal({
  open,
  handleClose,
  index,
  handleNext,
  handlePrevious,
  allImages,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <Box sx={style}>
          <h1
            onClick={handlePrevious}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              zIndex: 10000,
              color: "white",
            }}
          >
            Next
          </h1>
          <GatsbyImage
            image={getImage(allImages[index]?.node)}
            alt={"alt image"}
            objectPosition={"center center"}
            style={{ display: "grid", placeItems: "center" }}
            objectFit={"contain"}
          />
          <h1
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              color: "white",
            }}
          >
            Next
          </h1>
        </Box>
      </Fade>
    </Modal>
  )
}
