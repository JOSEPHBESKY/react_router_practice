import React from 'react'
import { useNavigate } from 'react-router-dom'

function submit() {
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/home")}>go to home</button>
    </div>
  )
}

export default submit