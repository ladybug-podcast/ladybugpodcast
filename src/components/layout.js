import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout
