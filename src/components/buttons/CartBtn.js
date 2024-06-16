import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  // we get state of addItem
  // write name of the file not function name
  const state = useSelector((state) => state.addItem);

  return (
    <>
      <NavLink className="btn btn-outline-primary ms-2" to="/cart">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state?.length}
        )
      </NavLink>
    </>
  );
};

export default CartBtn;
