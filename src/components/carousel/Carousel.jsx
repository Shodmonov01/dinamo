import React from 'react';
import Slider from 'react-slick';
import "./slick.css"; 
import "./slick-theme.css";
import CarouselImg from "../../assets/images/fitness.svg";
import CarouselSecondImg from "../../assets/images/boxing.svg";
import CarouselThirdImg from "../../assets/images/tennis.svg";
import CarouselFourthImg from "../../assets/images/football.svg";
import CarouselFifthImg from "../../assets/images/basketball.svg";

// bu yerda buttonlar icon.jsx bazasidan olinyapti
import { LeftButton, RightButton } from "../../assets/images/icons";

// import { LeftArrow, RightArrow } from "../../assets/images/icons";
import CarouselCard from "../carouselCard/CarouselCard";
// import "./carousel.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white", borderRadius: "6px", border: "1px solid grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white", borderRadius: "6px", border: "1px solid grey" }}
      onClick={onClick}
    />
  );
}
  
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const Carousel = () => {
    return (
      <div className='container-xxl'>
        <Slider {...settings}>
          {data?.map((i, k) => (         
              <CarouselCard  img={i.img} title={i.title} key={k} />
          ))}
        </Slider>
      </div>
    );
  }
export default Carousel;



