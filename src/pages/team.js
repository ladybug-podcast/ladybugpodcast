import React from "react"

import Logo from "../components/logo"

import ali from "../../content/assets/ali.png"
import emma from "../../content/assets/emma.png"
import kelly from "../../content/assets/kelly.jpg"
import lindsey from "../../content/assets/lindsey.png"

export default () => (
  <div className="team">
    <Logo />

    <div className="hosts">
      <div className="hosts__item">
        <img src={lindsey} width="100" height="100" alt="" />
        <h2>Lindsey Kopacz</h2>
        <a href={`https://twitter.com/LittleKope`}>@LittleKope</a>
      </div>
      <div className="hosts__item">
        <img src={ali} width="100" height="100" alt="" />
        <h2>Ali Spittel</h2>
        <a href={`https://twitter.com/aspittel`}>@aspittel</a>
      </div>
      <div className="hosts__item">
        <img src={emma} width="100" height="100" alt="" />
        <h2>Emma Wedekind</h2>
        <a href={`https://twitter.com/EmmaWedekind`}>@EmmaWedekind</a>
      </div>
      <div className="hosts__item">
        <img src={kelly} width="100" height="100" alt="" />
        <h2>Kelly Vaughn</h2>
        <a href={`https://twitter.com/kvlly`}>@kvlly</a>
      </div>
    </div>
  </div>
)
