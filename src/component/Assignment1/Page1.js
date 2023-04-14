//1. Create a simple React app with React Router. Set up two routes: one for the home page and one for a contact page. Use React Router's Link component to navigate between the two pages.


import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
    return (
        <div>
            <h1>This is Home Page...</h1>

            <button><Link to='/page2'>go to contact</Link></button>
        </div>
    )
}
