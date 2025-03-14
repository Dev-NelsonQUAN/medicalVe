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
import LandingPage from "../pages/Landing/LandingPage"
import SelectionPage from "../pages/Landing/SelectionPage"
import PharmSignUp from '../pages/auth/PharmSignUp'

const router = createHashRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/selection",
        element: <SelectionPage />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/pharmacy-sign-up',
        element: <PharmSignUp />
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
                element: <Users />
            },
            {
                path: 'pharmacies',
                element: <Pharmacies />
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