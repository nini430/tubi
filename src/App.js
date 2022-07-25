import { useEffect, useState } from "react";
import styled,{ThemeProvider} from "styled-components"
import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";
import { darkTheme, lightTheme } from "./utils/Theme";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";


const Container=styled.div`
  display:flex;
`

const MainContainer=styled.div`
 flex:7;
 background:${({theme})=>theme.bg};
`

const darkModeSave=JSON.parse(localStorage.getItem("mode"));


const Wrapper=styled.div`

`

function App() {
  const [darkMode,setDarkMode]=useState(darkModeSave);
  useEffect(()=>{
    console.log("aq shedis?")
    localStorage.setItem("mode",JSON.stringify(darkMode))
  },[darkMode])
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu setDarkMode={setDarkMode} darkMode={darkMode}/>
      <MainContainer>
        <NavBar/>
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="/video">
                <Route path=":id" element={<Video/>}/>
                <Route/>
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </MainContainer>
      </BrowserRouter>
      
    </Container>
    </ThemeProvider>
  );
}

export default App;
