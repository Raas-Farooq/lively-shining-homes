import React from "react";
import {Link} from 'react-router-dom'

function About(){

    return (
        <div style={{textAlign:"center"}}>
            <div>
                <h2> About</h2>
                <button className="btn btn-warning" style={{position:"absolute", right:"10px", top:"10px"}}><Link to="/" style={{textDecoration:"none"}}> Home </Link></button>
            </div>
            
            <p> These quotes touch on different aspects of the human spirit - its resilience, its connection to nature, its role in our limitations and potential, and its importance in the face of technological progress. Of course, the impact and meaning of quotes can be quite subjective. Would you like me to elaborate on any of these or discuss other perspectives on the human spirit?</p>
        </div>
    )
}

export default About