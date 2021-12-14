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
      src="../../images/placeholder-1.png"
      alt=""
    />,
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      fit="cover"
      src="../../images/placeholder-2.png"
      alt="placeholder"
    />,
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      src="../../images/placeholder-3.png"
      alt=""
    />,
  ]
  const headers = ["Phase One", "Phase Two", "Phase Three"]
  const paragraphs = [
    "Text for para 1, dolor sit amet consectetur adipisicing elit. Temporibus maxime laborum magnam rem quas blanditiis aliquid harum debitis sequi ipsam, quo, nisi, exercitationem commodi accusamus rerum voluptatem voluptate earum minus non aut eveniet assumenda fuga corrupti? Dolorum totam nam sed reiciendis numquam explicabo repellendus ut optio vel eum laboriosam, nostrum aut quisquam rem similique animi inventore sapiente odit doloremque recusandae architecto sit. Odio ullam amet temporibus totam, sed exercitationem consequatur commodi? Quae vitae magni reprehenderit temporibus fugiat nihil deserunt. Temporibus porro enim totam quo explicabo culpa atque, rem placeat pariatur sequi suscipit autem, doloribus ut commodi molestias. Similique, amet vitae!",
    "Text for para 2, dolor sit amet consectetur adipisicing elit. Temporibus maxime laborum magnam rem quas blanditiis aliquid harum debitis sequi ipsam, quo, nisi, exercitationem commodi accusamus rerum voluptatem voluptate earum minus non aut eveniet assumenda fuga corrupti? Dolorum totam nam sed reiciendis numquam explicabo repellendus ut optio vel eum laboriosam, nostrum aut quisquam rem similique animi inventore sapiente odit doloremque recusandae architecto sit. Odio ullam amet temporibus totam, sed exercitationem consequatur commodi? Quae vitae magni reprehenderit temporibus fugiat nihil deserunt. Temporibus porro enim totam quo explicabo culpa atque, rem placeat pariatur sequi suscipit autem, doloribus ut commodi molestias. Similique, amet vitae!",
    "Text for para 3, dolor sit amet consectetur adipisicing elit. Temporibus maxime laborum magnam rem quas blanditiis aliquid harum debitis sequi ipsam, quo, nisi, exercitationem commodi accusamus rerum voluptatem voluptate earum minus non aut eveniet assumenda fuga corrupti? Dolorum totam nam sed reiciendis numquam explicabo repellendus ut optio vel eum laboriosam, nostrum aut quisquam rem similique animi inventore sapiente odit doloremque recusandae architecto sit. Odio ullam amet temporibus totam, sed exercitationem consequatur commodi? Quae vitae magni reprehenderit temporibus fugiat nihil deserunt. Temporibus porro enim totam quo explicabo culpa atque, rem placeat pariatur sequi suscipit autem, doloribus ut commodi molestias. Similique, amet vitae!",
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
