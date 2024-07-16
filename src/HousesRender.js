import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ShiningHouses from './shiningHouse';
import classes from './app.module.css';

const HousesRender = () => {

  return (
    <div>
      <h2>DREAM HOUSES</h2>
      {ShiningHouses.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 , display:'flex', flexWrap:"wrap", justifyContent:"center"}}>
        {ShiningHouses.map((home, index) => (
          <li key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h3> Home {index + 1}</h3>
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