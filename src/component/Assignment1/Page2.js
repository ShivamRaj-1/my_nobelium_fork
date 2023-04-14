import React from 'react'
import { Link } from 'react-router-dom'

export default function Page2() {
  return (
    <div>
        <h1>This is Contact Page</h1>

        <button><Link to='/page1'>go to home</Link></button>
    </div>
  )
}
