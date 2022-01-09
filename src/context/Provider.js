import React, { useState } from "react"

export const languageContext = React.createContext({
  isEnglish: true,
  changeLanguage: () => {},
})

const Provider = props => {
  const [isEnglish, SetIsEnglish] = useState(false)
  const changeLanguage = () => SetIsEnglish(!isEnglish)
  return (
    <languageContext.Provider
      value={{
        isEnglish,
        changeLanguage,
      }}
    >
      {props.children}
    </languageContext.Provider>
  )
}

const LanguageProvider = ({ element }) => <Provider>{element}</Provider>
export default LanguageProvider
