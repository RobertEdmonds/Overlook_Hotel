import React from "react";
import Expectation from "./Expectation";
import History from "./History";
import styles from "./Home.module.css";

function Home(){
    const homeImageStyle = {
        backgroundPosition: "0px 0px",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://static01.nyt.com/images/2015/08/28/us/28labyrinthweb1/28labyrinthweb1-superJumbo.jpg")`,
        backgroundSize: "cover",
        paddingTop: "100px",
        height: "300px",
        width: "100%",
        filter: "blur(3px)"
    }
    const homeImageText ={
        position: "absolute",
        zIndex: "2",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        fontFamily: "Apple Chancery",
    }
    
    
    return(
        <>
        <div style={homeImageStyle}></div>
        <div style={homeImageText}>
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