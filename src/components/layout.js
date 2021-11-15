import React, { useEffect } from "react"
import MainHeader from "./MainHeader"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children, pageTitle }) => {
  useEffect(() => (document.title = pageTitle || 'mushy'))

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
