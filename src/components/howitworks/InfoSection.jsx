import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { Container } from "../../styles/CustomStyles"
import { useSpring, animated } from "react-spring"
import { languageContext } from "../../context/Provider"
const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-column-gap: 2.5rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 1024px) {
    display: flex;
    margin: 2rem auto;
    flex-direction: column;
  }
`

const StyledInfoSection = styled.section`
  display: grid;
  grid-template-columns: auto 2fr auto;
  grid-column-gap: 1.5rem;

  @media screen and (min-width: 1025px) {
    align-self: start;
  }
  @media screen and (max-width: 1024px) {
    max-width: 663px;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 80px;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }
`
const Line = styled.span`
  height: 1.8px;
  flex-grow: 1;
  background-color: #bababa;
`

const StyledHeader = styled.h1`
  position: relative;
  z-index: 8;
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  color: black;
  margin: 0;
`

const StyledLeftArrow = styled(BsArrowLeftCircle)`
  font-size: clamp(2rem, 2.5rem, 3rem);
  align-self: center;
  cursor: pointer;
  color: #f3bc77;
  transition: all 0.2s ease-in;
  &:hover {
    color: #96744c;
    transform: scale(1.1);
  }
  @media screen and (max-width: 568px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`
const StyledRightArrow = styled(BsArrowRightCircle)`
  font-size: clamp(2rem, 2.5rem, 3rem);
  align-self: center;
  cursor: pointer;
  color: #f3bc77;
  transition: all 0.2s ease-in;
  &:hover {
    color: #96744c;
    transform: scale(1.1);
  }
  @media screen and (max-width: 568px) {
    grid-row: 2 / 3;
    grid-column: -1 / -2;
    justify-self: end;
  }
`
const StyledTextContainer = styled.div`
  @media screen and (max-width: 568px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`

const InfoSection = ({ activeStep, handleBack, handleNext, direction }) => {
  useEffect(() => {
    setChange(!change)
  }, [])
  const [change, setChange] = useState(false)
  const { isEnglish } = useContext(languageContext)
  const imageData = [
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      src="../../images/step1.jpg"
      alt=""
    />,
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      fit="cover"
      src="../../images/step2.jpg"
      alt="placeholder"
    />,
    <StaticImage
      width={520}
      src="../../images/step3.jpg"
      alt=""
    />,
  ]
  const headers = ["Step One", "Step Two", "Step Three"]
  const paragraphs = [
    "Unpack the box and take the Reishi growkit parts. These consist of a plastic dome with three small plastic spacers attached, and a white plastic saucer. The sizing of the plastic dome and plastic spacers are specifically designed to create the perfect microclimate for the Reishi mushroom, with exactly the right air humidity and sufficient introduction of fresh air.",
    "Once the Reishi growbag has turned white all the way until the bottom, the Reishi mycelium has colonized the complete block of sawdust substrate. This is the right moment to place the Reishi growbag under the plastic dome. Soon little mushrooms will start to appear inside the growbag, which will continue to grow upwards. At some point they will reach the tie-wrap and squeeze themselves through the very narrow opening. The mushroom does not need assistance, so there is no need to open up the tie-wrap opening.",
    "After the mushroom has come out of the growbag, the mushroom will continue to grow in size. Take note of the white to rosy colored tissue, as this is the tissue that is still actively growing. Any yellow, orange or red tissue indicates “Reishi mushroom skin” that has stopped growing and that is hardening. The combination of all these colors results in an absolutely beautiful mushroom fruiting body. Feel free to harvest pieces of the fruiting body, even while the mushroom is still growing. The fruiting body will just continue to grow as if nothing happened!",
  ]
  const styles = useSpring({
    to: [{ opacity: 1, transform: "translate3d(0%,0,0) scale(1)" }],
    from: {
      opacity: 0,
      transform: `translate3d(${direction === 1 ? -30 : 30}%,0,0) scale(0.8)`,
    },
    reset: change,
  })

  return (
    <Container>
      <StyledContainer>
        {imageData[activeStep]}
        <StyledInfoSection>
          <StyledLeftArrow onClick={handleBack} />

          <StyledTextContainer>
            <HeaderContainer>
              <StyledHeader>{headers[activeStep]}</StyledHeader>
              <Line></Line>
            </HeaderContainer>
            <animated.p style={styles}>{paragraphs[activeStep]}</animated.p>
          </StyledTextContainer>
          <StyledRightArrow onClick={handleNext} />
        </StyledInfoSection>
      </StyledContainer>
    </Container>
  )
}

export default InfoSection
