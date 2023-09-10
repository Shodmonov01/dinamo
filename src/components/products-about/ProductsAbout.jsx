import React from "react";
import BrendAccordion from "../brendsAccordion/BrendAccordion";
import Cost from "../costAccordion/Cost";
import SaleCard from "../salecard/SaleCard";
import SizeAccordion from "../sizeAccordion/SizeAccordion";
// import ProductCardImg from "../../assets/images/productCard.png";
import { useState } from "react";
import "./products-about.css";
import { Container, Typography, Box, Pagination } from "@mui/material";
import { PaginationItem } from "@mui/lab";
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
                {currentCards.map((card, index) => (
                  <SaleCard
                    img={card.img}
                    title={card.title}
                    cost={card.cost}
                    newcost={card.newcost}
                    saleCost={card.saleCost}
                    isLiked={card.isLiked}
                    setState={setLike}
                    id={card.id}
                  />
                ))}
              </div>
              <div className="right-bottom">
                <Pagination
                  count={Math.ceil(data.length / cardsPerPage)}
                  page={currentPage}
                  onChange={handleChangePage}
                  shape="rounded"
                  // variant="outlined"
                  // color="primary"
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      onClick={() => setCurrentPage(item.page)}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsAbout;
