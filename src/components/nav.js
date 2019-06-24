import React from "react"
import { Link } from "gatsby"
import { FaGooglePlay, FaSpotify, FaItunes, FaTwitter } from "react-icons/fa"

export default () => (
  <div className="nav">
    <div className="links">
      <Link to="/team">Team</Link>
      <a
        href="https://dev.us3.list-manage.com/subscribe?u=a1e57cb6d1b212102fc5d5265&id=dd3f5f0b2d"
        target="_blank"
        rel="noopener noreferrer"
      >
        Newsletter
      </a>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="subscribe-links">
      <a href="https://twitter.com/ladybugpodcast">
        <FaTwitter size="2em" title="Follow on Twitter" />
      </a>
      <a href="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625">
        <FaItunes size="2em" title="subscribe on Apple Podcasts" />
      </a>
      <a href="https://play.google.com/music/listen?u=0#/ps/I4lyvappbarpo5olinvd2gxh3km">
        <FaGooglePlay size="2em" title="subscribe on Google Play" />
      </a>
      <a href="https://open.spotify.com/show/1KBO1tSnm0XRlEILmqt7Em">
        <FaSpotify size="2em" title="subscribe on Spotify" />
      </a>
    </div>
  </div>
)
