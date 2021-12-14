import React, { useContext } from "react"
import styled from "styled-components"
import background from "../images/hero-bg-placeholder.webp"
import { Container, Button } from "../styles/CustomStyles"
import { useSpring, animated } from "react-spring"
import { myContext } from "../context/Provider"

const StyledBGSection = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1519305124423-5ccccff55da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
  background-color: #302c28;
  background-position: center right;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 1024px) {
    background-attachment: fixed;
  }
`

const StyledHeader = styled(animated.h1)`
  color: white;
  border-left: 6px solid #f3bc77;
  padding: 2rem 0rem 2rem 2rem;
  max-width: 650px;
  line-height: 3rem;
  font-size: 3rem;
`
const StyledSubHeader = styled(animated.p)`
  color: white;
  max-width: 560px;
  line-height: 2rem;
  margin-bottom: 5rem;
  font-size: 1.2rem;
  overflow: hidden;
`

const HeroSection = () => {
  const { isDark, setTheme } = useContext(myContext)

  const left2Right = useSpring({
    from: { transform: "translateX(-50px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
  })
  const top2Bottom = useSpring({
    from: { transform: "translateY(-150px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
  })

  return (
    <StyledBGSection>
      <Container>
        <StyledHeader style={left2Right}>
          {isDark === 'nl' ? 'nederlands' : 'Grow your own indoor mushroom!'}
          
        </StyledHeader>

        <section style={{ overflow: "hidden" }}>
          <StyledSubHeader style={top2Bottom}>
            Now is your chance! With the Reishi Growkit from Mushroomfruit,
            growing indoors has never been easier !
          </StyledSubHeader>
        </section>
        <Button>
          {" "}
          <a
            href="https://groenetakken.nl/product/reishi-kweekpakket-kopie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order here!
          </a>{" "}
        </Button>
      </Container>
    </StyledBGSection>
  )
}

export default HeroSection
