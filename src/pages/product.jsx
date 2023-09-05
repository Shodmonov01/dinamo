import React from 'react'
import Banners from "../components/banners/Banners";
import Carousel from "../components/carousel/Carousel";
import Location from "../components/location/Location";
import ProductsAbout from "../components/products-about/ProductsAbout";

const Product = () => {
  return (
    <>
      <Location />
      <Carousel />
      <ProductsAbout />
      <Banners />
    </>
  );
};
export default Product;
