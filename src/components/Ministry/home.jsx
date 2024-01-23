import React from 'react'
import { Ghcc } from './Ghcc'
import { Min} from './about'
import { About } from '../Home/About';
import { Gallery } from './gallery'
function Ministry() {
  return (
    <div className='h-96 lg:h-screen w-full '>
    <About/>
      {/* <Ghcc/> */}
      <Min/>
      <Gallery/>
    </div>
  )
}

export default Ministry