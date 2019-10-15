import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"
import { rhythm, scale } from "../utils/typography"
import { FaTwitter, FaDownload, FaPodcast } from "react-icons/fa"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const seoTitle = `${post.frontmatter.title} | Ladybug Podcast 🐞`
    const shareTitle = `Listen to ${
      post.frontmatter.title
    }, a @LadybugPodcast episode by @kvlly, @emmawedekind, and @aspittel!`
    const shareUrl = `https://ladybug.dev/episode/${post.frontmatter.slug}`
    const twitterShare = `//twitter.com/share?text=${encodeURIComponent(
      shareTitle
    )}&amp;url=${shareUrl}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={seoTitle}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="episode">
          <p className="back-to-list">
            <Link to="/">&larr; Back to episodes</Link>
          </p>
          <h1>
            {post.frontmatter.title} {post.slug}
          </h1>
          <p
            className="post-meta"
            style={{
              ...scale(-1 / 5),
              display: `block`,
            }}
          >
            <span>
              {post.frontmatter.date} | {post.frontmatter.length} |{" "}
              {post.frontmatter.episode}
            </span>
          </p>
          <ul class="post-actions">
            <li>
              <a
                className="twitter-share"
                target="_blank"
                onClick="ga('send', 'actions', 'Twitter', 'Share', {post.frontmatter.title});"
                href={twitterShare}
              >
                <FaTwitter size="1em" title="Share on Twitter" />
                <span>Share on Twitter</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                onClick="ga('send', 'actions', 'Download', 'Download', {post.frontmatter.title});"
                href={post.frontmatter.audio}
              >
                <FaDownload size="1em" title="Download MP3" />
                <span>Download MP3</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                onClick="ga('send', 'actions', 'Subscribe', 'Subscribe', {post.frontmatter.title});"
                href="https://link.chtbl.com/ladybugpodcast"
              >
                <FaPodcast size="1em" title="Subscribe" />
                <span>Subscribe</span>
              </a>
            </li>
          </ul>
          <p>{post.frontmatter.description}</p>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Player show={post.frontmatter} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <div
            className="episode-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        audio
        slug
        episode
        length
      }
    }
  }
`
