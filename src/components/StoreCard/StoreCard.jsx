import React from "react";
import { Arrow } from "../../assets/images/icons";
import "./StoreCard.css";
import ProductCardImg from "../../assets/images/productCard.png";



function StoreCard({
  
    img,
    title,
    cost,
    id,
  
}) {
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
        
        

      </div>
      <div className="x">
        <button className="button_x">
          x
        </button>

      </div>
    </div>
    <div className="order-info">
          <div className="adress-order">
            <p>Адресс</p>
            <p>Регион: Ташкент</p>
            <p>Район: Чиланзарскый район</p>
            <p>Улица: Максуд Шайхзада</p>
            <p>Дом: 7 - Дом</p>
            <p>Подьезд: 54</p>
            <p>Квартира: 27</p>
            <p>Дата Доставка:</p>
            <p>27.05.2021 От 30.05.2021 До</p>
            <p>Номер заказы: 1024</p>
            <div className="wait">ожидание</div>
          </div>
        </div>
    </>    
  );
}

export default StoreCard;
