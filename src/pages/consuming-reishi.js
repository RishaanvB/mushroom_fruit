import React, { useContext } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import LayoutBackground from "../styles/LayoutBackground"
import MushroomTable from "../components/MushroomTable"

import { languageContext } from "../context/Provider"

import { Container, UnderlineHeader } from "../styles/CustomStyles"

import background from "../images/consuming-reishi-bg-placeholder.png"

const StyledContainer = styled(Container)`
  max-width: 730px;
`
const StyledHeader = styled(UnderlineHeader)`
  color: black;
  margin-top: 3rem;
`
const StyledFirstP = styled.p`
  font-weight: 500;
  margin: 1rem auto;
  &::first-letter {
    font-size: 1.4rem;
    font-weight: 500;
  }
`
const StyledIntroTableParagraph = styled.p`
  font-style: italic;
  margin: 1rem auto;
`
const StyledTableSub = styled.small`
  display: block;
  margin: 1rem auto;
`
const StyledBottomP = styled.p`
  margin: 2rem 0 4rem 0;
`
const ConsumingReishi = () => {
  const { isEnglish } = useContext(languageContext)

  const headerText = isEnglish ? "consuming reishi" : "consumeren reishi"
  return (
    <Layout pageTitle="Consuming reishi">
      <LayoutBackground background={background} headerText={headerText} />
      <StyledContainer>
        <StyledHeader>How to consume</StyledHeader>

        <StyledFirstP>
          Consuming a Reishi mushroom is different from consuming just about any
          other mushroom. This is because of the very rigid texture of the
          Reishi fruiting body: In its dried state it is just as tough as a
          piece of wood. For this reason, people have found methods to extract
          the compounds of interest out of the Reishi mushroom.
        </StyledFirstP>

        <p style={{ margin: "1rem 0" }}>
          The most commonly used method is by boiling pieces of the Reishi
          mushroom in water. To get most of the compounds out of the mushroom,
          this process of boiling is done for a lengthy amount of time:
          typically at least one hour of boiling/simmering after which the
          mushroom pieces are removed from the water. What you end up with is a
          sort of mushroom tea, or more scientifically you can call it a water
          extract. This mushroom tea can be consumed directly as a hot tea
          beverage but can also be cooled down and stored in the fridge for
          later use. Combining the cold Reishi tea with fruit juice is my
          preferred choice, but I also sometimes add the Reishi tea to a wild
          mushroom soup. Once I have some Reishi extract stored in the fridge,
          you will also see me adding some tablespoons of Reishi extract to my
          daily cup o’ coffee.
        </p>

        <StaticImage
          src="../images/reishi-homepage.png"
          alt="grown reishi in bag sprouted outwards on warm-colored background"
          style={{ margin: "2rem auto" }}
        />
        <p style={{ margin: "1rem 0" }}>
          Officia culpa eos illum maiores maxime ullam eaque sint iure
          consequatur odio corporis ad. Deleniti iure ad eos necessitatibus
          itationem aliquam laudantium debitis veritatis hic dolor accusamus!
        </p>
        <p style={{ margin: "1rem 0" }}>
          Officia culpa eos illum maiores maxime ullam eaque sint iure
          consequatur odio corporis ad. Deleniti iure ad eos necessitatibus
          itationem aliquam laudantium debitis veritatis hic dolor accusamus!
        </p>

        <StyledIntroTableParagraph>
          On this page “Consuming Reishi”, I will also dive deeper into the
          health effects of Reishi, which will be accompanied with the following
          table:
        </StyledIntroTableParagraph>
      </StyledContainer>
      <Container>
        <MushroomTable />
      </Container>

      <StyledContainer>
        <StyledTableSub>
          Table with PubMed results – results found on 7 April 2021. Mushroom
          species was combined with the health related term in the regular
          search function.
        </StyledTableSub>
        <StyledBottomP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          accusamus vero voluptatum mollitia quas obcaecati. Impedit soluta,
          quibusdam totam suscipit iure, sequi fugiat veniam qui ipsam rem,
          tenetur eum quo quaerat. Maxime accusantium eum corporis? Magnam
          labore sit sapiente vitae molestiae, neque quas aut reprehenderit
          perspiciatis vero natus commodi ad. Ratione perferendis totam repellat
          eum reprehenderit iusto a? Quis officiis praesentium possimus
          cupiditate libero omnis, eius ratione expedita numquam soluta, nemo
          perferendis doloremque eos, recusandae voluptatem quos officia!
          Nostrum accusamus rem deserunt voluptates nihil ipsum! Dicta maiores a
          tempora doloribus nisi et aliquam quibusdam animi. Quis id magni
          tempora perferendis?
        </StyledBottomP>
      </StyledContainer>
    </Layout>
  )
}

export default ConsumingReishi
