import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const linkStyles = {
  display: "inline-block",
  float: "right",
  width: "50px",
  height: "20px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#1b4915",
  textDecoration: "none",
  borderRadius: "25%",
  color: "white",
};
const titleStyle ={
    display: "absolute",
  float: "left",
  width: "100px",
  height: "30px",
  fontSize: "25px",
  fontWeight: "bold",
  fontFamily: "Chalkduster",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "rgb(100, 43, 43)",
}

const navBarStyle = {
  height: "100px"
}

function NavBar() {
  return (
    <div style={navBarStyle}>
    <NavLink
        to="/"
        exact
        style={titleStyle}
      >
        Overlook Hotel
      </NavLink>
      <NavLink
        to="/booking"
        exact
        style={linkStyles}
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Booking
      </NavLink>
      <NavLink
        to="/guests"
        exact
        style={linkStyles}
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Guests
      </NavLink>
      <NavLink
        to="/ghosts"
        exact
        style={linkStyles}
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Ghosts
      </NavLink>
      <NavLink
        to="/rooms"
        exact
        style={linkStyles}
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Rooms
      </NavLink>
      <NavLink
        to="/images"
        exact
        style={linkStyles}
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Images
      </NavLink>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Home
      </NavLink>
      
    </div>
  );
}

export default NavBar;