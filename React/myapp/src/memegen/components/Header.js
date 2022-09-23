import React from "react";
import troll from "../images/troll-face.png";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <header className="header1">
        <img src={troll} className="header--image1" alt="troll-img" />
        <h2 className="header--title1">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
}
