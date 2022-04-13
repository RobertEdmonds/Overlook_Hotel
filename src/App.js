import React,{useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Images from "./Images";
import Rooms from "./Rooms";
import Ghosts from "./Ghosts";
import Guests from "./Guests";
import Booking from "./Booking";
import './App.css';

function App() {
  const [roomImage, setRoomImage] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/rooms")
    .then(resp => resp.json())
    .then(item => setRoomImage(item))
  },[])

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
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/images">
          <Images room={roomImage}/>
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/ghosts">
          <Ghosts />
        </Route>
        <Route path="/guests">
          <Guests />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
      </Switch>
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
