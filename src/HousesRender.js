import React, { useEffect, useState } from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import classes from './app.module.css';
import { useGlobalContext } from './myContext';
import { Link } from 'react-router-dom';


const HousesRender = (props) => {


  const {searchInput, handleHomeId } = useGlobalContext();
  
  
  const handleDetail = (id, name) => {
    handleHomeId(id);
    console.log("id: ", id + "name: ", name);
  }
  

  return (
    <div>
      
      {props.data.length > 0 ? (
        <ul className={classes.homeCards} >
        {props.data.map((home, index) => (
          <li key={index} className={classes.singleCard} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h3> </h3>
            {home.image && (
              <LazyLoadImage 
                src={home.image} 
                alt={`Home ${index + 1}`} 
                effect='blur'
                style={{ width: '280px', height: '250px' }}
              />
            )}
             
            <p> <span className={classes.priceSpan}> Price: </span> ${home.price}</p>
            <p className={classes.location}>Location: {home.location}</p> 
            <button onClick={() => handleDetail(home.id, home.name)} className={`${classes.detailBtn} btn btn-danger`}> <Link to="detail" style={{textDecoration:'none', color:'white'}}> Detail </Link> </button>
          </li>
        ))}
      </ul>
      ) : (
        <p>No similar homes found.</p>
      )}
    </div>
  );
};

export default HousesRender;