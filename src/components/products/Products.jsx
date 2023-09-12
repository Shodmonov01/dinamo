import React, { useRef, useState } from "react";
// ...
// import Slider from "react-slick";
// import "./slick.css";
// import "./slick-theme.css";
import SaleCard from "../salecard/SaleCard";
import ProductCardImg from "../../assets/images/productCard.png";
import "./products.css";
import { LeftArrow, RightArrow } from "../../assets/images/icons";



  const Products = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const productsCardsRef = useRef(null);
  
    // ...
    const scrollLeftHandler = () => {
      const cardWidth = 300; // Ширина одной карточки (замените на реальную ширину)
      const scrollDistance = cardWidth * 1; // Сколько пикселей скроллить за раз
  
      if (productsCardsRef.current) {
        productsCardsRef.current.scrollLeft -= scrollDistance;
        setScrollLeft(productsCardsRef.current.scrollLeft);
      }
    };
  
    const scrollRightHandler = () => {
      const cardWidth = 300; // Ширина одной карточки (замените на реальную ширину)
      const scrollDistance = cardWidth * 1; // Сколько пикселей скроллить за раз
  
      if (productsCardsRef.current) {
        productsCardsRef.current.scrollLeft += scrollDistance;
        setScrollLeft(productsCardsRef.current.scrollLeft);
      }
    };
    

  const data = [
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: false,
      newcost: "120.000 uzs",
      saleCost: false,
      isLiked: false,
      id: 0,
    },
  ];
  return (
    <>
       <div className="container-xxl">
        <div className="products">
          <div className="products-title container">
            <h1>Популярные товары</h1>
          </div>
          <div className="products-cards" ref={productsCardsRef}>
            {data?.map((i, k) => (
              <SaleCard img={i.img} title={i.title} newcost={i.newcost} />
            ))}
          </div>
          <div className="product-buttons container">
            <button className="left-btn" onClick={scrollLeftHandler}>
              <LeftArrow />
            </button>
            <button className="right-btn" onClick={scrollRightHandler}>
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
