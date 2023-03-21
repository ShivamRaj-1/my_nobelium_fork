import React, {useState} from 'react'
import myStyle from "./navbar.module.css"
import logo from './logo.jpg'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    function showMenu() {
        document.getElementById("menuList").style.right = '0px'
        document.getElementById("menuBtn").style.right = '0px'
        // console.log('showMenu clicked');
        setToggle(!toggle)

    }

    function hideMenu(){
        document.getElementById("menuList").style.right = '-400px'
        document.getElementById("menuBtn").style.right = '-400px'
        // console.log('hideMenu clicked');
        setToggle(!toggle)
    }

    return (
        <div className={myStyle.mainNavbarDiv}>

            <div className={myStyle.navInnerDiv}>
                <div className={myStyle.mainLogo}>
                    <img src={logo} alt="" />
                    Onclick
                </div>

                <div className={myStyle.listMain} id="menuList" >                    
<i className="fa fa-times" onClick={hideMenu}></i>
                    <div className={myStyle.list}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>About Us</li>
                    </div>
                </div>
            </div>

            <div className={myStyle.btnsDiv}>

                <div className={myStyle.btns} id="menuBtn">
                    <button className={myStyle.loginBtn}>Login</button>
                    <button className={myStyle.signupBtn}>Sign Up</button>
                </div>

                <i className="fa fa-bars" onClick={showMenu}></i>

            </div>

        </div>
    )
}
