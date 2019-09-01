import React from "react"
// import SwUpdate from "./sw-update"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a
          target="_blank"
          href="https://www.netlify.com"
          style={{
            border: "none",
            boxShadow: "none",
            padding: 0,
          }}
        >
          <img
            src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
            alt="Powered by Netlify, go to Netlify's site"
            style={{ margin: "1rem 0" }}
          />
        </a>
        <p>
          &copy; Ladybug Podcast 2019. Produced by Kelly Vaughn, Ali Spittel,
          and Emma Wedekind.
        </p>
        {/* <SwUpdate /> */}
      </footer>
    )
  }
}

export default Footer
