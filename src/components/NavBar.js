import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../media/molecule.svg"

const NavBar = () => {
  return (
    <div className="navDiv">
      <NavLink className="text-decor" to="/" exact>
        <div className="rowFlex">
          <img className="App-logo" src={icon} alt="oh no!"/>
          <h2 className="text-1">UCL</h2> <h2 className="text-2">Chemistry</h2>
        </div>
      </NavLink>
      <div className="rowFlex">
          <NavLink className="navLink text-decor" to="/team-fun" exact >Gallery</NavLink>
          <NavLink className="navLink text-decor" to="/meet-the-team" exact >Meet The Team</NavLink>
          <NavLink className="navLink text-decor" to="/science-article" exact >The Science</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
