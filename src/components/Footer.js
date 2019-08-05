import React, { Children } from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    position: relative;
    width: 100%;
    z-index: 99;
    bottom: 0;
    left: 0;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    border-radius: 30px;
    color: white;
    border: none;
    box-shadow: 0px 10px 20px rgba(101,41,255,0.15);
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(30,10,90, 0.25);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({data,children}) => (
    <FooterGroup>
        <Text>Prototype and build apps with React by Akai</Text>
        <Button>ZCool</Button>
        <Copyright>Akai & UXD © 2019</Copyright>
    </FooterGroup>
)

export default Footer