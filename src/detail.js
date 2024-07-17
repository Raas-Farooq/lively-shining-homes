import React,{useEffect, useState} from "react";
import { useGlobalContext } from "./myContext";
import { Link } from "react-router-dom";
import ShiningHouses from "./shiningHouseData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import myStyles from './app.module.css';


function Detail(){

    const {homeId, housesData} = useGlobalContext();
    const [houseDetail, setHouseDetail] = useState('');
    const [error,  setError] = useState(null);
    


    useEffect(() => {
        try{
            const clickedHouse = ShiningHouses.filter(house => house.id === homeId);
        
        if(clickedHouse.length === 0){
            throw new Error('House not found');
            
        }
        setHouseDetail(clickedHouse);
    }
        catch(error){ 
            
            setError(true);
            console.log("No House Data Avaiable.. Plz Try Again")
        }
        
        
        console.log("houseDetail: ", houseDetail);
    },[homeId])

    if (error) return <div className={myStyles.error}> <h2>Something is Causing Issue. Plz Try Again</h2> <button className="btn btn-warning"><Link to="/">BackHome</Link></button></div>


    return(
        <div className={myStyles.detailContainer}>
          <div>
            <button className={`${myStyles.homeBtnDetail} btn btn-warning`}><Link to="/" style={{textDecoration:"none"}}> Back To HOME </Link></button>
          </div>  
         <div>
         {houseDetail.length > 0 ? (
            <ul className={myStyles.detailCardParent}>
                {houseDetail.map((house,ind) => 
                    <li key={ind} className={myStyles.detailCard}>
                        <>
                            <h2>{house.name} </h2>
                            <LazyLoadImage
                            src={house.image} style={{marginBottom:"15px",width:300, height:350, boxShadow:"0 2px 5px"}}
                            />
                            <p  style={{fontWeight:"bolder"}}> <span className={myStyles.detailPrice}> PRICE </span>{house.price}</p>
                            <p style={{fontWeight:"bolder"}}> <span className={myStyles.detailArea}>AREA  </span>{house.area}</p>
                            <p style={{fontWeight:"bolder"}}> <span className={myStyles.detailStatus}>STATUS  </span>{house.status}</p>
                            <p style={{fontWeight:"bolder"}}> <span className={myStyles.detailLocation}>Location </span>{house.location}</p>
                            <p style={{fontWeight:"bolder"}}> <span className={myStyles.detailAddress}>Address </span>{house.address}</p>
                            <p style={{fontWeight:"bolder"}}> <span className={myStyles.detailPhone}>Phone  </span>{house.UAN}</p>
                         </>
                    </li>
                
                )}
            </ul>
            ):
            <>
                <h2> ...Loading</h2>
            </>
         }
         </div>
         
        </div>
    )
}

export default Detail



            