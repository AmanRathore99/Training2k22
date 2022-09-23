import React from "react";
import photogrid from "./images/photo-grid.png";
export default function Hero() {
  return (
    <div>
      <section className="hero">
        <img src={photogrid} className="hero--photo" alt="grid" />
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activies lead by one-of-a-kind hosts-all
          without leaving home
        </p>
      </section>
    </div>
  );
}
