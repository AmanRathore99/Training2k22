import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confpassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = (e) => {
    if (formData.password !== formData.confpassword) {
      alert("password Not Match");
    } else {
      alert("Successfully Signed up!");
    }
    e.preventDefault();
  };

  const handleCheck = () => {
    console.log("Thanks for signing up for our newsletter!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h3> Sign-up Form </h3>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={formData.email}
            required
            onChange={handleChange}
            name="email"
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={formData.password}
            required
            onChange={handleChange}
            name="password"
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={formData.confpassword}
            required
            onChange={handleChange}
            name="confpassword"
          />
          <br />
          <input type="checkbox" name="chkbox" onClick={handleCheck} />
          <label>I want to join the newsletter </label>
          <br />
          <input type="submit" value="Submit" onClick={handleClick} />
        </form>
      </header>
    </div>
  );
}

export default SignUp;
