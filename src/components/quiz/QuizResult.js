import React from 'react'
import result from './quiz.module.css'
import { useNavigate } from 'react-router-dom'

function QuizResult(props) {

  const navigate = useNavigate()
  const percentage = props.score * 100 / props.totalScore

  return (
    <div className={result.quizResultMain}>
      <div className={result.show_score}>
        <h1>Result:</h1>
        <p>Score: {props.score} of {props.totalScore}</p>
        <h3>Percentage: {percentage}%</h3>
        

      </div>

      {
        (props.score >= 12) ?
          <h2>Nice Work! You passed the test.</h2> :
          <button className={result.tryBtn} onClick={props.tryAgain}>Restart Test</button>
      }

      <button className={result.homeBtn} onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default QuizResult