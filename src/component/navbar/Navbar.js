import React from 'react'
import nav from './navbar.module.css'

import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <div className={nav.mainNavbar}>
        <div className={nav.logoPart}>

            <p onClick={ ()=>navigate('/') }>Navbar</p>
 
        </div>

        <div className={nav.linkPart}>
            <span onClick={()=> navigate('/')}>Home</span>
            <span onClick={()=> navigate('/about')}>About</span>
            <span onClick={()=> navigate('/login')}>Login</span>
            <span onClick={()=> navigate('/register')}>Register</span>
        </div>
    </div>
  )
}
