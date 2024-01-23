import React from 'react'
import { Banner } from './banner';
import { About } from './About';
import { Ministry } from './Ministry';
import Sermons from './Sermons';
import { Ddi } from './Ddi';
function Home() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <Banner/>
     <About/>
     {/* <Ministry/> */}
     <Ddi/>
     <Sermons/>
    </div>
  )
}

export default Home