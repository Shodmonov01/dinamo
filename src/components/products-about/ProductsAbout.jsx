import React from "react";
import BrendAccordion from "../brendsAccordion/BrendAccordion";
import Cost from "../costAccordion/Cost";
// import SaleCard from "../salecard/SaleCard";
import SizeAccordion from "../sizeAccordion/SizeAccordion";
// import ProductCardImg from "../../assets/images/productCard.png";
import { useState } from "react";
import "./products-about.css";
// import React, { useState } from 'react';
import { Container, Typography, Box, Pagination } from "@mui/material";
import { PaginationItem } from "@mui/lab";
// import imgcard from './productCard.png';
import data from "./data"; // Импортируем данные из cardData.js
// perexod stranitsi
// import { Pagination } from "@mui/material";
const ProductsAbout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 16;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const [like, setLike] = useState(false);
  // const data = [

  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  //   {
  //     img: ProductCardImg,
  //     title: "Перчатки Боксерские ФТБР",
  //     newcost: "120.000 uzs",
  //     isLiked: like,
  //     id: 0,
  //   },
  // ];
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
              {/* <div className="right-title">
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
              </div> */}

              <Container>
                <div className="right-title">
                  <h1>Футболка</h1>
                </div>
                <Box display="flex" flexWrap="wrap">
                  {currentCards.map((card, index) => (
                    <Box key={index} width="25%" p={2}>
                      <div className="card">
                        <img src={card.image} alt={card.name} />
                        <h2>{card.name}</h2>
                        <p>{card.price}</p>
                      </div>
                    </Box>
                  ))}
                </Box>
                <Pagination
                  count={Math.ceil(data.length / cardsPerPage)}
                  page={currentPage}
                  onChange={handleChangePage}
                  shape="rounded"
                  variant="outlined"
                  color="primary"
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      onClick={() => setCurrentPage(item.page)}
                    />
                  )}
                />
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsAbout;
