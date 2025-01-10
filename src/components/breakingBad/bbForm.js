import React, { useState, useCallback } from "react";
const { formatName } = require("./util");

function BBForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const formattedFirstName = formatName(firstName);
      const formattedLastName = formatName(lastName);
      props.setName({ fName: formattedFirstName, lName: formattedLastName });
    },
    [firstName, lastName]
  );
  return (
    <form className="bb-form">
      <div className="bb-form__input">
        <label className="bb-form__firstname">
          First Name:{" "}
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
          />
        </label>
        <label className="bb-form__lastname">
          Last Name:{" "}
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
          />
        </label>
      </div>
      <button onClick={submitHandler} className="bb-form__submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default BBForm;
