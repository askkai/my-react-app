import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card";
import Section from "../components/Section"
import Wave from "../components/Wave";
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell";
import styled from "styled-components"


const SectionCaption = styled.p`
  font-weight: 600px;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align:center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width:800px) {
    grid-template-columns: 1fr;
  }
`

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
      <h2>4 Projects, more coming</h2>
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
     <SectionCaption>12 Aritcles</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
        title={cell.title}
        image={cell.image} />
        ))}
     </SectionCellGroup>
  </div>
)

export default IndexPage
