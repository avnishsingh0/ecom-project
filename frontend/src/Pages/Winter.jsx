import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar'
import WinterList from '../Components/WinterList'

import '../CSS/Sidebar.css'
import Navbar from './Navbar'
const Winter = () => {
  return (
    <>
    <Navbar/>
    <div className='main-side'>
    <div className='sidebar' >
    <Sidebar/>
    </div>
    <div className='winterlist'>
    <WinterList/>
    </div>
    </div>
    </>
    
    
  )
}
export default Winter