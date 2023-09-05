import React from 'react'
import { forwardRef } from 'react';
import { Link } from "react-router-dom";
import "./carouselcard.css";

const CarouselCard = ({ img, title, link }, ref) => {
  return (
    <>
      <Link to={link}>
        <div className="carousel-card">
          <div className="carousel-card-img">
            <img src={img} alt="" />
          </div>
          <h1 ref={ref}>{title}</h1>
        </div>
      </Link>
    </>
  );
};
export default forwardRef (CarouselCard);
