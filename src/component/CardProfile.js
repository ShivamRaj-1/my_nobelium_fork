import React from 'react'
import './cardProfile.css'

export default function CardProfile(props) {
    // console.log(props);
  return (

    <div className="main-container">
      <div className="card-conatiner">

        <img src={props.user.image} alt="profile-pic" />

        <h3>{props.user.designation}</h3>

        <h1>{props.user.name}</h1>

        <p>{props.user.description}</p>


      </div>
    </div>

  )
}
