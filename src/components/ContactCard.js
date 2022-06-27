import React from "react";
import user from "../images/user.png";

// this function is going to return the JSX of the crad.

const ContactCard = (props) => {
  // we have imported the contact components 
  // from the contactlist.js using props below.
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};
// we have used a inline style <i> </>
export default ContactCard;
