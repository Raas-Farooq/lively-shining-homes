import React, { useEffect, useState } from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import classes from './app.module.css';
import { useGlobalContext } from './myContext';



const HousesRender = (props) => {


  const {searchInput } = useGlobalContext();
  const [houses, setHouses] = useState([]);


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
            <button className={classes.detail}> Detail </button>
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