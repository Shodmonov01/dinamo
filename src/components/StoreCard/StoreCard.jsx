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
    {/* <div className="button-order">
      <button>
        Оформить Заказ
      </button>
    </div> */}
    </>    
  );
}

export default StoreCard;
