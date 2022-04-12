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
