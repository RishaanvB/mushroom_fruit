import React from "react"
import { Link } from "gatsby"

const MainHeader = () => {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/how-it-grows">How it grows</Link>
        <Link to="/consuming-reishi">Consuming reishi</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About me</Link>
      </nav>
    </header>
  )
}

export default MainHeader
