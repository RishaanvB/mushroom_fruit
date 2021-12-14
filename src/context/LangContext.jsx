import React, { createContext, useState } from "react"

export const LangContext = createContext({lang: 'nl', fn:()=>{}})

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('nl')
  return (
    <LangContext.Provider value={{lang, setLang}}>
      {children}
    </LangContext.Provider>
  )
}


