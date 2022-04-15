import React from "react";

function Rooms({room}){
    const divStyle ={
        border: "2px solid rgb(100, 43, 43)",
        padding: "25px"
    }
    const imageStyle = {
        width: "450px",
        height: "350px"
    }
    const displayRooms = room.map(item => {
        return(
            <div style={divStyle} key={item.id}>
                <img style={imageStyle} src={item.image} alt={item.size}/>
                <h3>{item.size}</h3>
                <h3>Cost Per Night: ${item.price}</h3>
            </div>
        )
    })
    return(
        <>
            <div style={{float: "left" , width: "50px"}}>hello</div>
            {displayRooms}
        </>
    )
}

export default Rooms;