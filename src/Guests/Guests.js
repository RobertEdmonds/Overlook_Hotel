import React from "react";

function Guests({people, onGuestDelete}){

    const listStyle ={
        margin:  "1px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 160px 100px",
        columnGap: "8rem",
        alignItems: "center",
        marginBottom: "10px",
        borderRadius: "4px"
      }

    const listTitleStyle = {
        margin:  "1px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 160px 100px",
        columnGap: "8rem",
        alignItems: "center",
        fontWeight: "bold",
        borderRadius: "4px"
    }
    function handleDelete(item){
        fetch(`http://localhost:3000/guest/${item.id}`,{
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => onGuestDelete(item))
    }

    
    const displayGuests = people.map(item => {
        return(
            <li style={listStyle} key={item.id}>
                <span>{item.name}</span>
                <span>{item.start_date} -- {item.end_date}</span>
                <span>{item.room}</span>
                <button onClick={() => handleDelete(item)}>Check Out</button>
            </li>)   
    })
    
    return(
        <>
        <ul>
            <li style={listTitleStyle}>
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