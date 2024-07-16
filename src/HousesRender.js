import React from 'react';

const HousesRender = ({ housesData }) => {

  return (
    <div>
      <h2>Similar Homes</h2>
      {housesData.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
        {housesData.map((home, index) => (
          <li key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h3>Home {index + 1}</h3>
            {home.primary_photo && (
              <img 
                src={home.primary_photo.href} 
                alt={`Home ${index + 1}`} 
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            )}
            <p>Price: ${home.list_price}</p>
            <p>Beds: {home.description.beds}</p>
            <p>Baths: {home.description.baths_full}</p>
            <p>Sqft: {home.description.sqft}</p>
            <p>Address: {home.location.address.line}, {home.location.address.city}, {home.location.address.state} {home.location.address.postal_code}</p>
            <img src="https://ap.rdcpix.com/628e4ef8dd44c7f407e5dad3b578121fl-m2134610750rd-w960_h720.webp?w=640&q=75" width="200px" height="250px" />
            {home.permalink && (
              <a href={`https://www.realtor.com/realestateandhomes-detail/${home.permalink}`} target="_blank" rel="noopener noreferrer">
                View on Realtor.com
              </a>
            )}
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