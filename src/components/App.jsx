import React from 'react'
import Lendingpage from './Lendingpage'
import Intro from './Intro'
import Introwhite from './Introwhite'
import Slider1 from './Slider1'
import Gist from './Gist'
import Slider2 from './Slider2'
import Gistwhite from './Gistwhite'
import BgSlider from './BgSlider'
import Bgslider2 from './Bgslider2'
import Live from './Live'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  let locomotivescroll = new LocomotiveScroll()
  return (
    <div className='w-full '>
      <Lendingpage/>
      <Intro/>
      <Introwhite/>
      <Slider1/>
      <Gist/>
      <Slider2/>
      <Gistwhite/>
      <BgSlider/>
      <Bgslider2/>
      <Live/>
      <Footer/>
    </div>
  )
}

export default App