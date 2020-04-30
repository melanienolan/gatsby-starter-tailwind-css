import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
