import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    localStorage.removeItem('token')
    navigate('/auth/login')
  }
  return (
    <nav className='navbar bg-light'>
      <ul className='nav'>
        <li className='nav-item'><NavLink to="/tasks"> Tasks</NavLink></li>
        <li className='nav-item'><NavLink to="/simple"> Simple</NavLink></li>
        <li><a onClick={logout}>Logout</a></li>
      </ul>
    </nav>
  )
}
