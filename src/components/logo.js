/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <React.Fragment>
            <Link
              style={{
                textDecoration: `none`,
                borderBottom: `none`,
                boxShadow: `none`,
                margin: `0 auto`,
              }}
              to={`/`}
            >
              <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt="LadyBug Podcast"
                width="500"
                className="logo"
              />
            </Link>
            <h1 className="visually-hidden">LadyBug Podcast</h1>
            <h2 className="by-line">
              Listen to{" "}
              <a href="https://kvlly.com/" target="_blank">
                Kelly Vaughn
              </a>
              ,{" "}
              <a href="https://alispit.tel" target="_blank">
                Ali Spittel
              </a>
              , &amp;&amp;{" "}
              <a href="https://emmawedekind.com/" target="_blank">
                Emma Wedekind
              </a>
              {" "} debug the tech industry.
            </h2>
          </React.Fragment>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
