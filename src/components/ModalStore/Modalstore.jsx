import React, { useState } from "react";
import "./ModalStore.css";
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
            Store
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStore;