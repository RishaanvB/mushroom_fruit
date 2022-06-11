import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import LayoutBackground from "../styles/LayoutBackground"
import MushroomTable from "../components/MushroomTable"

 

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
   

  const headerText = "consuming reishi"
  return (
    <Layout pageTitle="Consuming reishi">
      <LayoutBackground background={background} headerText={headerText} />
      <StyledContainer>
        <StyledHeader>How to prepare</StyledHeader>

        <StyledFirstP>
          Consuming a Reishi mushroom is different from consuming culinary
          mushrooms. This is because of the very rigid structure of the Reishi
          fruiting body: When fresh, its structure mostly resembles leather or
          rubber, while in its dried state it is just as tough as a piece of
          wood. For this reason, people have found methods to extract the
          bio-active compounds of interest out of the Reishi mushroom.
        </StyledFirstP>

        <p style={{ margin: "1rem 0" }}>
          The easiest and most used method is by boiling small pieces of the
          Reishi mushroom in water. In my experience, one Reishi mushroom can be
          combined with one liter of boiling water. Reishi mushroom pieces may
          be fresh or dried and the smaller they are, the more surface area is
          created that gets into contact with the boiling water. To get most of
          the compounds out of the mushroom, this process of boiling is done for
          a lengthy amount of time: typically, at least one hour of
          boiling/simmering after which the mushroom pieces are removed from the
          water. What you end up with is a sort of mushroom tea, or more
          scientifically you can call it a water extract. This mushroom tea can
          be consumed directly as a hot tea beverage but can also be cooled down
          and stored in the fridge or freezer for later use. Combining the cold
          Reishi tea with fruit juice is my preferred choice, but I also
          sometimes add the Reishi tea to (mushroom-) soup. Once I have some
          Reishi extract stored in the fridge or freezer, you will definitely
          see me adding some tablespoons of Reishi extract to my daily cup o'
          coffee. The taste of Reishi tea is quite bitter, which most people do
          not appreciate in the culinary sense, but when added to hot coffee it
          introduces an interesting smokey taste.
        </p>

        <StaticImage
          src="../images/reishi-homepage.png"
          alt="grown reishi in bag sprouted outwards on warm-colored background"
          style={{ margin: "2rem auto" }}
        />
        <p style={{ margin: "1rem 0" }}>
          Reishi tea is generally consumed for its health benefits. For healthy
          individuals it helps with keeping disease at bay and for individuals
          that suffer from ailments or disease it can alleviate these. The
          mechanisms of action should be sought in Reishi's capacity to activate
          the immune system and its capacity to stimulate organ functions such
          as liver and kidney functions. The latter is thought to be related to
          Reishi's body toxin reducing effects. The large sugar molecules that
          Reishi tea contains (such as β -glucans and glycoproteins), can be
          considered to act as indigestible fibers, which may act as prebiotics
          that stimulate gut health. In general, individuals that consume Reishi
          tea may find that they suffer less from viral infections such as
          common colds, suffer less from fatigue, and recover faster after
          sports exercise. Even though Reishi tea is considered to be a medicine
          in Chinese Traditional Medicine and is used in Japan to counteract the
          detrimental actions of chemotherapy, Reishi tea cannot be seen as a
          medicine in the Western medicine world. It contains a myriad of
          bio-active components, that have widely different effects on the human
          body. These include effects on blood sugar levels, effects on the
          immune system, effects on gastro-intestinal health, effects on mental
          health and effects on more general topics like fatigue. Some
          individuals that suffer from sleep related problems, may find that
          consuming Reishi tea alleviates these problems. When suffering from
          any ailment or disease, Reishi tea cannot replace conventional
          treatments, and care should be taken when taking conventional
          medicines to prevent detrimental cross-effects from Reishi tea.
        </p>
        <p style={{ margin: "1rem 0" }}>
          In Traditional Chinese Medicine, Reishi is considered to be a
          “superior herb”, which in that context means that Reishi tea can be
          consumed in any amount without detrimental effects. A word of caution
          is needed here, as in my experience it is best to start consuming
          Reishi in low amounts (10-30ml) on first use, and gradually increase
          the daily consumption of Reishi tea to around 100 ml per day. Elderly
          persons, diabetes patients, organ recipients and individuals suffering
          from any serious disease should take extra caution when consuming
          Reishi tea.
        </p>

        <StyledIntroTableParagraph>
          During the past decades, a wealth of scientific studies has been
          dedicated to the studying of the effects of consuming mushrooms for
          health, or the studying of specific bio-active components isolated
          from mushrooms. The number of scientific articles published that
          describe the relationship between specific ailments/diseases and
          specific mushroom species, may act as a good indicator for those
          mushroom species’ capacity to alleviate these conditions. In the table
          below, an overview is provided for the most important mushroom species
          that are grown for human consumption or for their medicinal uses. The
          table contains an overview of the number of scientific articles that
          resulted from querying the mushroom species in combination with the
          health-related term that is depicted at the top of each table column.
          What stands out is that the Reishi mushroom is the most widely studied
          mushroom species in relation to Immunity, Longevity, Cancer, Diabetes,
          the Microbiome, the Brain, and the Skin. When looking at the total
          amount of scientific studies when combining all health-related terms
          that are present in the table, the Reishi mushroom has the highest
          amount of scientific literature dedicated to it (1283 articles on 7
          April 2021). What furthermore stands out, is that the Turkey Tail
          mushroom has the most scientific articles dedicated to it in relation
          to antiviral properties and that the Caterpillar fungus has most
          scientific articles in relation to fatigue and antimicrobial
          properties. For the mycologists amongst us, these outcomes will not
          come as a surprise.
        </StyledIntroTableParagraph>
      </StyledContainer>
      <Container>
        <MushroomTable />
      </Container>

      <StyledContainer>
        <StyledTableSub>
          Table with PubMed results – results found on 7 April 2021. Mushroom
          species was combined with the health-related term in the regular
          search function.
        </StyledTableSub>
        <StyledBottomP>
          What furthermore deserves attention, is that apart from use in human
          health, Reishi extracts have recently attracted attention for use in
          pet health, and for use in bee colony health. As for the latter, in a
          recent study by Paul Stamets and coworkers (Stamets et al., 2018),
          Reishi extracts were found to act as strong antiviral agents and were
          found to lower viral levels in bee colonies by several hundred folds
          to thousand folds for a number of viral infections. Because of these
          promising outcomes, and because honeybee colonies worldwide suffer
          from collapse often caused by viral infections, I would like to invite
          beekeepers to start growing Reishi mushrooms in their homes using the
          grow kit that I offer, after which they can administer Reishi tea to
          their bee colonies.
        </StyledBottomP>
      </StyledContainer>
    </Layout>
  )
}

export default ConsumingReishi
