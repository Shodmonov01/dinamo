import React, { useState } from "react";
import "./ModalHeart.css";
import HeartCard from "../heartCard/HeartCard";
// import { Link } from "react-router-dom";
import data from "./data";

const ModalHeart = (props) => {
  const [state, setState] = useState(0);

  if (!props.showHeart) {
    return null;
  }
  return (
    <div className="modal-heart" onClick={props.onClose}>
      <div className="modal-heart-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heart-container">
          <div className="modal-heart-body">
            <h1>Избранные</h1>
            <h4>Вот те, которые вы выбрали и нашли вашими любимыми</h4>
            {data.map((card, index) => (
              <HeartCard
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

export default ModalHeart;
