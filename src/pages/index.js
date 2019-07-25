import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header";

const IndexPage = () => (
  <div>
    <Layout></Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Nice to meet you</h1>
        <p>I'm fine, thank u</p>
        <p>And u?</p>
        <Link to="/page-2/">Watch the video</Link>
        <svg width="1920" height="160" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0.000778199 183L1920 183L1920 78.9929C1812.56 45.5382 1549.41 9.41813e-05 1356.41 9.78474e-05C1115.16 0.00010243 633.661 89.7845 418.937 89.7845C247.158 89.7845 68.0716 63.8595 0.000775689 50.897L0.000778199 183Z;

            M4.57766e-05 182.5L1920 182.5L1920 50.3969C1331 97.5 1153 -4.92143e-06 959.999 -1.25534e-06C718.748 3.32726e-06 591.223 120.5 376.499 120.5C204.72 120.5 100.999 40 4.32673e-05 50.3969L4.57766e-05 182.5Z;

            M0.000778199 187L1920 187L1920 82.9927C1726 96.5 1273.5 115.5 1080.5 115.5C839.249 115.5 638.224 0.500003 423.5 0.500008C251.721 0.500011 53.5001 58.5959 0.000776223 82.9927L0.000778199 187Z;

            M0.000778199 183L1920 183L1920 78.9929C1812.56 45.5382 1549.41 9.41813e-05 1356.41 9.78474e-05C1115.16 0.00010243 633.661 89.7845 418.937 89.7845C247.158 89.7845 68.0716 63.8595 0.000775689 50.897L0.000778199 183Z

            " />
          </path>
        </svg>
      </div>
    </div> 
  </div>
)

export default IndexPage
