import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "absolute",
  float: "right",
  width: "50px",
  height: "20px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
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

function NavBar() {
  return (
    <div>
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
          background: "darkblue",
        }}
      >
        Booking
      </NavLink>
      <NavLink
        to="/guests"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Guests
      </NavLink>
      <NavLink
        to="/ghosts"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Ghosts
      </NavLink>
      <NavLink
        to="/rooms"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Rooms
      </NavLink>
      <NavLink
        to="/images"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Images
      </NavLink>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      
    </div>
  );
}

export default NavBar;