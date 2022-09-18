import React, { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuid } from "uuid";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function addContactHandler(contact) {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  function removeContact(id) {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  }

  function handleClear() {
    localStorage.clear();
    setContacts([]);
  }

  return (
    <div className="app text-center">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        handleDelete={removeContact}
        handleClear={handleClear}
        length={contacts.length}
      />
    </div>
  );
};

export default App;
