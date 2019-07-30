import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Team | Ladybug Podcast 🐞" />
        <div className="contact">
          <div className="container">
            To give us feedback on our show, please DM us on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ladybugpodcast"
            >
              Twitter
            </a>
            ! If you're interested in sponsorship opportunities, please visit
            our <a href="/sponsorships">sponsorships page</a>.
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
