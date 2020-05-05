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
          <NavLink className="navLink text-decor" to="/team-fun" exact ><strong>Gallery</strong></NavLink>
          <NavLink className="navLink text-decor" to="/meet-the-team" exact ><strong>Meet The Team</strong></NavLink>
          <NavLink className="navLink text-decor" to="/science-article" exact ><strong>The Science</strong></NavLink>
      </div>
    </div>
  );
};

export default NavBar;
