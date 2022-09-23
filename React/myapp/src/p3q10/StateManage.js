import React from "react";
import "./style.css";
export default function StateManage() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  const handleChange = () => {
    if (isGoingOut) {
      setIsGoingOut(false);
    } else {
      setIsGoingOut(true);
    }
  };

  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value" onClick={handleChange}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
