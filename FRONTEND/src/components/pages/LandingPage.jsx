import React from 'react'
import Navigation from '../Navigation'
import Hero from '../Hero';
import Assylum from '../Assylum';
import JumboTron from '../JumboTron';

const LandingPage = ({nav}) => {
  return (
    <div>
      <Navigation />
      <Hero />
      <JumboTron nav={nav}/>
      <Assylum />
    </div>
  )
}

export default LandingPage