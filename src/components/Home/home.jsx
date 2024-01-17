import React from 'react'
import { Banner } from './banner';
import { About } from './About';
import { Ministry } from './Ministry';
import Sermons from './Sermons';
function Home() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <Banner/>
     <About/>
     <Ministry/>
     <Sermons/>
    </div>
  )
}

export default Home