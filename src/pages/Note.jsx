import React  from 'react'
import Addnotes from '../components/Addnotes'
import FetchNote from '../components/FetchNote'

const Note = () => {
  
  return (
    <div className='h-fit flex justify-center flex-col md:flex-row '>
      
    <div className="md:mx-9 my-7 text-center content-center">

        <Addnotes/>
    </div>
    <div className=" md:w-[69%]  text-center content-center ">

        <FetchNote />
    </div>

    </div>
  )
}

export default Note
