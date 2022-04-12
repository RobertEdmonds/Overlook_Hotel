import React, {useEffect, useState} from "react";

function Images({room}){
    const [hotelImage, setHotelImage] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/hotel")
        .then(resp => resp.json())
        .then(item => setHotelImage(item))
    },[])
    console.log(room)
    const navBarStyle = {
        height: "100px"
    }
    const leftDivStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        padding: "25px",
        background: "#424c50",
        float: "left"
    }
    const imageStyle = {
        width: "300px",
        height: "200px",
    }
    const rightDivStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        padding: "25px",
        background: "#424c50",
        float: "right"
    }
    
    const tableStyle = {
        background: "black",
        width: "100%"
    }
    const tableManagementStyle = {
        color: "white",
        float: "right"
    }
    const tableContactStyle = {
        color: "white",
        float: "center"
    }
    const tableLocationStyle = {
        color: "white",
        float: "left"
    }
    const displayHotelImage = hotelImage.map(item => {
        if(item.id % 2 === 0){
            return(
                <div style={leftDivStyle}>
                    <img style={imageStyle} key={item.id} src={item.image} alt={item.id}/>
                </div>
            )
        }else{
            return(
                <div style={rightDivStyle}>
                    <img style={imageStyle} key={item.id} src={item.image} alt={item.id}/>
                </div>
            )
        }
    })
    const displayRoomImage = room.map(item => {
        if(item.id % 2 === 0){
            return(
                <div style={rightDivStyle}>
                    <img style={imageStyle} key={item.id} src={item.image} alt={item.id}/>
                </div>
            )
        }else{
            return(
                <div style={leftDivStyle}>
                    <img style={imageStyle} key={item.id} src={item.image} alt={item.id}/>
                </div>
            )
        }
    })
    return(
        <>
        <div style={navBarStyle}></div>
        <div style={{paddingLeft: "50px", paddingRight: "50px", background: "#424c50"}}>
        {displayHotelImage}
        {displayRoomImage}
        </div>
        <table style={tableStyle}>
            <tr>
                <th style={tableLocationStyle}>Location:</th>
                <th style={tableContactStyle}>Contact:</th>
                <th style={tableManagementStyle}>Management:</th>
            </tr>
            <tr>
                <td style={tableLocationStyle}>555 Overlook Pass</td>
                <td style={tableContactStyle}>(303)466-4355</td>
                <td style={tableManagementStyle}>Stuart Ullman</td>
            </tr>
            <tr>
                <td style={tableLocationStyle}>Sidewinder, CO 80064</td>
                <td style={tableContactStyle}>OUT OF SEASON: (303)545-5968</td>
                <td style={tableManagementStyle}>Jack Torrance</td>
            </tr>
        </table>
        </>
    )
}

export default Images;