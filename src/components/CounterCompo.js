import React, {useState} from 'react'

export default function CounterCompo() {

    const [count, setCount] = useState(0)

    function handleInc() {
        setCount(count + 1)
    }

    function handleDec() {
        if (count === 0) {
            alert("Number is already 0 !")
        } else {
            setCount(count - 1)
        }
    }

  return (
    <div className='counterCompo'>
        <h2>Challenge 2:</h2>
        <div>
            <h1>{count}</h1>
            <button onClick={handleInc}>Increase Count</button>
            <button onClick={handleDec}>Decrease Count</button>
        </div>
    </div>
  )
}
