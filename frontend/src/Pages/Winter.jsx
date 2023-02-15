import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar'
import WinterList from '../Components/WinterList'

import '../CSS/Sidebar.css'
const Winter = () => {
  return (
    
    <div className='main-side'>
    <div className='sidebar' >
    <Sidebar/>
    </div>
    <div className='winterlist'>
    <WinterList/>
    </div>
    </div>
    
    
  )
}
export default Winter