import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header";
import Card from "../components/Card";

const IndexPage = () => (
  <div>
    <Layout></Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Nice to meet you</h1>
        <p>I'm fine, thank u</p>
        <p>And u?</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-invision.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <svg width="100%" height="160" viewBox="0 0 100% 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0.000778199 183L1920 183L1920 78.9929C1812.56 45.5382 1549.41 9.41813e-05 1356.41 9.78474e-05C1115.16 0.00010243 633.661 89.7845 418.937 89.7845C247.158 89.7845 68.0716 63.8595 0.000775689 50.897L0.000778199 183Z;

            M4.57766e-05 182L1920 182L1920 118.416C1623.5 65.5191 1280.5 70.8545 1035 103.456C795.589 135.248 573.224 -8.98846e-06 358.5 -4.90975e-06C186.721 -1.64678e-06 75.4999 24.3404 4.36654e-05 70.8545L4.57766e-05 182Z;

            M4.57766e-05 190L1920 190L1920 94C1690 94 1453 123.146 1378 108C1141.27 60.1942 916.724 -3.11552e-06 702 9.63185e-07C530.221 4.22615e-06 75.4999 32.3404 4.36654e-05 78.8545L4.57766e-05 190Z;

            M0.000778199 183L1920 183L1920 78.9929C1812.56 45.5382 1549.41 9.41813e-05 1356.41 9.78474e-05C1115.16 0.00010243 633.661 89.7845 418.937 89.7845C247.158 89.7845 68.0716 63.8595 0.000775689 50.897L0.000778199 183Z

            " />
          </path>
        </svg>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <Card
       title="React for Designers"
       text="12 sectionss"
       Image={require('../images/wallpaper.jpg')} />
    </div>
  </div>
)

export default IndexPage
