import React, { useState } from "react";
import "./ModalCart.css";
// import { Link } from "react-router-dom";
import data from "./data";
import CartCard from "../CartCard/CartCard";

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
            <h1>Корзина покупателя</h1>
            <h4>Вы можете легко купить то, что вы выбираете из корзины</h4>

            {data.map((card, index) => (
              <CartCard
                img={card.img}
                title={card.title}
                cost={card.cost}
                id={card.id}
              />
            ))}

            <button className="close-button" onClick={props.onClose}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
