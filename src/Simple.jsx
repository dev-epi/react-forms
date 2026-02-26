import React, { useState } from 'react'

export default function Simple() {
    const [title ,setTitle] = useState('')
  return (
    <div>Simple
        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
        {title}
    </div>
  )
}
