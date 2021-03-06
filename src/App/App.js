import React,{useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../Home/Home";
import Images from "../Images/Images";
import Rooms from "../Rooms/Rooms";
import Ghosts from "../Ghost/Ghosts";
import Guests from "../Guests/Guests";
import Booking from "../Guests/Booking";
import Footer from "./Footer.js"
import './App.css';

function App() {
  const [roomImage, setRoomImage] = useState([])
  const [ghost, setGhost] = useState([])
  const [guests, setGuests] = useState([])
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
          }else if(seconds < 59){
            setSeconds(seconds + 1)
          }else if(seconds === 59 && minutes < 59){
              setMinutes(minutes + 1)
              setSeconds(0)
          }else if(seconds === 59 && minutes === 59 && hours < 23){
              setHours(hours + 1)
              setMinutes(0)
              setSeconds(0)
          }else if(seconds === 59 && minutes === 59 && hours === 23){
              setDays(days + 1)
              setHours(0)
              setMinutes(0)
              setSeconds(0)}
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
  });

  useEffect(()=> {
    fetch("http://localhost:3000/ghost")
    .then(resp => resp.json())
    .then(item => setGhost(item))
  }, [])

  useEffect(()=> {
    fetch("http://localhost:3000/rooms")
    .then(resp => resp.json())
    .then(item => setRoomImage(item))
  },[])

  useEffect(() => {
    fetch("http://localhost:3000/guest")
    .then(resp => resp.json())
    .then(people => setGuests(people))
  }, [])

  function handleClickFilter(e){
    setChooseRoom(e.target.outerText)
  }

  function handleAddGuest(newGuests){
    setGuests([...guests, newGuests])
  }

  function handleDeleteGuest(item){
    const updatedItem = guests.filter(guest => guest.id !== item.id)
    setGuests(updatedItem)
  }

  const filterRooms = roomImage.filter(item => {
      if(chooseRoom === "All")return true;

      return chooseRoom === item.size
  })

  function handleUpdatedGhosts(item){
      const updatedItem = ghost.map(ghosts =>{
        if(ghosts.id === item.id){
          return item
        }else{
          return ghosts
        }
      })
      setGhost(updatedItem)
  }

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Images room={roomImage} />
        </Route>
        <Route path="/rooms">
          <Rooms room={filterRooms} handleClickFilter={handleClickFilter}/>
        </Route>
        <Route path="/ghosts">
          <Ghosts ghosts={ghost} addToGhost={handleUpdatedGhosts} seconds={seconds} minutes={minutes} hours={hours} days={days} setTimeStopper={setTimeStopper}/>
        </Route>
        <Route path="/guests">
          <Guests people={guests} onGuestDelete={handleDeleteGuest}/>
        </Route>
        <Route path="/booking">
          <Booking addToGuests={handleAddGuest}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
