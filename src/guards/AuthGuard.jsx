import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function AuthGuard() {
    const isLogged = localStorage.getItem('token') ? true : false

  if(isLogged){
    return <Outlet/>
  }else{
    return <Navigate to="/auth/login"/>
  }
}
