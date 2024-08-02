import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import './Color.css'

const Color = (color) => {
  if (!color) return <Navigate to="/colors" />
  document.body.style.backgroundColor = color['color'];

  return (
    <div>
      <h1 className='color-text'>THIS IS {color['name'].toUpperCase()}</h1>
      <h1 className='color-text'>ISN'T IT BEAUTIFUL?</h1>
      <Link className='color-link' to='/Colors'>GO BACK</Link>
    </div>
  )
}

export default Color
