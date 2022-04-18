import React from "react";

function Ghosts({ghosts, addToGhost, seconds, minutes, hours, days, setTimeStopper }){

    function handleSightingsClick(item){
        setTimeStopper(true)
        const itemData = {
            likes: item.likes + 1
        }
        fetch(`http://localhost:3000/ghost/${item.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemData)
        })
        .then(resp => resp.json())
        .then(thing => {
            addToGhost(thing)
        })
    }

    const buttonDisplay = {
        width: "100px",
        height: "40px",
        background: "#1b4915",
        borderRadius: "50%",
        color: "gold",
        fontWeight: "bold",
        margin: "5px"
    }

    const imageStyle = {
        width: "250px",
        height: "400px"
    }

    const hStyle = {
        fontFamily: "Chalkduster",
        color: "rgb(100, 43, 43)"
    }

    const displayGhost = ghosts.map(item => {
        return(
            <div style={{margin: "25px"}} key={item.id}>
                <img style={imageStyle} src={item.image} alt={item.name}/>
                <h3 style={hStyle}>{item.name}</h3>
                <h3 style={hStyle}>{item.likes}</h3>
                <button style={buttonDisplay} onClick={() => handleSightingsClick(item)}>Sighting</button>
            </div>
        )
    })
    return(
        <>
            <h1 style={hStyle}>Time Since Last Ghost Spotting</h1> 
            <h1 style={hStyle}>{hours} : {minutes} : {seconds}</h1>
            <h1 style={hStyle}>Days {days}</h1>
            {displayGhost}
        </>
    )
}

export default Ghosts;