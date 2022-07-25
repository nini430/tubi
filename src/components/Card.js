import React from 'react'
import styled from "styled-components"
import logo from "../img/logo.png"


const Container=styled.div`
    width:360px;
    margin-bottom:45px;
    cursor:pointer;
`

const Image=styled.img`
    width:100%;
    height:202px;

`
const Details=styled.div`
    display:flex;
    margin-top:16px;
    gap:12px;
`

const ChannelImg=styled.img`
    
`
export const Card = () => {
  return (
    <Container>
        <Image src={logo}/>
        <Details>

        </Details>

    </Container>
  )
}
