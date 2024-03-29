import React, { useState } from "react";
import "../App.css";

const AddContact = (props) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (contact.name === "" && contact.email === "") {
      alert("Please enter name and email");
      return;
    }
    props.addContactHandler(contact);
    setContact({ name: "", email: "" });
  }

  function handleChange(e) {
    setContact((prevContact) => {
      return {
        ...prevContact,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="main mt-5 w-25 m-auto container pt-5">
      <h2>Add Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field py-3">
          <label>Full Name</label>
          <input
            className="form-control w-75 p-2 mt-3 m-auto"
            type="text"
            name="name"
            placeholder="Contact Name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>
        <div className="field py-3">
          <label>Email Address</label>
          <input
            className="form-control w-75 p-2 mt-3 m-auto"
            type="text"
            name="email"
            placeholder="Contact Email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success btn-lg my-3">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
