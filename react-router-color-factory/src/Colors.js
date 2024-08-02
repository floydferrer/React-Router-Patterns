import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import Color from './Color'
import './Colors.css'
import AddColor from './AddColor'

const Colors = ({colors}) => {
  document.body.style.backgroundColor = 'white';
  document.body.style.backgroundImage = '';
  return (
    <div>
      <section className='section-top'>
        <h2>Welcome to the color factory.</h2>
        <Link className='section-top-link' to={'/Colors/new'}>Add a color</Link>
      </section>
      <section className='section-bottom'>
        <h4>Please select a color.</h4>
        <ul>
            {colors.map(color => <li key={color.id}><Link className='colors-link' to={`/colors/${color.name}`}>{color.name}</Link></li>)}
        </ul>
      </section>
      
    </div>
  )
}

export default Colors
