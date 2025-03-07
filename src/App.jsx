import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works, Footer } from './components';

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div><Footer/></div>
      </div>
    </Router>
  );
};

export default App;
