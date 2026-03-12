import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Simple() {
  // const params = useParams()
  const {name} = useParams()
    const [title ,setTitle] = useState('')
  return (
    <div>Simple {name}
        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
        {title}
    </div>
  )
}
