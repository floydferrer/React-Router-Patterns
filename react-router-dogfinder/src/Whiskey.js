import React from 'react'

//window.document.location.pathname

const Whiskey = ({dogs}) => {
  console.log(window.document.location.pathname)  
  console.log(dogs)  
  return (
    <div>
      <h1>Whiskey!!</h1>
    </div>
  )
}

export default Whiskey
