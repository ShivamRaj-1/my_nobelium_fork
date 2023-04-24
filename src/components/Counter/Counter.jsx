import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from '../../actions/index'

function Counter() {

    const myState = useSelector( (state)=> state.changeNumber)
    const dispatch = useDispatch()

  return (
    <div>

        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div>
            <a> <span> - </span> </a>
            <input type="text" value={myState} />
            <a onClick={ ()=> dispatch(incNumber()) }> <span> + </span> </a>
        </div>

    </div>
  )
}

export default Counter