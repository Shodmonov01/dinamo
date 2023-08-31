import React from 'react'
import CarouselImg from "../../assets/images/fitness.svg";
import CarouselSecondImg from "../../assets/images/boxing.svg";
import CarouselThirdImg from "../../assets/images/tennis.svg";
import CarouselFourthImg from "../../assets/images/football.svg";
import CarouselFifthImg from "../../assets/images/basketball.svg";

// bu yerda buttonlar icon.jsx bazasidan olinyapti
import { LeftButton, RightButton } from "../../assets/images/icons";

// import { LeftArrow, RightArrow } from "../../assets/images/icons";
import CarouselCard from "../carouselCard/CarouselCard";
import "./carousel.css";


// bu yerda data 
const Carousel = () => {
  const data = [
    { img: CarouselImg, title: "Фитнесные вещи" },
    { img: CarouselSecondImg, title: "Боксные вещи" },
    { img: CarouselThirdImg, title: "Теннисные вещи" },
    { img: CarouselFourthImg, title: "Футбольные вещи" },
    { img: CarouselFifthImg, title: "Баскетбольны вещи" },
    { img: CarouselImg, title: "Фитнесные вещи" },
    { img: CarouselSecondImg, title: "Боксные вещи" },
    { img: CarouselThirdImg, title: "Фитнесные вещи" },
    { img: CarouselFourthImg, title: "Фитнесные вещи" },
    { img: CarouselFifthImg, title: "Фитнесные вещи" },
  ];
  return (
    <>
    
      <div className="container-xxl">
        <div className="carousel">
          <button className="left-arrow">
            
            <LeftButton />
          </button>

          {/* data kiritilib nom berilgan
          carousel card strukturasi kiritilgan va unga data biriktirilgan */}
          {data?.map((i, k) => (
            <CarouselCard img={i.img} title={i.title} />
          ))}
          <button className="right-arrow">
            <RightButton />
          </button>
        </div>
      </div>
    </>
  );
};
export default Carousel;
