import React from "react";

function Footer(){
    
    return(
        <table className="table">
            <thead>
                <tr>
                    <th className="tableLocation">Location:</th>
                    <th className="tableContact">Contact:</th>
                    <th className="tableManagement">Management:</th>
                </tr>
            </thead>
            <tbody>    
                <tr>
                    <td className="tableLocation">555 Overlook Pass</td>
                    <td className="tableContact">(303)466-4355</td>
                    <td className="tableManagement">Stuart Ullman</td>
                </tr>
                <tr>
                    <td className="tableLocation">Sidewinder, CO 80064</td>
                    <td className="tableContact">OUT OF SEASON: (303)545-5968</td>
                    <td className="tableManagement">Jack Torrance</td>
                </tr>
            </tbody>    
        </table>
    )
}

export default Footer