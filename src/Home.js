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
        top: "60%",
        left: "50%",
        fontFamily: "Apple Chancery",
    }
    
    const navBarStyle = {
        height: "100px"
    }
    
    
    return(
        <>
        <div style={navBarStyle}></div>
        <div style={homeImageStyle}></div>
        <div style={homeImageText}>
            <h1>Welcome</h1>
            <h1>To The</h1>
            <h1>Beautiful</h1>
            <h1>Overlook Hotel</h1>
        </div>
        <History />
        {/* <div style={divHistoryStyle}>
            <h3 style={titleStyle}>History of the Overlook</h3>
            <ul style={listStyle}>
                <li>1920 - Hotel was built for the rich and famous to get away from the hustle and bustle of the world.</li>
                <li>1929 - 1939 - The great depression. The Hotel sat vacant.</li>
                <li>1942 - A wealthy investor bought the Overlook. He invested over one million dollars to renovate the inside for a more family friendly atmosphere.</li>
                <li>1950 - Mob violence reaches the Overlook, with 5 members of the mob getting brutally murdered in one of the presidential suites.</li>
                <li>1970 - Hotel was sold to its current owner.</li>
            </ul>
        </div> */}
        <Expectation /> 
        </>
    )
}

export default Home;