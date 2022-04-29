import React,{useState} from "react";
import Cost from "./Cost.js";

function Booking({addToGuests}){
    const [guestName, setGuestName] = useState("")
    const [guestRoom, setGuestRoom] = useState("Two Queen")
    const [guestMonth, setGuestMonth] = useState("January")
    const [startDay, setStartDay] = useState("01")
    const [endDay, setEndDay] = useState("01")
    const [errorMessage, setErrorMessage] = useState("none")

    const startDate = (guestMonth + " " + startDay)
    const endDate = (guestMonth + " " + endDay)

    function handleSubmit(e){
        e.preventDefault()
        const dataForm = {
            name: guestName,
            start_date: startDate,
            end_date: endDate,
            room: guestRoom
        }
        if(parseInt(startDay) >= parseInt(endDay)){
                setErrorMessage("block")
        }else{
            setErrorMessage('none')
            fetch("http://localhost:3000/guest",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataForm)
            })
            .then(resp => resp.json())
            .then(item => addToGuests(item))
            setGuestName("")
            setGuestRoom("Two Queen")
            setGuestMonth("January")
            setStartDay("01")
            setEndDay("01")
        }
    }

    return(
            <>
            <div className="errorBooking">
                <h1 style={{display: errorMessage}}>Correct Check Out Date</h1>
            </div>
            <form onSubmit={handleSubmit} className="listBooking">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder= "First/ Last Name"
                        value={guestName}
                        onChange={(e)=> setGuestName(e.target.value)}
                    />
                </label>
                <label>
                    Room:
                    <select
                        name="room"
                        value={guestRoom}
                        onChange={(e)=> setGuestRoom(e.target.value)}
                    >
                        <option value="Two Queen">Two Queen</option>
                        <option value="King">King</option>
                        <option value="Suite">Suite</option>
                    </select>
                </label>
                <label>
                    Check In:
                    <select
                        name="start_month"
                        value={guestMonth}
                        onChange={(e)=> setGuestMonth(e.target.value)}
                    >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    /
                    <select 
                        name="start_day"
                        value={startDay}
                        onChange={(e)=>setStartDay(e.target.value)}
                    >
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="28">29</option>
                        <option value="28">30</option>
                    </select>
                </label>
                <label>
                    Check Out Day:
                    <select 
                        name="end_day"
                        value={endDay}
                        onChange={(e)=> setEndDay(e.target.value)}
                    >
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="28">29</option>
                        <option value="28">30</option>
                    </select>
                </label>
                <button type="submit">Save My Room</button>
            </form>
            <Cost startDay={startDay} endDay={endDay} room={guestRoom}/>
            </>
            )
}

export default Booking;