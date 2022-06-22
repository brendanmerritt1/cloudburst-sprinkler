import React from 'react'
import 'styles/navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logoContainer">
            <img src={require("../../assets/cloudburstLogo.png")} alt="Cloudburst Lawn Sprinkler Systems" className='logo'/>
        </div>
        <div className="navContainer">
            <div className="navItem">Home</div>
            <div className="navItem">Our Services {/*construction, design/planning, rainwater collection tabs*/}</div>
            <div className="navItem">Gallery</div>
            <div className="navItem">About Us</div>
            <div className="navItem">Employment</div>
            <div className="navItem">Contact Us</div>
        </div>
    </div>
  )
}
