import React from "react";
import star from "./images/star.png";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{props.rating}</span>
        <span>{props.reviewCount} </span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}
