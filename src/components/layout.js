import React, { useEffect } from "react"
import MainHeader from "./mainheader"
import Footer from "./footer"
import './layout.css'

const Layout = ({ children, pageTitle }) => {
  useEffect(()=> document.title = pageTitle)
  return (
    <>
      {/* <title>{pageTitle}</title> */}
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
