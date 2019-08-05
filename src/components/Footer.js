import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap:20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
`
const LinkGroup = styled.div`
`

const Footer = ({data}) => (
    <FooterGroup>
        <Text>Prototype and build apps with React by Akai</Text>
        <Button>ZCool</Button>
        <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}</LinkGroup>
    </FooterGroup>
)

export default Footer