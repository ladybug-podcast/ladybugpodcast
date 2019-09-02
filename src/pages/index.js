import React from "react"
import { Link, graphql } from "gatsby"
import { FaPlayCircle } from "react-icons/fa"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title="LadyBug Podcast 🐞">
        <SEO title="Ladybug Podcast 🐞 | Women Talking Tech" />
        <h1>We're taking a small break!</h1>
        <small>September 2, 2019</small>
        <p>
          We've decided to take a short break from posting new episodes. During
          the next two weeks we'll be focusing on ourselves. We want to ensure
          that you're getting the best content we have to offer.
        </p>
        <p>
          One of our hosts, Lindsey Kopacz, has left the podcast for personal
          reasons. We wish her all the best. We appreciate and genuinely thank
          you for all your support ❤️
        </p>
        <p>See you in two weeks!</p>
        <p>
          Much Love, <br /> The Ladybug Podcast
        </p>
        <hr />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="episode">
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <FaPlayCircle /> {title}
                </Link>
              </h3>

              <small>
                {node.frontmatter.date} | {node.frontmatter.length} |{" "}
                {node.frontmatter.episode}
              </small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            audio
            episode
            length
          }
        }
      }
    }
  }
`
