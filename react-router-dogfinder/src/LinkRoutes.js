import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Dogs from './Dogs';
import FilterDogDetails from './FilterDogDetails'

const LinkRoutes = ({dogs}) => {
  return (
    <div>
        <Routes>
            <Route path='/Dogs' element={<Dogs dogs={dogs}/>}/>
            <Route path='/Dogs/:name' element={<FilterDogDetails dogs={dogs}/>} />
            <Route path='/*' element={<Navigate to={'/dogs'}/>}/>
        </Routes>
    </div>
  )
}

export default LinkRoutes;