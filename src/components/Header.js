import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";


const Header = () => {

  const {cartItems} = useSelector(state=>state.cart)
  return (
    <nav>
      <h2>reactCart.</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <ShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
