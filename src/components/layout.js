import React from "react"
import { useEffect } from "react"
import "./layout.css"
import MainHeader from "./mainheader"
import Footer from "./footer"

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
