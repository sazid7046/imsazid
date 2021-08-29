import React from 'react'
import Hero from './Hero';
import SVG from './SVG';
import Card from './CardItem';
import Footer from './../components/ui/Footer'

function Home() {
  return (
    <React.Fragment>
      <Hero/>
      <SVG/>
      <Card/>
      <Footer/>
    </React.Fragment>
  )
}

export default Home
