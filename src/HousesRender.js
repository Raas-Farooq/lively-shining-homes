import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ShiningHouses from './shiningHouseData';
import classes from './app.module.css';
import { useGlobalContext } from './myContext';


const HousesRender = (props) => {
  const {searchInput } = useGlobalContext();
  console.log('searchInput: ', searchInput);
  return (
    <div>
      
      {ShiningHouses.length > 0 ? (
        <ul className={classes.homeCards} >
        {ShiningHouses.map((home, index) => (
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