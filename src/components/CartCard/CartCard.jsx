import React, { useState } from 'react';
import "./CartCard.css";

function CartCard({ img, title, cost, id }) {
  const [count, setCount] = useState(1);
  const pricePerItem = 180; // Цена одного товара
  const totalPrice = count * pricePerItem; // Общая сумма

  // Функция для увеличения количества товаров
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения количества товаров (если нужно)
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <>
      <div className="heart_card">
        <div className="card_img">
          <img src={img} alt="" />
        </div>

        <div className="card_info">
          <div className="product_name">
            <p>{title}</p>
          </div>
          <div className="product_cost">
            <p>{cost}</p>
          </div>
          <div className="total-price">
            <button onClick={incrementCount}>+</button>
            <p>{count}</p>
            <button onClick={decrementCount}>-</button>
            <p>${totalPrice}</p>

          </div>
        </div>


        <div className="x">
          <button className="button_x">x</button>
        </div>
      </div>
      <div className="button-order">
        <button>Оформить Заказ</button>
      </div>
    </>
  );
}

export default CartCard;

