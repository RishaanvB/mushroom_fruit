import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(
  species,
  commonName,
  immunity,
  fatigue,
  longevity,
  antiviral,
  antimicrobial,
  cancer,
  diabetes,
  microbiome,
  brain,
  skin,
  sars,
  total
) {
  return {
    species,
    commonName,
    immunity,
    fatigue,
    longevity,
    antiviral,
    antimicrobial,
    cancer,
    diabetes,
    microbiome,
    brain,
    skin,
    sars,
    total,
  }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),

]
const cellHeaders = [
  "Mushroom species",
  "Common name",
  "Immunity",
  "Fatigue",
  "Longevity",
  "Antiviral",
  "Antimicrobial",
  "Cancer",
  "Diabetes",
  "Microbiome",
  "Brain",
  "Skin",
  "SARS-CoV-2",
  "Total",
]

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {cellHeaders.map(header => (
              <TableCell align="right">{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.species}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.species}
              </TableCell>
                
              <TableCell align="right">{row.immunity}</TableCell>
              <TableCell align="right">{row.fatigue}</TableCell>
              <TableCell align="right">{row.longevity}</TableCell>
              <TableCell align="right">{row.antiviral}</TableCell>
              <TableCell align="right">{row.antimicrobial}</TableCell>
              <TableCell align="right">{row.cancer}</TableCell>
              <TableCell align="right">{row.diabetes}</TableCell>
              <TableCell align="right">{row.microbiome}</TableCell>
              <TableCell align="right">{row.brain}</TableCell>
              <TableCell align="right">{row.skin}</TableCell>
              <TableCell align="right">{row.sars}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
