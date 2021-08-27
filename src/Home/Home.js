import React from 'react'
import Hero from './Hero';
import Footer from '../components/ui/Footer';
import SVG from './SVG';

function Home() {
  return (
    <React.Fragment>
      <Hero/>
      <SVG/>
      <Footer/>
    </React.Fragment>
  )
}
export default Home
