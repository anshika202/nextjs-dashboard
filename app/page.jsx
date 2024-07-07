import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import SearchIcon from './Icons/SearchIcon';
import SortIcon from "./Icons/SortIcon";
import Download from "./Icons/DownloadIcon";
import Table from './components/Table';
import transactions from "./Data/transactions";
import PreviousIcon from "./Icons/ChevronLeft";
import ForwardIcon from "./Icons/ChevronRight";

const Home = () => {
  return (
    <section>
      <Navbar/>
      <div className='pb-8 bg-[#FAFAFA] h-screen overflow-y-scroll'>
        <div className='max-w-7xl px-8 mx-auto'>
          <div className='my-8 flex justify-between'>
            <h2 className='text-[#1A181E] text-xl font-medium'>Overview</h2>
            <select className='bg-white border px-3 py-1.5'>
              <option>
                Last Month
              </option>
            </select>
          </div>

          <div className='flex gap-x-2 my-8'>
            <div className='bg-white w-[50%] p-5 rounded-lg shadow-sm'>
                <h2 className='text-[#4D4D4D]'>Total orders</h2>
                <p className='font-medium text-[32px]'>231</p>
            </div>
            <div className='bg-white w-[50%] p-5 rounded-lg shadow-sm'>
                <h2 className='text-[#4D4D4D]'>Amount recieved</h2>
                <p className='font-medium text-[32px]'>₹23,92,312.19</p>
            </div>
          </div>

          <div className='font-medium text-xl text-[#1A181E] mb-5'>
          <h2>
          Transactions | This Month
            </h2>
          </div>

          <div className='bg-white p-3 rounded-lg mb-20 shadow-[0 2px 6px 0 rgba(26, 24, 30, 0.04)]'>
            <div className='flex items-center justify-between'>
              <div className='flex border rounded w-fit px-4 py-2.5 items-center gap-x-2'>
                <SearchIcon/>
                <input
                type='text'
                className='text-sm'
                placeholder='Search by order ID...'/>
              </div>

              <div className='flex ite gap-x-2'>
                <div className='flex items-center border border-[#D9D9D9] px-4 py-2 rounded text-sm'>
                  Sort
                  <SortIcon/>
                </div>
                <div className='flex items-center border border-[#D9D9D9] px-2.5 py-2 rounded'>
                  <Download/>
                </div>
              </div>
            </div>
            
           <Table transactions={transactions}/>

           <div className='flex justify-center py-6 mx-auto gap-x-6'>
            
            <button className='flex gap-x-2 items-center border border-[#D9D9D9] px-3 py-1 font-medium rounded text-sm'>
              <ForwardIcon/>
              Previous
            </button>

            <ul className='flex justify-between items-center gap-x-2'>
              <li className='cursor-pointer p-0.5 h-7 w-7 text-sm grid place-items-center rounded bg-[#146EB4] text-white'>1</li>
              <li className='cursor-pointer p-0.5 h-7 w-7 text-sm grid place-items-center rounded hover:bg-[#146EB4]'>2</li>  
            </ul>

            <button className='flex gap-x-2 items-center border border-[#D9D9D9] px-3 py-1 font-medium rounded text-sm'>
              Next
              <PreviousIcon/>
            </button>

           </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home