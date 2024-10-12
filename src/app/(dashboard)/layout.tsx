import React from 'react'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'

const DashboardLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div className='min-h-screen w-full bg-slate-50 flex flex-col'>
        <Navbar />
        <Sidebar />
        <main className='flex h-full flex-row mt-[60px] md:pl-64'>
          {children}
          
        </main>
    </div>
  )
}

export default DashboardLayout