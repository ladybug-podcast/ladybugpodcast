import React from "react"
import { Link } from "gatsby"
import { FaGooglePlay, FaSpotify, FaItunes, FaPodcast } from "react-icons/fa"

export default () => (
  <div className="nav">
    <div className="links">
      <Link to="/team">Team</Link>
      <a
        href="https://dev.us3.list-manage.com/subscribe?u=a1e57cb6d1b212102fc5d5265&id=dd3f5f0b2d"
        target="_blank"
        rel="noopener noreferrer"
        rel="noopener noreferrer"
      >
        Newsletter
      </a>
      <Link to="/contact">Contact</Link>
      <a href="https://shop.ladybug.dev">Shop</a>
    </div>
    <div className="subscribe-links">
      <a
        href="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaItunes size="1.6em" title="subscribe on Apple Podcasts" />
      </a>
      <a
        href="https://play.google.com/music/listen?u=0#/ps/I4lyvappbarpo5olinvd2gxh3km"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGooglePlay size="1.6em" title="subscribe on Google Play" />
      </a>
      <a
        href="https://open.spotify.com/show/1KBO1tSnm0XRlEILmqt7Em"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify size="1.6em" title="subscribe on Spotify" />
      </a>
      <a
        href="https://www.stitcher.com/podcast/ladybug-podcast"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPodcast size="1.6em" title="subscribe on Stitcher" />
      </a>
    </div>
  </div>
)
