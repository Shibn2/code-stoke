import React from "react";

const FlexBox = () => {
  const cards = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="card">
      Card {index + 1}
    </div>
  ));

  return <div className="flexBox">{cards}</div>;
};

export default FlexBox;
