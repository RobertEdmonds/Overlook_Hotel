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

    const displayGhost = ghosts.map(item => {
        return(
            <div style={{margin: "70px"}} key={item.id}>
                <img className="imageGhosts" src={item.image} alt={item.name}/>
                <h3 className="h_Ghosts">{item.name}</h3>
                <h3 className="h_Ghosts">{item.likes}</h3>
                <button className="buttonGhosts" onClick={() => handleSightingsClick(item)}>Sighting</button>
            </div>
        )
    })
    return(
        <>
            <h1 className="h_Ghosts">Time Since Last Ghost Spotting</h1> 
            <h1 className="h_Ghosts">{hours} : {minutes} : {seconds}</h1>
            <h1 className="h_Ghosts">Days {days}</h1>
            {displayGhost}
        </>
    )
}

export default Ghosts;