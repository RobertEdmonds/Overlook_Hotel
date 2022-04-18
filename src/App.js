import React,{useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Images from "./Images";
import Rooms from "./Rooms";
import Ghosts from "./Ghosts";
import Guests from "./Guests";
import Booking from "./Booking";
import Footer from "./Footer.js"
import './App.css';

function App() {
  const [roomImage, setRoomImage] = useState([])
  const [getGhost, setGetGhost] = useState([])
  const [chooseRoom, setChooseRoom] = useState("All")
  const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours,  setHours] = useState(0)
    const [days, setDays] = useState(0)
    const [timeStopper, setTimeStopper] = useState(false)


    useEffect(() => {
        let myInterval = setInterval(() => {
            if(timeStopper === true){
                setDays(0)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
                setTimeStopper(false)
            }else if(seconds === 60 && minutes < 60){
                setMinutes(minutes + 1)
                setSeconds(0)
            }else if(seconds === 60 && minutes === 60 && hours < 24){
                setHours(hours + 1)
                setMinutes(0)
                setSeconds(0)
            }else if(seconds === 60 && minutes === 60 && hours === 24){
                setDays(days + 1)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
            }else if(seconds < 60){
                setSeconds(seconds + 1)
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

  useEffect(()=> {
    fetch("http://localhost:3000/ghost")
    .then(resp => resp.json())
    .then(item => setGetGhost(item))
  }, [])

  useEffect(()=> {
    fetch("http://localhost:3000/rooms")
    .then(resp => resp.json())
    .then(item => setRoomImage(item))
  },[])

  function handleClickFilter(e){
    setChooseRoom(e.target.outerText)
  }

  const filterRooms = roomImage.filter(item => {
      if(chooseRoom === "All")return true;

      return chooseRoom === item.size
  })

  function handleUpdatedGhosts(item){
      const updatedItem = getGhost.map(ghosts =>{
        if(ghosts.id === item.id){
          return item
        }else{
          return ghosts
        }
      })
      setGetGhost(updatedItem)
  }

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/images">
          <Images room={roomImage} />
        </Route>
        <Route path="/rooms">
          <Rooms room={filterRooms} handleClickFilter={handleClickFilter}/>
        </Route>
        <Route path="/ghosts">
          <Ghosts ghosts={getGhost} addToGhost={handleUpdatedGhosts} seconds={seconds} minutes={minutes} hours={hours} days={days} setTimeStopper={setTimeStopper}/>
        </Route>
        <Route path="/guests">
          <Guests />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
      </Switch>
      <Footer />
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
