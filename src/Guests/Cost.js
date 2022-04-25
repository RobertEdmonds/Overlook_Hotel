import React from "react";

function Cost({startDay, endDay, room}){

    if(((parseInt(endDay)- parseInt(startDay))*1) <= 0){
        return(
            <div>
                <h1>Please Enter Valid Date's</h1>
            </div>
        )
    }else if(room === "Two Queen"){
        return(
            <div>
                <h1>Starting At ${((parseInt(endDay)- parseInt(startDay))*1) * 150}</h1>
            </div>
        )
    }else if(room === "King"){
        return(
            <div>
                <h1>Starting At ${((parseInt(endDay)- parseInt(startDay))*1) * 250}</h1>
            </div>
        )
    }else if(room === "Suite"){
        return(
            <div>
                <h1>Starting At ${((parseInt(endDay)- parseInt(startDay))*1) * 350}</h1>
            </div>
        )
    }

}

export default Cost