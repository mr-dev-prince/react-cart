import React from "react";

const ProductCard = ({name, imgSrc, id, price, handler}) => {
  return (
    <div className="product">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({name, imgSrc, price, id, quantity:1})}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
