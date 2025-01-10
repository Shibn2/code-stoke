import React from "react";
import BBDisplay from "./bbDisplay";
import BBForm from "./bbForm";
import "./breakingBad.scss";

function BreakingBad() {
  const [name, setName] = React.useState({
    fName: { prefix: "", postfix: "" },
    lName: { prefix: "", postfix: "" },
  });
  return (
    <div className="breaking-bad-container">
      <BBDisplay fName={name.fName} lName={name.lName} />
      <BBForm setName={setName} />
    </div>
  );
}
export default BreakingBad;

// Container compoenent - BreakingbardContainer
// GloablState - {firstName, lastName}
// NameDisplay  - display here.
// NameForm - changeInName here.
// setLName on change in the input field
// setFName on change in the input field
// submit button to change the name in global state with data structure { firstName: { prefix: "Wa", postfix: 'lter}, lastName: { prefix: "Wh", postfix: 'ite'}}
