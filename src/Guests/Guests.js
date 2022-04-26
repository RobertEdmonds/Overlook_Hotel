import React from "react";

function Guests({people, onGuestDelete}){

    function handleDelete(item){
        fetch(`http://localhost:3000/guest/${item.id}`,{
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => onGuestDelete(item))
    }

    
    const displayGuests = people.map(item => {
        return(
            <li className="listGuests" key={item.id}>
                <span>{item.name}</span>
                <span>{item.start_date} -- {item.end_date}</span>
                <span>{item.room}</span>
                <button onClick={() => handleDelete(item)}>Check Out</button>
            </li>)   
    })
    
    return(
        <>
        <ul>
            <li className="listGuestsTitle">
                    <span>Guests Name</span>
                    <span>Check In/Check Out</span>
                    <span>Room Size</span>
                    <span></span>
                </li>
            {displayGuests}
        </ul>
        <div style={{height: "100vh"}}></div>
        </>
    )
}

export default Guests;