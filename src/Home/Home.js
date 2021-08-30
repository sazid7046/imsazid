import React from 'react'
import Hero from './Hero';
import SVG from './SVG';
import Card from './CardItem';

function Home() {
  return (
    <React.Fragment>
      <Hero/>
      <SVG/>
      <Card/>
    </React.Fragment>
  )
}

export default Home
