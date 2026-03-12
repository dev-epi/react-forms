import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function AuthLayout() {
    const location = useLocation();
    console.log(location)
    const isLoginRoute = location.pathname.includes('login') ? true : false
  return (
    <div className='container'>
        <h2 className='text-center'>Welcome to Task Manager App</h2>

        <Outlet/>
        {isLoginRoute ? 
        <Link to="/auth/register" > Create your account</Link>
        : <Link to="/auth/login">Sign in</Link>
        }
        <p>Terms & conditions</p>
    </div>
  )
}
