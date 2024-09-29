import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='bg-[#2D3142] text-[#FFF] px-5 pt-5 flex items-start gap-10 h-screen overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col gap-5'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
