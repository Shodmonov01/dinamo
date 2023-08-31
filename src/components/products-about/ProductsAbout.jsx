import React from "react";
import BrendAccordion from "../brendsAccordion/BrendAccordion";
import Cost from "../costAccordion/Cost";
import SaleCard from "../salecard/SaleCard";
import SizeAccordion from "../sizeAccordion/SizeAccordion";
import ProductCardImg from "../../assets/images/productCard.png";
import { useState } from "react";
import "./products-about.css";

// perexod stranitsi
import { Pagination } from "@mui/material";
const ProductsAbout = () => {
  const [like, setLike] = useState(false);
  const data = [
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
    {
      img: ProductCardImg,
      title: "Перчатки Боксерские ФТБР",
      newcost: "120.000 uzs",
      isLiked: like,
      id: 0,
    },
  ];
  return (
    <>
      <div className="container-xxl">
        <div className="container">
          <div className="products-about">
            <div className="products-about-left">
              <Cost />
              <BrendAccordion />
              <SizeAccordion />
            </div>
            <div className="products-about-right">
              <div className="right-title">
                <h1>Футболка</h1>
              </div>
              <div className="right-cards">
                {data?.map((i, k) => (
                  <SaleCard
                    img={i.img}
                    title={i.title}
                    setState={setLike}
                    id={i.id}
                    newcost={i.newcost}
                    isLiked={i.isLiked}
                  />
                ))}
              </div>
              <div className="right-bottom">
                <Pagination count={10} shape="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsAbout;
