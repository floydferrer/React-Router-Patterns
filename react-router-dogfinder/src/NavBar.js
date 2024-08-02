import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({dogs}) => {
  return (
    <div>
        <nav>
            <Link className='nav-link' to='/Dogs'>All Dogs</Link>
            {dogs.map(dog => <Link className='nav-link' to={`/Dogs/${dog.name}`}>{dog.name}</Link>)}
        </nav>
    </div>
  )
}

export default NavBar;
