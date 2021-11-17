import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

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

export default function TestTable() {
  const runCallback = cb => {
    return cb()
  }
  const data = useStaticQuery(graphql`
    {
      allTableDataCsv {
        edges {
          node {
            id
            Common_name
            Mushroom_species
            Total
          }
        }
      }
    }
  `)
  const dataArray = data.allTableDataCsv.edges
  return (
    <>
      {console.log(dataArray)}
      {dataArray.map(node => console.log(node.node))}
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
            {dataArray.map((row, index) => (
              <TableRow
                key={row.node.Mushroom_species}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.node.Mushroom_species}
                </TableCell>
                {Object.values(row.node).map(node => console.log(node, "hey"))}

                <TableCell align="right">{row.node.Total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
