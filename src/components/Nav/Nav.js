import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
//Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faComment } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="topnav">
      <NavLink to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </NavLink>
      <NavLink to="/thoughts">
        <FontAwesomeIcon icon={faComment} /> Thoughts
      </NavLink>
    </nav>
  );
}
