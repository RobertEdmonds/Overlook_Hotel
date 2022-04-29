import React from "react";
import { NavLink } from "react-router-dom";

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


function NavBar() {
  return (
    <div className="navBar">
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
        className="link"
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Booking
      </NavLink>
      <NavLink
        to="/guests"
        exact
        className="link"
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Guests
      </NavLink>
      <NavLink
        to="/ghosts"
        exact
        className="link"
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Ghosts
      </NavLink>
      <NavLink
        to="/rooms"
        exact
        className="link"
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Rooms
      </NavLink>
      <NavLink
        to="/gallery"
        exact
        className="link"
        activeStyle={{
          background: "rgb(100, 43, 43)",
        }}
      >
        Gallery 
      </NavLink>
      <NavLink
        to="/"
        exact
        className="link"
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