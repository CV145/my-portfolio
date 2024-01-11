
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <AboutMe />
        <Projects />
      </div>
    </div>
  )
}

export default App
