import React from "react";
import logo from "../../logo.svg";
export default function Header() {
  return (
    <header className="header">
      <nav>
        <img src={logo} className="App-logo" alt="logo" width="50px" />
        <ul className="nav-items">
          <li className="list">Tutorial</li>
          <li className="list">About</li>
          <li className="list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
