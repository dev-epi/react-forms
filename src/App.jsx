import React from 'react'
import Simple from './Simple'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Register from './Register'
import TaskManager from './Tasks/TaskManager'
export default function App() {
  return (
    <div>
      {/* <Simple/>
      <Login/> */}
      {/* <Register/> */}
      <TaskManager></TaskManager>
    </div>
  )
}
