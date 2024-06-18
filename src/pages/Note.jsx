import React  from 'react'
import Addnotes from '../components/Addnotes'
import FetchNote from '../components/FetchNote'

const Note = () => {
  
  return (
    <div className='md:h-screen flex justify-center flex-col md:flex-row  '>
      {/* <div className="absolute top-[350px] font-mono text-2xl ">UNDER CONSTRUCTION...
      </div> */}

    <div className="md:mx-9 my-7 text-center content-center  select-none  ">

        <Addnotes/>
    </div>
    <div className=" md:w-[69%]  text-center content-center  select-none ">

        <FetchNote />
    </div>

    </div>
  )
}

export default Note
