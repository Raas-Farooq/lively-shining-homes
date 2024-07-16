import React from "react";
import NavStyles from './app.module.css';


const Navbar = () => {
    
    return(
        <div className={NavStyles.navContainer}>
            <h1> Lively Shining Dream Houses </h1>

            <div className={NavStyles.navBtns}>
                <button className={NavStyles.home} > Home </button>
                <button className={NavStyles.about} > About </button>
            </div>
        </div>
    )
}

export default Navbar