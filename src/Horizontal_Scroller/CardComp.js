import React from 'react'
import card from './Horizontal.module.css'

export default function CardComp(props) {
    return (
            <div className={card.card_container}>
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.designation} @ {props.company}</p>
                <p>{props.experience}</p>
            </div>
    )
}
