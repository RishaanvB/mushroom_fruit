import React, { useEffect, useState, useContext } from "react"
import "./layout.css"
import MainHeader from "./mainheader"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import { myContext } from "../context/Provider"
const Layout = ({ children, pageTitle }) => {
  useEffect(
    () => (document.title = `Mushroom Fruit | ${pageTitle}` || "Mushroom Fruit")
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Mushroomfruit - Grow your own reishi!</title>
        <meta name="title" content="Mushroomfruit - Grow your own reishi!" />
        <meta
          name="description"
          content="Mushroom related website providing reishi growkits and aims to provide information regarding reishi and other healthy mushroom related products."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushroomfruit.com/" />
        <meta property="og:url" content="https://mushroomfruit.nl/" />
        <meta
          property="og:title"
          content="Mushroomfruit - Grow your own reishi!"
        />
        <meta
          property="og:description"
          content="Mushroom related website providing reishi growkits and aims to provide information regarding reishi and other healthy mushroom related products."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Mushroomfruit - Grow your own reishi!"
        />
        <meta
          property="twitter:description"
          content="Mushroom related website providing reishi growkits and aims to provide information regarding reishi and other healthy mushroom related products."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Helmet>

      <MainHeader />
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
