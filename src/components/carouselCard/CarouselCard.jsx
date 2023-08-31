import React from 'react'
// import { Link } from "react-router-dom";
import "./carouselcard.css";

const CarouselCard = ({ img, title, link }) => {
  return (
    <>
      {/* <Link to={link}> */}
        <div className="carousel-card">
          <div className="carousel-card-img">
            <img src={img} alt="" />
          </div>
          <h1>{title}</h1>
        </div>
      {/* </Link> */}
    </>
  );
};
export default CarouselCard;
