import { Link } from "gatsby"
import React from "react"
import SwUpdate from './sw-update';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          &copy; Ladybug Podcast 2019. Produced by Kelly Vaughn, Ali Spittel,
          Emma Wedekind, and Lindsey Kopacz.
        </p>
        <SwUpdate/>
      </footer>
    )
  }
}

export default Footer
