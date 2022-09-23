import React from "react";
// import Header from "./memegen/components/Header";
import Meme from "./memegen/components/Meme";
// import Navbar from "./airbnb/Navbar";
// import Card from "./airbnb/Card";
// import data from "./airbnb/data";
//import Item from "./demo3/Item";
//import Counter from "./p3q7/Counter";
//import Demo from "./p3q8/Demo";
//import StateManage from "./p3q10/StateManage";
//import Form from "./LAB-p4q2/Form";
//import FormDemo from "./LAB-p4q3/FormDemo";
//import SignUp from "./SignupPage/SignUp";
export default function Main() {
  return (
    <div>
      <Meme />
      {/* <Item /> */}
      {/* <Demo /> */}
      {/* <Header />
      <Meme /> */}
      {/* <Navbar />
      {data.map((value) => {
        return (
          <Card
            img={value.coverImg}
            rating={value.stats.rating}
            reviewCount={value.stats.reviewCount}
            country={value.location}
            title={value.title}
            price={value.price}
          />
        );
      })} */}
    </div>
  );
}
