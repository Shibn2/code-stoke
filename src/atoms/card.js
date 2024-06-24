import React from "react";
import "./card.scss";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img
        height="200px"
        className="product-card__image"
        src={image}
        alt={name}
      />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__description">{description}</p>
      <p className="product-card__price">Price: ${price}</p>
      <button className="product-card__button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
