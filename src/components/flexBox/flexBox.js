import React from "react";
import "./flexBox.scss";
import ProductCard from "../../atoms/card";

const FlexBox = () => {
  const cards = Array.from({ length: 5 }, (_, index) => {
    if (index === 2) {
      return (
        <div key={index} className="card card--big">
          <ProductCard
            name={`Card${index}`}
            description={"Sample product for sales"}
          />
        </div>
      );
    }
    return (
      <div key={index} className="card">
        Card {index + 1}
      </div>
    );
  });

  return <div className="flexbox-container">{cards}</div>;
};

export default FlexBox;
