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
    
    return(
        <div className="divHistory">
            <h3 className="titleHistory">History of the Overlook</h3>
            <ul className="listHistory">
                {displayHistory}
            </ul>
        </div>
    )
}

export default History