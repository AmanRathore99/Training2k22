import React from "react";
import "./app.css";
import whiskeron from "./images/mr-whiskerson.png";
import icon from "./images/phone-icon.png";
import mailIcon from "./images/mail-icon.png";
import fluffy from "./images/fluffykins.png";
import felix from "./images/felix.png";
import pupmkin from "./images/pumpkin.png";
function App() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={whiskeron} alt="" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={icon} alt="" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={fluffy} alt="" />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src={icon} alt="" />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="" />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={felix} alt="" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src={icon} alt="" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="" />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={pupmkin} alt="" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src={icon} alt="" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
