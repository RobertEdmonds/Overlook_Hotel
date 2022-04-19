import React from "react";

function Guests({people}){

    const listStyle ={
        margin:  "1px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 160px 100px",
        columnGap: "8rem",
        alignItems: "center",
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
    
    const displayGuests = people.map(item => {
        const startDay = item.start_date.substring(2)
        const endDay = item.end_date.substring(2)
    
        if(item.start_date.substring(0, 2) === "01" && item.end_date.substring(0, 2) === "01"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>January {startDay} -- January {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "02" && item.end_date.substring(0, 2) === "02"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>February {startDay} -- February {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "03" && item.end_date.substring(0, 2) === "03"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>March {startDay} -- March {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "04" && item.end_date.substring(0, 2) === "04"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>April {startDay} -- April {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "05" && item.end_date.substring(0, 2) === "05"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>May {startDay} -- May {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "06" && item.end_date.substring(0, 2) === "06"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>June {startDay} -- June {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "07" && item.end_date.substring(0, 2) === "07"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>July {startDay} -- July {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "08" && item.end_date.substring(0, 2) === "08"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>August {startDay} -- August {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "09" && item.end_date.substring(0, 2) === "09"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>September {startDay} -- September {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "10" && item.end_date.substring(0, 2) === "10"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>October {startDay} -- October {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "11" && item.end_date.substring(0, 2) === "11"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>November {startDay} -- November {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }else if(item.start_date.substring(0, 2) === "12" && item.end_date.substring(0, 2) === "12"){
            return(
                <li style={listStyle} key={item.id}>
                    <span>{item.name}</span>
                    <span>December {startDay} -- December {endDay}</span>
                    <span>{item.room}</span>
                    <button>Check Out</button>
                </li>)
        }    
    })
    
    return(
        <ul>
            <li style={listTitleStyle}>
                    <span>Guests Name</span>
                    <span>Check In/Check Out</span>
                    <span>Room Size</span>
                    <span></span>
                </li>
            {displayGuests}
        </ul>
    )
}

export default Guests;