import React, {useState} from 'react'

export default function NameCompo() {

    const [name, setName] = useState('Amit')

    function handleClick() {
        
        let changeName = (name === 'Amit') ? 'Rajan' : 'Amit'
        setName(changeName)
    }

  return (
    <div className='nameCompo'>
        <h2>Challenge 3:</h2>
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}
