
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

/*
  1. When we use a functional component then we use a react hooks.
  2. use state is a react hook
*/
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // we have created the state for the contact whenever we want to add
  // when we click on add we are adding it in the function app contacts.
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} /> 
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      
    </div>
  );
}
/* Above at closing of contactList we have passed the contacts as a property and inside that contacts array which
 is inside the curly braces and this contact is access in the contact list via props.*/
export default App;
