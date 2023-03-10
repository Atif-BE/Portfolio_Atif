import { useState } from 'react';
import { Container } from "./styles/appStyles";
import "./styles/global.css"
import Contact from './components/Contact';
import Who from './components/Who';
import Landing from './components/Landing';
import Projects from './components/Projects';

const App = () => {
  return (
    <Container>
      <Landing />
      <Who/>
      <Projects/>
      <Contact/>
    </Container>
  )
}

export default App;
