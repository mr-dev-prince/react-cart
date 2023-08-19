import React from "react";
import { Trash2 } from "lucide-react";

const CartItem = ({
  imgSrc,
  price,
  name,
  id,
  qty,
  increment,
  decrement,
  deleteHandler,
}) => {
  return (
    <div className="cartItem">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <p>${price}</p>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <Trash2 onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default CartItem;
