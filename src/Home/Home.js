import React from "react";
import Expectation from "./Expectation";
import History from "./History";

function Home(){

    return(
        <>
        <div className="homeImage"></div>
        <div className="homeImageText">
            <h1>Welcome</h1>
            <h1>To The</h1>
            <h1>Beautiful</h1>
            <h1>Overlook Hotel</h1>
        </div>
        <History />
        <Expectation /> 
        </>
    )
}

export default Home;