import React from 'react'
import { Link} from "react-router-dom";
export default function Navbar(props) {
    return ( 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className = "container-md" >
        <a className = "navbar-brand"
        href = "/" > { props.title } </a>   
        <button type = "button"
        className = "btn btn-light" > Gold22k(833) </button> <
        button type = "button"
        className = "btn btn-dark" > Gold22k(916) </button> <
        button type = "button"
        className = "btn btn-warning" > Gokd18k(750) </button>
        <a href="/About">link text</a>
        
       
        <div className={"form-check form-switch text-${props.mode==='light'?'dark':'ligjt')"}>
  <input className="form-check-input"  onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode switch</label>
</div>
         </div > 
          </nav>
    )
}