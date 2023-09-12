import React, { useState } from "react";
import "./ModalCart.css";
// import { Link } from "react-router-dom";


const ModalCart = (props) => {
  const [state, setState] = useState(0);

  if (!props.showCart) {
    return null;
  }
  return (
    <div className="modal-cart" onClick={props.onClose}>
      <div className="modal-cart-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cart-container">
          <div className="modal-cart-body">
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;