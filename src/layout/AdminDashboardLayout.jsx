import React from 'react'
import SideBar from '../components/SideBar'
import DashboardHeader from '../components/DashboardHeader'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='bg-amber-100 flex h-[100vh]'>
      <aside>
        <SideBar />
      </aside>

      <div>
        <DashboardHeader />
      </div>

      <div >
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard