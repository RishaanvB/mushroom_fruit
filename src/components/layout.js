import React from "react"
import MainHeader from "./mainheader"
import Footer from "./footer"

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
