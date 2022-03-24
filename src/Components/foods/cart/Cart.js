import React from 'react';
import { GiForkKnifeSpoon } from "react-icons/gi";
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
  return (
    <div class="order">
      <h5 className="text-center text-success">
        Foods To Buy <GiForkKnifeSpoon />
      </h5>
      <h6>Food Name: {cart.length}</h6>
    </div>
  );
};

export default Cart;