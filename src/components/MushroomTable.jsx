import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { styled as MUIStyled } from "@mui/material/styles"

/* cellHeader order is depending on data from graphql order, 
so if you change this, also change it in the graphql query to match it.
Or data won't be accurate for table */
const cellHeaders = [
  "Species",
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
const StyledTableRow = MUIStyled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))
const StyledTableHeader = MUIStyled(TableRow)(() => ({
  backgroundColor: "#f1e2cf",

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

export default function MushroomTable() {
  const data = useStaticQuery(graphql`
    {
      allTableDataCsv {
        edges {
          node {
            id
            Mushroom_species
            Common_name
            Immunity
            Fatigue
            Longevity
            Antiviral
            Antimicrobial
            Cancer
            Diabetes
            Microbiome
            Brain
            Skin
            SARS_CoV_2
            Total
          }
        }
      }
    }
  `)
  const dataArray = data.allTableDataCsv.edges

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ padding: "1rem", marginBottom: "4rem" }}
      >
        <Table
          sx={{ minWidth: 650, marginBottom: 0 }}
          size="small"
          aria-label="a dense health related mushroom info table"
        >
          <caption
            style={{
              padding: "0",
              margin: "2rem 0 0 0",
              fontSize: ".8rem",
              maxWidth: "560px",
            }}
          >
            Table with PubMed results - results found on 7 April 2021. Mushroom
            species was combined with the health related term in the regular
            search function.
          </caption>
          <TableHead>
            <StyledTableHeader>
              {cellHeaders.map(header => (
                <TableCell
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    borderBottom: "2px solid black",
                  }}
                  key={header}
                  align="right"
                >
                  {header}
                </TableCell>
              ))}
            </StyledTableHeader>
          </TableHead>
          <TableBody>
            {dataArray.map((row, index) => (
              <StyledTableRow key={row.node.Mushroom_species}>
                {/* Loops through all nodes and creates TableCell Component column with the value for the category  */}
                {Object.entries(row.node)
                  .filter(([key, value]) => key !== "id")
                  .map(([key, value]) => {
                    if (key === "Total") {
                      return (
                        <TableCell
                          sx={{
                            fontSize: "0.7rem",
                            backgroundColor: `hsl(188, ${
                              40 - 3 * index
                            }%, 36%)`,
                            fontWeight: "bold",
                            color: "#f1f1f1",
                          }}
                          key={key}
                          align="center"
                        >
                          {value}
                        </TableCell>
                      )
                    } else
                      return (
                        <TableCell
                          sx={{
                            fontSize: "0.7rem",
                          }}
                          key={key}
                          align="right"
                        >
                          {value}
                        </TableCell>
                      )
                  })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
