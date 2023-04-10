import React, {useState} from 'react'

export default function Compo1() {

    const [list, setList] = useState([]);

    function handleClick() {
        const rn = Math.round(Math.random() * 1000)

        setList([...list, rn])

    }

  return (
    <div>
        <h1>Random number generator.</h1>
        <button onClick={handleClick}>Generate</button>

        <br /> <br />

        <table border='1px' cellPadding='10px'>
           <thead>
           <tr>
                <th>S.No.</th>
                <th>Generated Number</th>
            </tr>
           </thead>

            <tbody>

                {
                    list.map((element, index)=>{
                        return (
                            <tr key={index}> 
                                <td>{index+1}</td>
                                <td>{element}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
           

        </table>

        
    </div>
  )
}
