import React, { useState } from "react"

export const languageContext = React.createContext()

const Provider = props => {
  const [isEnglish, SetIsEnglish] = useState(true)
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

export default ({ element }) => <Provider>{element}</Provider>
