import React, {useEffect, useState} from "react";

function History(){
    const [showHistory, setShowHistory] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/history")
        .then(resp => resp.json())
        .then(item => setShowHistory(item))
    }, [])

    const displayHistory = showHistory.map(item => {
        return(
            <li key={item.id}>{item.fact}</li>
        )
    })

    const divHistoryStyle ={
        maxWidth: "100%",
        maxHeight: "400px",
        height: "300px",
        // textAlign: "center",
        backgroundPosition: "0px 40px",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://i.dailymail.co.uk/i/pix/2015/10/31/23/2DFD13E100000578-3298376-_Everyday_felt_like_we_d_been_invited_to_a_very_exclusive_party_-a-1_1446335780138.jpg")`,
        backgroundSize: "contain",
        margin: "50px"
    }

    const listStyle ={
        width: "400px",
        // height: "350px",
        float: "right",

    }

    const titleStyle ={
        fontFamily: "Apple Chancery",
    }
    
    return(
        <div style={divHistoryStyle}>
            <h3 style={titleStyle}>History of the Overlook</h3>
            <ul style={listStyle}>
                {displayHistory}
                {/* <li>1920 - Hotel was built for the rich and famous to get away from the hustle and bustle of the world.</li>
                <li>1929 - 1939 - The great depression. The Hotel sat vacant.</li>
                <li>1942 - A wealthy investor bought the Overlook. He invested over one million dollars to renovate the inside for a more family friendly atmosphere.</li>
                <li>1950 - Mob violence reaches the Overlook, with 5 members of the mob getting brutally murdered in one of the presidential suites.</li>
                <li>1970 - Hotel was sold to its current owner.</li> */}
            </ul>
        </div>
    )
}

export default History