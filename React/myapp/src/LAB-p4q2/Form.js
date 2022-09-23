import React from "react";
import "./style.css";
export default function Form() {
  const [formData, setFormData] = React.useState({ fname: "", lname: "" });
  const handleChange = (event) => {
    // console.log("Changed!");
    console.log(event.target.value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.fname}
        name="fname"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lname}
        name="lname"
      />
    </form>
  );
}
