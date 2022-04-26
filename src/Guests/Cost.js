import React from "react";

function Cost({startDay, endDay, room}){

    if(((parseInt(endDay)- parseInt(startDay))*1) <= 0){
        return(
            <div style={{height: "100vh"}}>
                <h1>Please Enter Valid Dates</h1>
            </div>
        )
    }else if(room === "Two Queen"){
        return(
            <div className="divCost">
                <h1>Starting At ${((parseInt(endDay)- parseInt(startDay))*1) * 150}</h1>
            </div>
        )
    }else if(room === "King"){
        return(
            <div className="divCost">
                <h1>Starting At ${((parseInt(endDay)- parseInt(startDay))*1) * 250}</h1>
            </div>
        )
    }else if(room === "Suite"){
        return(
            <div className="divCost">
                <h1>Starting At ${((parseInt(endDay)- parseInt(startDay))*1) * 350}</h1>
            </div>
        )
    }

}

export default Cost