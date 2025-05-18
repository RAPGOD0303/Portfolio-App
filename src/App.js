import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './components/About';
import Skill from './components/Skill.jsx';
import Footer from './components/Footer.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
