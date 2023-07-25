import './App.css';
import About from './component/about/About';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Services from './component/services/Services';
import Skill from './component/skill/Skill';
import Qualification from './component/qualification/Qualification';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
function App() {
  return (
     <>
     <Header />
     
     <main className='main'>
      <Home />
      <About />
      <Skill />
      <Services />
      <Qualification />
      <Testimonial />
      <Contact />
     </main>
     </>    
  );
}

export default App;
