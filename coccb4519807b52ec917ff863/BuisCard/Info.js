import React from "react"
import About from "./About.js"

export default function Main(){
    return (
        <div className = "main-div">
            <img className = "myPic" src = "./images/myPic.jpg"/>
            <h1 className = "name-text">Somansh</h1>
            <h4 className = "role-text">Software Developer</h4>
            <h5 className = "email-text">somanshpp@gmail.com</h5>
            <button id = "btn" className = "btn1" namespace = "Email" href="">Gmail</button>
            <a href = "www.linkedin.com/in/somanshh" > <button id = "btn" className = "btn2" namespace = "Linkedin" >Linkedin</button> </a>
        </div>
    )
}