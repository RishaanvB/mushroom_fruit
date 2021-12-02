import React from "react"
import { useEffect } from "react"
import "./layout.css"
import MainHeader from "./mainheader"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = ({ children, pageTitle }) => {
  useEffect(
    () => (document.title = `Mushroom Fruit | ${pageTitle}` || "Mushroom Fruit")
  )
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Mushroom related website providing reishi growkits and aims to provide information regarding reishi and other healthy mushroom related products."
        />
        <title>{`Mushroom Fruit | ${pageTitle}` || "Mushroom Fruit"}</title>
        <meta
          property="og:image"
          content="https://mushroomfruit.gtsb.io/static/86551afd1dc1de0c26f3fca47e855a7d/d486f/logo.webp"
        />
        <meta
          property="og:description"
          content="Mushroom related website providing reishi growkits and aims to provide information regarding reishi and other healthy mushroom related products."
        />
        <meta
          property="og:title"
          content="MushroomFruit. Grow your own reishi!"
        />
      </Helmet>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
