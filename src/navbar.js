import React from "react";
import NavStyles from './app.module.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    
    return(
        <div className={NavStyles.navContainer}>
            <h1> Lively Shining Dream Houses </h1>

            <div className={NavStyles.navBtns}>
                <button className={`${NavStyles.home} btn btn-warning`}> <Link to="/" style={{textDecoration:"none"}}> Home</Link> </button>
                <button className={`${NavStyles.about} btn btn-warning`} ><Link to="about" style={{textDecoration:"none"}} >About</Link> </button>
            </div>
        </div>
    )
}

export default Navbar