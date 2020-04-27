import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../media/molecule.svg"

const iconStyle = {
    width: '30px',
    height: 'auto',
    marginRight: '10px'
}

const rowFlex = {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
}

const navStyle = {
    padding: '28px'
}


const NavBar = () => {
  return (
    <div style={rowFlex}>
      <NavLink to="/" exact>
        <div style={rowFlex}>
          <img className="App-logo" style={iconStyle} src={icon} alt="oh no!"/>
          <h2>UCL Chemistry</h2>
        </div>
      </NavLink>
      <div style={rowFlex}>
          <NavLink style={navStyle} to="/team-fun" exact >Gallery</NavLink>
          <NavLink style={navStyle} to="/meet-the-team" exact >Meet The Team</NavLink>
          <NavLink style={navStyle} to="/science-article" exact >The Science</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
