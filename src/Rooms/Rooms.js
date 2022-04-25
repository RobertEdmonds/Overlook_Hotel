import React from "react";

function Rooms({room, handleClickFilter}){

    const displayRooms = room.map(item => {
        return(
            <div className="divRooms" key={item.id}>
                <img className="imageRooms" src={item.image} alt={item.size}/>
                <h3>{item.size}</h3>
                <h3>Cost Per Night: ${item.price}</h3>
            </div>
        )
    })

    return(
        <>
            <div style={{float: "left" , width: "50px", position: "fixed"}}>
                <button className="buttonRooms" onClick={handleClickFilter}>Two Queen</button>
                <button className="buttonRooms" onClick={handleClickFilter}>King</button>
                <button className="buttonRooms" onClick={handleClickFilter}>Suite</button>
                <button className="buttonRooms" onClick={handleClickFilter}>All</button>
            </div>
            {displayRooms}
        </>
    )
}

export default Rooms;