import './App.css';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import Header from './assets/components/header';
import Hero from './assets/components/hero';
import Project from './assets/components/project';
import Resume from './assets/components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
