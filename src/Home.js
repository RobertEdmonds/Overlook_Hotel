import React from "react";

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
    const historyImageStyle = {
        height: "250px",
        width: "300px",
        float: "left",
    }
    const listStyle ={
        width: "400px",
        paddingLeft: "350px"
    }
    const navBarStyle = {
        height: "100px"
    }
    const expectationImageStyle = {
        width: "300px",
        height: "250px",
        float: "right"
    }
    const titleStyle ={
        fontFamily: "Apple Chancery",
    }
    const tableStyle = {
        background: "black",
        width: "100%"
    }
    const tableManagementStyle = {
        color: "white",
        float: "right"
    }
    const tableContactStyle = {
        color: "white",
        float: "center"
    }
    const tableLocationStyle = {
        color: "white",
        float: "left"
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
        <div>
            <img style={historyImageStyle} src="https://i.dailymail.co.uk/i/pix/2015/10/31/23/2DFD13E100000578-3298376-_Everyday_felt_like_we_d_been_invited_to_a_very_exclusive_party_-a-1_1446335780138.jpg" alt="Family Fun"/>
            <h3 style={titleStyle}>History of the Overlook</h3>
            <ul style={listStyle}>
                <li>1920 - Hotel was built for the rich and famous to get away from the hustle and bustle of the world.</li>
                <li>1929 - 1939 - The great depression. The Hotel sat vacant.</li>
                <li>1942 - A wealthy investor bought the Overlook. He invested over one million dollars to renovate the inside for a more family friendly atmosphere.</li>
                <li>1950 - Mob violence reaches the Overlook, with 5 members of the mob getting brutally murdered in one of the presidential suites.</li>
                <li>1970 - Hotel was sold to its current owner.</li>
            </ul>
        </div>
        <div>
            <img style={expectationImageStyle} src="https://topiaryart.co.uk/wp-content/uploads/photo-gallery/CBWYH1sWgAERT8z.jpg" alt="What to expect"/>
            <h3 style={titleStyle}>What To Expect For Your Stay</h3>
            <ol>
                <li>World class staff waiting on you hand and foot.</li>
                <li>Coplimentary turn down service.</li>
                <li>Room service 24/7</li>
                <li>Free admition into our 3 square acre maze.</li>
                <li>Excitment around every corner.</li>
                <li>Tennis courts</li>
                <li>Play ground for the little ones</li>
                <li>Full kitchen staff. To make whatever your heart desires.</li>
                <li>Enjoy the fresh mountian air with senic veiws.</li>
                <li>Nightly ballroom dancing.</li>
                <li>Nightly visits from beonde the grave and so much more fun.</li>
            </ol>
        </div>
        <table style={tableStyle}>
            <tr>
                <th style={tableLocationStyle}>Location:</th>
                <th style={tableContactStyle}>Contact:</th>
                <th style={tableManagementStyle}>Management:</th>
            </tr>
            <tr>
                <td style={tableLocationStyle}>555 Overlook Pass</td>
                <td style={tableContactStyle}>(303)466-4355</td>
                <td style={tableManagementStyle}>Stuart Ullman</td>
            </tr>
            <tr>
                <td style={tableLocationStyle}>Sidewinder, CO 80064</td>
                <td style={tableContactStyle}>OUT OF SEASON: (303)545-5968</td>
                <td style={tableManagementStyle}>Jack Torrance</td>
            </tr>
        </table>
        </>
    )
}

export default Home;