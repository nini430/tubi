import React from 'react'
import styled from "styled-components"
import {SearchOutlined} from "@mui/icons-material"


const Container=styled.div`
position:sticky;
top:0;
background:${({theme})=>theme.bgLighter};
height:56px;

`;
const Wrapper=styled.div`
display:flex;
align-items:center;
height:100%;
padding:0px 20px;
justify-content:flex-end;
position:relative;
`

const Search=styled.div`
width:40%;
position:absolute;
left:0;
right:0;
margin:auto;
display:flex;
justify-content:space-between;
align-items:center;
padding:5px;
border:1px solid #ccc;
border-radius:3px;
`
const Input=styled.input`
border:none;
background:transparent;
`

const Button=styled.button`
    padding:5px 15px;
    background-color:transparent;
    border:1px solid #3eabff;
    color:#3eabff;
    border-radius:3px;
    font-weight:500;
    cursor:pointer;
`


export const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Search>
                <Input placeholder="search..."/>
                <SearchOutlined/>
            </Search>
            <Button>
                SIGN IN
            </Button>
        </Wrapper>
    </Container>
  )
}
