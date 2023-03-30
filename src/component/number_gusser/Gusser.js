
import React, { useState, useRef } from 'react'
import style from './gusser.module.css'


export default function Gusser() {

    const [count, setCount] = useState(0)
    const [guess, setGuess] = useState("")

    const luckyNum = useRef(Math.round(Math.random() * 100))


    function handleClick() {
        setCount(count + 1)

        // console.log(luckyNum);
        if (guess === "") {
            alert("Input is empty!")
        }else  if (luckyNum.current > guess) {
            alert(`Guess:${guess} - 'You guessed a smaller number'`)
        } else if (luckyNum.current < guess) {
            alert(`Guess:${guess} - 'You guessed a larger number'`)
        } else {
            alert(`Congratulations! You guessed the right number in ${count} attempts `)
        }

        setGuess("")
    }
 
    return (
        <div className={style.guessMain}>
            <div className={style.guessContainer}>
                <h1>Number Gusser</h1>
                <hr />

                <p>Guess the lucky number between 1-100. </p>
                <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
                <button onClick={handleClick}>Match Number</button>

            </div>
        </div>
    )
}
