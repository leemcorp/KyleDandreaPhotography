import React from 'react';
import '../App.css'
import Lifestyle from './Lifestyle';
import Maternity from './Maternity';
import Weddings_Elopements from './Weddings_Elopements';
import { intro_blurb } from '../constants/constants';


function Home() {
  return (
    <>
      <section id="blurb" className="section">
        <p className="blurb">{intro_blurb}</p>
      </section>
      <section id="maternity" className="section">
        <Maternity />
      </section>
      <section id="lifestyle" className="section">
        <Lifestyle />
      </section>
      <section id="weddings_elopements" className="section">
        <Weddings_Elopements />
      </section>
    </>
  );
}

export default Home;