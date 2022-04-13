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
    const divExpectationStyle ={
        maxWidth: "100%",
        maxHeight: "400px",
        height: "300px",
        // textAlign: "center",
        backgroundPosition: "100% 40px",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://topiaryart.co.uk/wp-content/uploads/photo-gallery/CBWYH1sWgAERT8z.jpg")`,
        backgroundSize: "contain",
    }
    const titleStyle ={
        fontFamily: "Apple Chancery",
    }
    return(
        <div style={divExpectationStyle}>
            <h3 style={titleStyle}>What To Expect For Your Stay</h3>
            <ol style={{width: "400px"}}>
                {displayExpectations}
            </ol>
        </div>
    )
}

export default Expectation