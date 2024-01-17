import React from 'react'
import { Ghcc } from './Ghcc'
import { About } from './about'
import { Gallery } from './gallery'
function Ministry() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <Ghcc/>
      <About/>
      <Gallery/>
    </div>
  )
}

export default Ministry