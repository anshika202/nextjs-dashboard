import React from 'react'
import QuestionIcon from "../Icons/HelpIcon";
import SearchIcon from "../Icons/SearchIcon";
import AnounceIcon from "../Icons/AnnouncementIcon";
import DownArrow from "../Icons/Polygon";

const Navbar = () => {
  return (
   <nav className='flex sticky items-center py-3 px-8 bg-white justify-between border-b-[1px] border-[#D9D9D9]'>
    {/* flex sticky bg-white items-center py-3 px-8 justify-between border-b-[1px] border-[#D9D9D9] */}
    <div className='flex gap-x-4'>
      <h1 className='text-[#1A181E] text-[15px]'>Payments</h1>
      <p className='flex gap-2 items-center text-xs text-[#4D4D4D]'>
        <QuestionIcon/> How it works?
      </p>
      </div>

      <div>
        <div className='flex items-center gap-x-2 px-4 py-2 w-96 bg-[#F2F2F2] rounded-md relative'>
        <SearchIcon/> 
        <input
        type='text'
        className='bg-transparent w-full'
        placeholder="Search features, tutorials, etc."/>
      <div className="absolute right-2 text-xs  p-1 rounded-md top-1/2 transform -translate-y-1/2 text-slate-400 border border-gray-300">
        ⌘K
      </div>
        </div>
        </div>


        <div className='items-center flex gap-x-3'>
          <div className='rounded-full bg-[#E6E6E6] w-10 h-10 grid place-items-center'>
            <AnounceIcon/>
          </div>
          <div className='rounded-full bg-[#E6E6E6] grid place-items-center w-10 h-10'>
            <DownArrow/>
          </div>
        </div>
      
   </nav>
  )
}

export default Navbar