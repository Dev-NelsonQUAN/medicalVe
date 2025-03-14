import React from 'react'
import { createHashRouter } from 'react-router-dom'
import SignUp from '../pages/auth/SignUp'
import Login from '../pages/auth/Login'
import AdminDashboard from '../layout/AdminDashboardLayout'
import DashboardHome from '../components/DashboardHome'
import Users from '../pages/admin/Users';
import Pharmacies from '../pages/admin/Pharmacies';
import UserLayout from '../pages/users'
import UserDashboardHome from '../pages/users/UserDashboardHome'

const router = createHashRouter([
    {
        path: "/",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/adminDash",
        element: <AdminDashboard />,
        children: [
            {
                path: 'home',
                element: <DashboardHome />
            },
            {
              path: 'users',
              element: <Users/>
            },
            {
              path: 'pharmacies',
              element: <Pharmacies/>
            },
        ]
    },
    {
        path: "/userDashboard",
        element: <UserLayout />,
        children: [
            {
                path: 'home',
                element: <UserDashboardHome />
            },
            // {
            //     path: 'drugs',
            //     element: 
            // }
        ]

    }
])

export default router