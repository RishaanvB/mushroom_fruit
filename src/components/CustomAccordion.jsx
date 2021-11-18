import React, { useState } from "react"
import { styled as muiStyled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import faqData from "../data/faqData"

const Accordion = muiStyled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: ".7rem",
  borderLeft: "4px solid #F3BC77",
  "&:before": {
    display: "none",
  },
}))

const AccordionSummary = muiStyled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = muiStyled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}))

export default function CustomAccordion() {
  const [expanded, setExpanded] = useState("")

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <div>
      {faqData.map((row, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}-header`}
          >
            <Typography>{row.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{paddingLeft:'2rem'}}>{row.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
