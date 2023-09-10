import React, { useState } from "react";
import "./ModalCatalog.css";
// import { Link } from "react-router-dom";
import osanka from "../../assets/images/osanka.png";
import { data, data2 } from "./data"; // Импортируйте массивы данных

const ModalCatalog = (props) => {
  const [state, setState] = useState(0);

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container">
          <div className="modal-body">
            <div className="modal-body_left">
              <div className="profile container">
                {data.map((i, k) => (
                  <div className="data-title" onClick={(e) => setState(i.id)}>{i.title}</div>
                ))}
              </div>
            </div>

            <div className="modal-body_right">
              <div className="profile container">

                {data2.map((i, k) => (
                  <div>{state === i.id && <div className="data2-title">{i.title}</div>}</div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <img src={osanka} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCatalog;

