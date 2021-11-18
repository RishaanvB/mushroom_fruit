import React from "react"
import { useEffect } from "react"
import "./layout.css"
import MainHeader from "./mainheader"
import Footer from "./footer"

const Layout = ({ children, pageTitle }) => {
  useEffect(()=> document.title = `Mushroom Fruit | ${pageTitle}` || "Mushroom Fruit")
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
