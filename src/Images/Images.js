import React, {useEffect, useState} from "react";

function Images({room}){
    const [hotelImage, setHotelImage] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/hotel")
        .then(resp => resp.json())
        .then(item => setHotelImage(item))
    },[])

    
    const displayHotelImage = hotelImage.map(item => {
        if(item.id % 2 === 0){
            return(
                <div className="leftImageDiv" key={item.id}>
                    <img className="image" src={item.image} alt={item.id}/>
                </div>
            )
        }else{
            return(
                <div className="rightImageDiv" key={item.id}>
                    <img className="image"  src={item.image} alt={item.id}/>
                </div>
            )
        }
    })
    const displayRoomImage = room.map(item => {
        if(item.id % 2 === 0){
            return(
                <div className="rightImageDiv" key={item.id}>
                    <img className="image" src={item.image} alt={item.id}/>
                </div>
            )
        }else{
            return(
                <div className="leftImageDiv" key={item.id}>
                    <img className="image" src={item.image} alt={item.id}/>
                </div>
            )
        }
    })
    return(
        <>
        <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
        {displayHotelImage}
        {displayRoomImage}
        </div>
        </>
    )
}

export default Images;