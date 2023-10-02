import React, { useState } from "react";
import "./ModalStore.css";
import data from "./data";
import StoreCard from "../StoreCard/StoreCard";

// import { Link } from "react-router-dom";

const ModalStore = (props) => {
  const [state, setState] = useState(0);

  if (!props.showStore) {
    return null;
  }
  return (
    <div className="modal-store" onClick={props.onClose}>
      <div className="modal-store-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-store-container">
          <div className="modal-store-body">
            <h1>Мои Закакзы</h1>
            <h4>Вот те, которые вы выбрали и нашли вашими любимыми</h4>

            {data.map((card, index) => (
              <StoreCard
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

export default ModalStore;
