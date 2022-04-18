import React, {useEffect, useState} from "react";

function Images({room}){
    const [hotelImage, setHotelImage] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/hotel")
        .then(resp => resp.json())
        .then(item => setHotelImage(item))
    },[])

    const leftDivStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        padding: "25px",
        background: "#424c50",
        float: "left"
    }
    const imageStyle = {
        width: "400px",
        height: "300px",
    }
    const rightDivStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        padding: "25px",
        background: "#424c50",
        float: "right"
    }
    
    const displayHotelImage = hotelImage.map(item => {
        if(item.id % 2 === 0){
            return(
                <div style={leftDivStyle} key={item.id}>
                    <img style={imageStyle} src={item.image} alt={item.id}/>
                </div>
            )
        }else{
            return(
                <div style={rightDivStyle} key={item.id}>
                    <img style={imageStyle}  src={item.image} alt={item.id}/>
                </div>
            )
        }
    })
    const displayRoomImage = room.map(item => {
        if(item.id % 2 === 0){
            return(
                <div style={rightDivStyle} key={item.id}>
                    <img style={imageStyle} src={item.image} alt={item.id}/>
                </div>
            )
        }else{
            return(
                <div style={leftDivStyle} key={item.id}>
                    <img style={imageStyle} src={item.image} alt={item.id}/>
                </div>
            )
        }
    })
    return(
        <>
        <div style={{paddingLeft: "50px", paddingRight: "50px", background: "#424c50"}}>
        {displayHotelImage}
        {displayRoomImage}
        </div>
        </>
    )
}

export default Images;