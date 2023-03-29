import React from 'react'
import homeStyle from './home.module.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <h1>React Quiz</h1>
            <hr />

            <div className={homeStyle.homeMain}>
                

                <h2>The Test</h2>
                <p>The test contains 10 questions and there is no time limit. </p>
                <p>The test is not official, it's just a nice way to see how much you know, or don't know, about React.</p>

                <h2>Count Your Score</h2>
                <p>You will get 2 point for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 20 points.</p>
            </div>

            <div className={homeStyle.homeInner}>
                <h2>Start the Quiz</h2>
                <p>Good Luck!</p>
                <button onClick={()=> navigate("/react-quiz")}>Start the React Quiz</button>
            </div>
        </div >
    )
}
