import React from "react";
import "./Navbar.css";
import airbnb from "./images/airbnb-logo.png";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src={airbnb} alt="airbnb-logo" />
        </nav>
      </header>
    </div>
  );
}
