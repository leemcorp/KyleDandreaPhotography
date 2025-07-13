import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import './App.css';
import Lifestyle from './pages/Lifestyle';
import ResponsiveNav from './pages/Nav';
import {intro_blurb } from './constants/constants';
import Weddings_Elopements from './pages/Weddings_Elopements';
import Maternity from './pages/Maternity';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
                   <ResponsiveNav />
          <h1>kyle dandrea photography</h1>
          <p>Capturing real moments with heart, light, and soul.</p>
          {/* <nav>
            <a href='#lifestyle'>Lifestyle</a>
            <a href='#couples'>Couples</a>
            <a href='#elopements'>Elopements</a>
            <a href='#weddings'>Weddings</a>
            <a href='#contact'>Contact</a>
          </nav> */}
  
        </header>
        <main>

          <section id="blurb" className='section'>
            <p className='blurb'>{intro_blurb}</p>
          </section>
          <section id="maternity" className='section'>
            <Maternity />
          </section>
          <section id="lifestyle" className='section'>
            <Lifestyle />
          </section>
          <section id="weddings_elopements" className='section'>
            <Weddings_Elopements />
          </section>
          <section id="contact" className='section'>
            <Contact />
          </section>
      {/*    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </main>
        <footer>
          <p>&copy; 2025 Kyle Dandrea</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;