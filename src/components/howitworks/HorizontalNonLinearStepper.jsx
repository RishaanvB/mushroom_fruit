import React, { useState } from "react"
import InfoSection from "./InfoSection"
import styled from "styled-components"
import { styled as muiStyled } from "@mui/material/styles"

import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector"

import { RiPlantLine } from "react-icons/ri"
import { GiMushroomGills, GiPlantWatering } from "react-icons/gi"

// display text for labels
const steps = ["1:Plant a seed", "2:Watch it grow", "3:Enjoy!"]

// styled components
const StyledBox = styled(Box)`
  width: 100%;
  margin: 2.5rem auto;
  @media screen and (max-width: 1024px) {
    order: 1;
  }
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledStepLabel = styled(StepLabel)`
  cursor: pointer;
`

// styled connector
const ColorlibConnector = muiStyled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#e7c59a52",
    borderRadius: 1,
  },
}))
// styled icon
const ColorlibStepIconRoot = muiStyled("div")(({ ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#25211c",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}))

// Create dynamic stepicon components
function ColorlibStepIcon(props) {
  const { active, className } = props

  const icons = {
    1: <RiPlantLine size="1.5rem" />,
    2: <GiPlantWatering size="1.5rem" />,
    3: <GiMushroomGills size="1.5rem" />,
  }

  return (
    <ColorlibStepIconRoot ownerState={{ active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const totalSteps = () => {
    return steps.length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }
  const isFirstStep = () => {
    return activeStep === 0
  }

  const handleNext = () => {
    if (isLastStep()) return
    const newActiveStep = activeStep + 1
    setActiveStep(newActiveStep)
    setDirection(1)
  }

  const handleBack = () => {
    if (isFirstStep()) return
    const newActiveStep = activeStep - 1
    setActiveStep(newActiveStep)
    setDirection(-1)
  }


  const handleStep = step => () => {
    setActiveStep(step)
  }

  return (
    <StyledContainer>
      <StyledBox>
        <Stepper
          nonLinear
          activeStep={activeStep}
          alternativeLabel
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StyledStepLabel
                StepIconComponent={ColorlibStepIcon}
                onClick={handleStep(index)}
              >
                {label}
              </StyledStepLabel>
            </Step>
          ))}
        </Stepper>
      </StyledBox>

      <InfoSection
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        direction={direction}
        isFirstStep={ isFirstStep}
        isLastStep={ isLastStep}
      />
    </StyledContainer>
  )
}
