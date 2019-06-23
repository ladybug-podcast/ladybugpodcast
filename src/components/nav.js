import React from "react"
import { Link } from "gatsby"
import { FaGooglePlay, FaSpotify, FaItunes, FaTwitter } from "react-icons/fa"

export default () => (
  <div className="nav">
    <div className="links">
      <Link to="/team">Team</Link>
      <Link to="/newsletter">Newsletter</Link>
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
