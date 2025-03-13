import React from 'react'
import { createHashRouter } from 'react-router-dom'
import SignUp from '../pages/auth/SignUp'
import Login from '../pages/auth/Login'
import AdminDashboard from '../layout/AdminDashboardLayout'

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
        element: <AdminDashboard />
    }
])

export default router