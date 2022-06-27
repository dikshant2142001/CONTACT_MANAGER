import React from "react";

// Creating functional component.
const Header = () => {
  return (
    /*we cannot use class as a selector here 
    because class in javascript are the classes of 
    OOP that why we use className in JSX */
    <div className="ui fixed menu"> 
      <div className="ui container center"> 
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
};


export default Header;
