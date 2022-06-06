import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div key={id} className="contact mt-5">
      <div className="contact-info">
        <div className="user-logo">
          <FaUserCircle></FaUserCircle>
        </div>
        <div className="pers-info px-5">
          <h3 className="">{name}</h3>
          <p className="">{email}</p>
        </div>
      </div>
      <button
        className="btn btn-lg btn-danger"
        onClick={() => props.clickHandler(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
