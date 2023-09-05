import React from 'react'
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Brends from "../components/brends/Brends";
// import Footer from "../components/footer";
// import Header from "../components/header";
// import Navigation from "../components/navbar";
import News from "../components/news/News";
import Products from "../components/products/Products";
import Sale from "../components/sale/Sale.jsx";
import SaleBanner from "../components/salebanner/SaleBanner";

const Home = () => {
    return (
        <>
            <Banner />
            <Brends />
            <Sale />
            <Products />
            <News />
            <SaleBanner />
            <About />
        </>
    );
};
export default Home;