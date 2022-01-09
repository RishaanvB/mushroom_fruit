import React, { useContext } from "react"
import styled from "styled-components"

import { languageContext } from "../context/Provider"

const Container = styled.span`
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const MobileContainer = styled(Container)`
  display: none;
  right: 4rem;
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Button = styled.button`
  border: none;
  background: none;
  color: ${props => (props.highlighted ? "#e0e0e0" : "grey")};
  font-size: 0.8rem;
  cursor: pointer;
`
export default function LanguageSwitchBtns() {
  const { isEnglish, changeLanguage } = useContext(languageContext)

  return (
    <>
      <Container>
        <Button
          highlighted={!isEnglish}
          onClick={() => isEnglish && changeLanguage()}
        >
          NL
        </Button>
        <span style={{ color: "grey", fontSize: ".9rem" }}>/</span>
        <Button
          highlighted={isEnglish}
          onClick={() => !isEnglish && changeLanguage()}
        >
          EN
        </Button>
      </Container>

      <MobileContainer>
      <Button
          highlighted={!isEnglish}
          onClick={() => isEnglish && changeLanguage()}
        >
          NL
        </Button>
        <span style={{ color: "grey", fontSize: ".9rem" }}>/</span>
        <Button
          highlighted={isEnglish}
          onClick={() => !isEnglish && changeLanguage()}
        >
          EN
        </Button>
      </MobileContainer>
    </>
  )
}
