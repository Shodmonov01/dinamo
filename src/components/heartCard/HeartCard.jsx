import React from "react";
import { Arrow } from "../../assets/images/icons";
import "./HeartCard.css";
import ProductCardImg from "../../assets/images/productCard.png";



function HeartCard({
  
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
        <button className="sale-card-btn">
          Добавить в корзинку <Arrow />
        </button>

      </div>
      <div className="x">
        <button className="button_x">
          x
        </button>

      </div>

      


      
    </div>
    </>    
  );
}

export default HeartCard;
