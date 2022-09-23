import React from "react";
import "./Item.css";
const Item = () => {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  const addThing = () => {
    const newThing = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThing]);
  };
  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={addThing}>Add Item</button>
      {thingsElements}
    </div>
  );
};

export default Item;
