import React, {useState} from 'react'

export default function Compo2() {

    const [data , setData] = useState([])

    function handleOver() {

        const time = new Date().toLocaleString()
        // console.log(time);
        setData([ ...data , {"time": time, "eventName": "in" }])
    }

    function handleOut() {
        const time = new Date().toLocaleString()
        // console.log(time);
        setData([ ...data , {"time": time, "eventName": "out" }])
    }

  return (
    <div>

        <h1 onMouseOver={handleOver} onMouseOut={handleOut}>This is heading 1. Hover here to see changes.</h1>

        <h2>This is heading 2.</h2>

        <div>This is a div.</div>


        <table border='1px' cellPadding='10px'>
           <thead>
           <tr>
                <th>S.No.</th>
                <th>Time</th>
                <th>Event</th>
            </tr>
           </thead>

            <tbody>

                {
                    data.map((element, index)=>{
                        return (
                            <tr key={index}> 
                                <td>{index+1}</td>
                                <td>{element.time}</td>
                                <td>{element.eventName}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
           

        </table>

    </div>
  )
}
