import React from 'react'

export default function Task({item}) {
   
  return (
   <div className="card mt-3 p-2">
            <p>{item.title}</p>
            <p>Exp : {item.exp_date}</p>
        </div>
  )
}
