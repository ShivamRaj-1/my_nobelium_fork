import React, {useState} from 'react'

export default function Compo3() {

    const greet = ["Good Morning,", "Welcome,", "Nice to meet you," , "Have a nice day,"]

    const [count, setCount] = useState(0)

    function handleGreet() {
        setCount(count+1);

        if (count === greet.length-1) {
            setCount(0)
        }
    }

  return (
    <div>

        <h1>{greet[count]} Shivam Raj</h1>

        <button onClick={handleGreet}>Click me!</button>

    </div>
  )
}
