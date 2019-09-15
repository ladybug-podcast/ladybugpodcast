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
