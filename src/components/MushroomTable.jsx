import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import IconButton from "@mui/material/IconButton"
import FirstPageIcon from "@mui/icons-material/FirstPage"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import LastPageIcon from "@mui/icons-material/LastPage"
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

function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

export default function TestTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
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
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataArray.length) : 0
  return (
    <>
      <TableContainer component={Paper} sx={{ padding: "1rem" }}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense health related mushroom info table"
        >
          <caption
            style={{
              padding: "0",
              margin: "0",
              fontSize: ".8rem",
              maxWidth: "560px",
            }}
          >
            Table with PubMed results – results found on 7 April 2021. Mushroom
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
            {(rowsPerPage > 0
              ? dataArray.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : dataArray
            ).map((row, index) => (
              <StyledTableRow key={row.node.Mushroom_species}>
                {/* Loops through all nodes and creates TableCell Component column with the value for the category  */}
                {Object.entries(row.node)
                  .filter(([key, value]) => key !== "id")
                  .map(([key, value]) => (
                    <TableCell
                      sx={{ fontSize: "0.7rem" }}
                      key={key}
                      align="right"
                    >
                      {value}
                    </TableCell>
                  ))}
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 38 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <StyledTableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                // colSpan={4}
                count={dataArray.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </StyledTableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}
