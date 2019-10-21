import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import ali from "../../content/assets/ali.png"
import emma from "../../content/assets/emma.png"
import kelly from "../../content/assets/kelly.jpg"

class Team extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Team | Ladybug Podcast 🐞" />
        <div className="team">
          <div className="hosts">
          
            <div className="hosts__item">
            <Link to="/bio" state={{ who: 'ali'}} className="image-link-preserve-ratio">
              <img src={ali} width="100" height="100" alt=""/>
              <h2>Ali Spittel</h2>
            </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/aspittel`}
              >
                @aspittel
              </a>
            </div>
            <div className="hosts__item">
              <Link to="/bio" state={{ who: 'emma'}} className="image-link-preserve-ratio">
                <img src={emma} width="100" height="100" alt="" />
                <h2>Emma Wedekind</h2>
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/EmmaWedekind`}
              >
                @EmmaWedekind
              </a>
            </div>
            <div className="hosts__item">
            <Link to="/bio" state={{ who: 'kelly'}} className="image-link-preserve-ratio">
              <img src={kelly} width="100" height="100" alt="" />
              <h2>Kelly Vaughn</h2>
            </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/kvlly`}
              >
                @kvlly
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Team
