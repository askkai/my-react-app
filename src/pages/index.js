import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card";
import Section from "../components/Section"
import Wave from "../components/Wave";

const IndexPage = () => (
  <div>
    <Layout></Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Nice to meet you</h1>
        <p>I am Wongkai</p>
        <p>A UX/UI Designer</p>
        <Link to="/page-2/">read more</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-invision.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>5 Projects, more coming</h2>
      <div className="CardGroup">
        <Card
        title="Design System"
        text="10 sectionss"
        image={require('../images/Planes30.png')} />
        <Card
        title="React for Designers"
        text="12 sectionss"
        image={require('../images/wallpaper.jpg')} />
        <Card
        title="Sound Design"
        text="12 sectionss"
        image={require('../images/wallpaper.jpg')} />
        <Card
        title="ARKit 2"
        text="12 sectionss"
        image={require('../images/wallpaper.jpg')} />
     </div>
    </div>
    <Section 
      image={require('../images/Polygon28.png')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="fadadsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfds
      dfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfs
      dfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfs
      dfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsdfsdfsdfdsfadadsddsfs"
     />
  </div>
)

export default IndexPage
