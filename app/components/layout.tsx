import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='h-screen flex'>
        <Sidebar/>
        <main className='flex-1 overflow-hidden'>
            {children}
        </main>
        
    </div>
  )
}

export default Layout