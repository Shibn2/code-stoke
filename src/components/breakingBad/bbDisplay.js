import React from "react";

function BBDisplay({ fName, lName }) {
  const { prefix: fPrefix, postfix: fPostfix } = fName;
  const { prefix: lPrefix, postfix: lPostfix } = lName;
  console.log(fName, lName);
  return (
    <div className="bb-display">
      <span>
        <b>{fPrefix ? fPrefix : ""}</b>
        {fPostfix ? fPostfix : ""}
      </span>
      <span>
        <b>{lPrefix ? lPrefix : ""}</b>
        {lPostfix ? lPostfix : ""}
      </span>
    </div>
  );
}

export default BBDisplay;
