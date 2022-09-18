import React, { useRef } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputElement = useRef();

  function handleDeleteBtn(id) {
    props.handleDelete(id);
  }
  const renderContactsList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={handleDeleteBtn} />;
  });

  function getSearchTerm() {
    props.searchKeyword(inputElement.current.value);
  }

  return (
    <div className="contacts-list w-75 m-auto container">
      {renderContactsList}
      <button
        className={
          props.length > 0 ? "clear-btn btn btn-lg btn-danger" : "hidden"
        }
        onClick={props.handleClear}
      >
        Clear All
      </button>
    </div>
  );
};

export default ContactList;
