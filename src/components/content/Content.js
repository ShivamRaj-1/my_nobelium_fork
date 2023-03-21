import React from 'react'
import background from "./background.jpg"
import style from './content.module.css'
import btnLogo from './btnLogo.jpg'


export default function Content() {
  return (
    <div className={style.contentMain}>
        <div className={style.contentPart}> 
            <p>TOTALLY FREE</p>
            <h1><span>I</span> Let's bring your <br /> team together <br /> in onclick</h1>
            <p>We help you to manage all your Work <br /> and daily task in office</p>
            <div className={style.btnDiv}>
                <button className={style.btn1}>Get Started</button>
                <button className={style.btn2}> <img src={btnLogo} alt="" /> How to use</button>
            </div>
        </div>
        <div className={style.imagePart}>
            <img src={background} alt="" />
        </div>
    </div>
  )
}
