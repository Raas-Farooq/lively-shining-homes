import React,{ useEffect, useState } from 'react';
import HousesRender from './HousesRender';

const ShiningHouses =  () => {
    const [housesData, setHousesData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        const fetchData = async() => {
            const url = 'https://realtor-com4.p.rapidapi.com/properties/list-similar-homes?property_id=4017223400';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'dbdb803ad2msh99bd0eafcfce51fp15d924jsnf5d9dddca6b9',
                    'x-rapidapi-host': 'realtor-com4.p.rapidapi.com'
                }
            };


        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setHousesData(result);
            console.log("housesData: ", result);
        } catch (error) {
            setError(error.message)
            console.error(error);
        }
    }
        fetchData();
        
    }, [])

    const parsedData = React.useMemo(() => {
        if (typeof housesData === 'string') {
          try {
            return JSON.parse(housesData);
          } catch (e) {
            console.error("Error parsing housesData:", e);
            return null;
          }
        }
        return housesData;
      }, [housesData]);

    const similarHomes = parsedData?.data?.home?.related_homes?.results || [];

    if (error) return <div>Error: {error}</div>;
    if (!parsedData) return <div>Loading...</div>;
    return (
    
        <div>
            {console.log("hosuesData.data: ", similarHomes)}
            <h2>API Component</h2>
            <HousesRender housesData={similarHomes} />
        </div>
    )

}

export default ShiningHouses;