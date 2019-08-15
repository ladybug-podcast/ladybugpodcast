import React from "react"
import { FaTwitter, FaRss, FaDev, FaGithub } from "react-icons/fa"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="social-links">
          <a
            href="https://twitter.com/ladybugpodcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="1.6em" title="Follow on Twitter" />
          </a>
          <a
            href="https://pinecast.com/feed/ladybug-podcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRss size="1.6em" title="access our RSS feed" />
          </a>
          <a
            href="https://dev.to/ladybug"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev size="1.6em" title="Follow on DEV" />
          </a>
          <a
            href="http://github.com/ladybug-podcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.6em" title="Follow on DEV" />
          </a>
        </div>
        <p>
          &copy; Ladybug Podcast 2019. Produced by Kelly Vaughn, Ali Spittel,
          Emma Wedekind, and Lindsey Kopacz.
        </p>
      </footer>
    )
  }
}

export default Footer
