import React from "react"
import Image from "gatsby-image"

import data from "../data/team.json"
import styles from "./team.module.css"
import ali from "../../content/assets/ali.png"
import emma from "../../content/assets/emma.png"
import kelly from "../../content/assets/kelly.jpg"
import lindsey from "../../content/assets/lindsey.png"

export default () =>(
    <div className="hosts">
      <div className="hosts__item">
        <img src={""} alt />
        {host.name}
        <a href={`https://twitter.com/${host.twitter}`}>{host.twitter}</a>
      </div>
    </div>
  )
