import React from "react";

function Rooms({room, handleClickFilter}){

    const divStyle ={
        border: "2px solid rgb(100, 43, 43)",
        padding: "25px",
    }
    const imageStyle = {
        width: "450px",
        height: "350px"
    }
    const buttonDisplay = {
        width: "50px",
        height: "40px",
        background: "#1b4915",
        borderRadius: "25%",
        color: "gold",
        margin: "5px"
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
            <div style={{float: "left" , width: "50px", position: "fixed"}}>
                <button style={buttonDisplay} onClick={handleClickFilter}>Two Queen</button>
                <button style={buttonDisplay} onClick={handleClickFilter}>King</button>
                <button style={buttonDisplay} onClick={handleClickFilter}>Suite</button>
                <button style={buttonDisplay} onClick={handleClickFilter}>All</button>
            </div>
            {displayRooms}
        </>
    )
}

export default Rooms;