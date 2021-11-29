import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LayoutBackground from "../styles/LayoutBackground"
import { Container, Button } from "../styles/CustomStyles"
import background from "../images/404background.jpg"
import styled from "styled-components"

const Block = styled.div`
  display: grid;
  place-items: center;
  max-width: 340px;
  margin: 4rem auto;
`

const NotFoundPage = () => (
  <Layout pageTitle="404 Not found">
    <Seo title="404: Not found" />
    <LayoutBackground
      background={background}
      headerText={"Oops! 404: Not Found!"}
    />
    <Container>
      <Block>
        <h2 style={{ fontSize: "1.5rem" }}>
          Sorry, we couldnt find the page you were looking for.
        </h2>
        <Button>
          <Link to="/">Go home</Link>
        </Button>
      </Block>
    </Container>
  </Layout>
)

export default NotFoundPage
