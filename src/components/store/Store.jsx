import React from 'react'
import "./store.css";
import { Link } from "react-router-dom";
const Store = ({ img, text,link }) => {
  return (
    <>
      <Link to={link}>
        
        <button className="store">
          <div className="store-img">
            <img src={img} alt="" />
          </div>
          {text}
        </button>
      </Link>
    </>
  );
};
export default Store;
