import React, { useState } from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepButton from "@mui/material/StepButton"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import styled from "styled-components"

import InfoSection from "./InfoSection"

const steps = ["Plant a seed", "Watch it grow", "Enjoy"]

const StyledBox = styled(Box)`
  width: 100%;
  margin: 2.5rem auto;
`

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)

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
    const newActiveStep = isLastStep() ? 0 : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    const newActiveStep = isFirstStep() ? 2 : activeStep - 1

    setActiveStep(newActiveStep)
  }

  const handleStep = step => () => {
    setActiveStep(step)
  }

  return (
    <>
      <StyledBox>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          <React.Fragment>
            <Button color="inherit" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>Next</Button>
          </React.Fragment>
        </div>
      </StyledBox>

      <InfoSection number={activeStep} />
    </>
  )
}
