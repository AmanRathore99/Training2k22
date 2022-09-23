import React from "react";
import logo from "../logo.svg";
import "./Application.css";
const Application = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src={logo} className="App-logo" alt="logo" width="50px" />
          <h1>ReactFacts</h1>
          <h2 className="nav-item">React Course - Project 1</h2>
        </nav>
      </header>
      <section>
        <h1>Fun facts about React</h1>
        <ul className="ulist">
          <li>Was first released in 2013</li>
          <li>Was oringinally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </section>
    </div>
  );
};

export default Application;
