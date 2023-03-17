import React, {useState} from 'react'
import './fieldComp.css'

export default function FieldComp() {

const [userText, setUserText] = useState("")


function handleChange(event) {

    let userInput = event.target.value 
    let userInputChar = userInput.split(" ").join("")

    // console.log(userInput.split(" "));
    // console.log(userInput.split(" ").join(""));

    if (userInputChar.length <= 100) {
        setUserText(userInput)
    } else {
        alert("Maximum character limit reached!")        
    }
    // console.log(userInputChar.length);
}

  return (
    <div className='field-comp-container'>
        <h2>How was your day?</h2>
        <textarea onChange={handleChange} value={userText} cols="30" rows="5" placeholder='Enter your text here'></textarea>
        <span>Characters Remaining : {100 - userText.split(" ").join("").length} /100 </span>
    </div>
  )
}
