import React, { useState } from 'react'
import { globalTodoList } from '../../taskListAtom'
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

export default function Home() {

    //for user input
    const [input, setInput] = useState('')

    //for global todo list
    const [todoList, setTodoList] = useRecoilState(globalTodoList)

    function handleAdd() {
        if (input === "")
            alert("Input field is empty!")
        else {
            const newTodo = [...todoList, input]
            setTodoList(newTodo)
            setInput("")
        }
    }


    return (
        <div>
            <h1>Add Task:</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            <br /> <br />
            <button onClick={handleAdd}>Add task +</button>
            
            <Link to={'/task'}>
                <button >Check tasks</button>
            </Link>


            

        </div>
    )
}
