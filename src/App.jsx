import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Element name="about">
          <AboutMe />
        </Element>
        <div className='additional-content'>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
