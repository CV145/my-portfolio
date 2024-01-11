
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
