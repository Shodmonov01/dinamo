import React from "react";
import SaleCard from "../salecard/SaleCard";
import ProductCardImg from "../../assets/images/productCard.png";
import "./products.css";
import { LeftArrow, RightArrow } from "../../assets/images/icons";
const Products = () => {
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
          <div className="products-cards">
            {data?.map((i, k) => (
              <SaleCard img={i.img} title={i.title} newcost={i.newcost} />
            ))}
          </div>
          <div className="product-buttons container">
            <button className="left-btn">
              <LeftArrow />
            </button>
            <button className="right-btn">
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
