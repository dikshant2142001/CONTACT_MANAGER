import React from "react";
import ContactCard from "./ContactCard";

// Functional component 
// To access the contact list from the app.js we have default prameter named props.
const ContactList = (props) => {
  //using console.log we will be able to see the props.
  console.log(props);

  
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
// below is the function it will be taking props of contact and map them contact and 
// we will returning a JSX block of div.
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    ); 
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
