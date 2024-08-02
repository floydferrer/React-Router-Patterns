import React from 'react'
import { useParams, Navigate } from 'react-router-dom';
import Color from './Color'

const FilterColor = ({colors}) => {
  const { name } = useParams();

  if(name) {
    const currentColor = colors.find(
        color => color['name'].toLowerCase() === name.toLowerCase()
    );
    if(!currentColor) return <Navigate to={'/Colors'}/>
    return <Color name={currentColor.name} color={currentColor.color}/>
  }
  return null;
}

export default FilterColor
