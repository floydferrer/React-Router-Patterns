import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import NavBar from './NavBar'
import './DogDetails.css'

const DogDetails = ({dogs, dog}) => {
  if (!dog) return <Navigate to="/dogs" />
  return (
    <div>
      <NavBar dogs={dogs}/>  
      <h1>Meet {dog.name}!</h1>
      <img src={`/${dog.src}.jpg`} />
      <h2>Age: {dog.age}</h2>
      <h3>Facts: </h3>
      <ul>
        {dog.facts.map(fact => <li>{fact}</li>)}
      </ul>
      <Link to='/Dogs'>Return to Dogs</Link>
    </div>
  )
}

export default DogDetails
