import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Report from '../Report'
import Overview from '../Overview'

function Routing({dates}) {
  return (
    <div>
        <Routes>
            <Route path="/report" element={<Report/>}/>
            <Route path="/overview" element={<Overview dates={dates}/>}/>
        </Routes>
      
    </div>
  )
}

export default Routing
