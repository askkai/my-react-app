import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>How are you?</h1>
        <p>I'm fine, thank u</p>
        <p>And u?</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div> 

  </div>
)

export default IndexPage
