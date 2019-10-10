import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import myData from "../data/bio_team.json"

import ali from "../../content/assets/ali.png"
import emma from "../../content/assets/emma.png"
import kelly from "../../content/assets/kelly.jpg"
import { FaRegGrinSquintTears } from "react-icons/fa"

class Bio extends React.Component {
  render() {
    const { location } = this.props
    this.who = location.state.who
    this.img = ''
    if (this.who == 'ali') this.img = ali
    if (this.who == 'kelly') this.img = kelly
    if (this.who == 'emma') this.img = emma
    
    return (
      <Layout>
        <SEO title="Team | Ladybug Podcast 🐞" />
        <div className="team">
          <div className="hosts">
          
            <div className="hosts_bio">
              <img src={this.img} width="100" height="100" alt="" />
              <h2>{myData[this.who].name}</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={myData[this.who].twitter_uri}
              >
                @{myData[this.who].twitter}
              </a>
              <p className="hosts_bio">
                {myData[this.who].bio}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Bio
