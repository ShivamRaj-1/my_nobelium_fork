import React from 'react'
import { globalTodoList } from '../../taskListAtom'
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';


export default function Task() {

    const todoList = useRecoilValue(globalTodoList);

    // console.log(todoList);

    return (
        <div>
            <h1>Task to do!</h1>
            
            {
                todoList.map((elements, index) => <li key={index}> {elements} </li>)
            }

            <br /> <br />
            <div>
                <Link to={'/'}>
                    <button >Go to add task</button>
                </Link>
            </div>

        </div>
    )
}
