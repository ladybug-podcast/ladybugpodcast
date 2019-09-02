import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Sponsorships extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Sponsorships | Ladybug Podcast 🐞" />
        <div className="contact">
          <div className="container sponsorships">
            <h1>Ladybug Podcast Sponsorships</h1>
            <p>
              We're Emma Wedekind, Kelly Vaughn, and Ali Spittel - three
              seasoned software developers working in different sectors. We
              wanted to add our voices to the podcasting sphere and share our
              experiences and advice. We have great discussions around how to
              start coding, the hot technologies right now, how to get your
              first developer job, imposter syndrome, how to write CSS and more!
            </p>
            <p>
              Our podcast has been reaching a large audience of diverse
              developers from junior to senior and everything in between.
              According to Spotify's analytics, 35% of our listeners are women,
              far outpacing the industry.
            </p>
            <p>
              Our podcast is new, but growing fast. We hit the 35,000 listens
              mark a month after our first episode. Our first episode has
              reached 8,000 listens before it was four weeks old. Each episode
              is passing the 5k listens mark one week after publication. The
              growth has been enormous, and we expect these numbers to keep
              climbing rapidly.
            </p>
            <p>
              Our episodes are released first thing each Monday morning, and are
              about both technical topics and career advice for other
              developers.
            </p>
            <strong>Our sponsorships follow the format:</strong>
            <ul>
              <li>One $900 pre-roll slot</li>
              <li>Two $800 mid-roll slots</li>
            </ul>
            <strong>Each sponsor will also receive:</strong>
            <ul>
              <li>a post-roll slot</li>
              <li>
                your logo, link, and description on our website on the episode's
                page
              </li>
              <li>
                a link to your site within the show notes syndicated to podcast
                clients and our RSS feed
              </li>
            </ul>
            <strong>Each episode follows this format:</strong>
            <ul>
              <li>An introduction to what the episode is about</li>
              <li>Our jingle</li>
              <li>The pre-roll sponsor</li>
              <li>The first half of the episode</li>
              <li>Mid-roll sponsors</li>
              <li>The second half of the episode</li>
              <li>Post-roll shoutouts</li>
            </ul>
            <p>
              We can customize your message in keeping with our tone and
              experiences, or deliver a script you send us. We do want to make
              sure we are excited about our sponsors, and we would love to
              participate in demos or even build sample apps ourselves if
              applicable and possible.
            </p>
            <p>
              We ask for a 3 episode minimum agreement for sponsorship so that
              you consistently reach our audience each week.
            </p>
            <p>
              Reach out to <a href="mailto:hello@ladybug.dev">our email</a> with
              any questions or to sponsor the show!
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Sponsorships
