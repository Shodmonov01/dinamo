import React, { useState } from "react";
import "./ModalHeart.css";
// import { Link } from "react-router-dom";


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
            Heart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHeart;