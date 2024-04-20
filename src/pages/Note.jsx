import React  from 'react'
import Addnotes from '../components/Addnotes'
import FetchNote from '../components/FetchNote'

const Note = () => {
  
  return (
    <div className='h-fit flex justify-center  '>
      
    <div className="mx-9 text-center content-center">

        <Addnotes/>
    </div>
    <div className=" w-[69%]  text-center content-center ">

        <FetchNote />
    </div>

    </div>
  )
}

export default Note
