import React, {useState} from 'react'
import './picComp.css'

export default function PicComp(props) {

  const [index, setIndex] = useState(0)


  function handleClick() {
    // console.warn(index);
      if (index === props.source.length - 1) {
        setIndex(index - (props.source.length -1) )
      }else{
        setIndex(index + 1)
      }
      
      
  }
  // console.log(index);

  return (
    <div className='main-div'>
        <div className="container">
            <div className="photo-part">
                <img src={props.source[index]} alt=''/>
            </div>
            <div className="button-part">
                <button onClick={handleClick} >Change Pic</button>
            </div>
        </div>
    </div>
  )
}
