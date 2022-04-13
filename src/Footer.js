import React from "react";

function Footer(){
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
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={tableLocationStyle}>Location:</th>
                    <th style={tableContactStyle}>Contact:</th>
                    <th style={tableManagementStyle}>Management:</th>
                </tr>
            </thead>
            <tbody>    
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
            </tbody>    
        </table>
    )
}

export default Footer