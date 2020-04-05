import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic
      </p>
      <p>
        print, and
        publishing industries for previewing layouts and visual mockups
      </p>
  <p>UserName is : {props.userName}</p>
    </div>
  );
};

export default UserOutput;
