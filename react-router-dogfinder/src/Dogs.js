import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import LinkRoutes from './LinkRoutes';
import axios from 'axios';
import './Dogs.css'

const Dogs = ({dogs}) => {

  return (
    <div>
        <NavBar dogs={dogs}/>
        <h1>Meet the dogs!</h1>
        {dogs.map(d => (
            <div>
                <img src={`./${d.src}.jpg`} />
                <div className='dog-link-container'><Link className='dog-link' to={`/dogs/${d.name}`}>{d.name}</Link></div>
            </div>
        ))}
        
    </div>
  )
}

export default Dogs
