import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import Colors from './Colors';
import Color from './Color';
import AddColor from './AddColor';
import FilterColor from './FilterColor';

const ColorLinks = ({colors, createColor}) => {
  return (
    <div>
        <Routes>
            <Route path='/Colors' element={<Colors colors={colors}/>} />
            <Route path='/Colors/New' element={<AddColor colors={colors} createColor={createColor} />}/>
            <Route path='/Colors/:name' element={<FilterColor colors={colors}/>} />
            <Route path='/*' element={<Navigate to={'/Colors'}/>} />
        </Routes>
    </div>
  )
}

export default ColorLinks
