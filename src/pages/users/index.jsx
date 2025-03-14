import React from 'react'
import UserSideBar from './UserSideBar'
import UserDashboardHeader from './UserDashboardHeader'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div className='bg-white flex h-[100vh]'>
            <aside>
                <UserSideBar />
            </aside>

            <div className='bg-gray-300'>
                <div>
                    <UserDashboardHeader />
                </div>

                <div className='bg-gray-500 m-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserLayout