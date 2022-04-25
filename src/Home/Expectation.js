import React, {useEffect, useState} from "react";

function Expectation(){
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/expectations")
        .then(resp => resp.json())
        .then(item => setEvent(item))
    }, [])

    const displayExpectations = event.map(item => {
        return (
            <li key={item.id}>{item.event}</li>
        )
    })
   
    return(
        <div className="divExpectation">
            <h3 className="titleExpectation">What To Expect For Your Stay</h3>
            <ol style={{width: "400px"}}>
                {displayExpectations}
            </ol>
        </div>
    )
}

export default Expectation