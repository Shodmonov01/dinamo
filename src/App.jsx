// import '../src/assets/styles/App.css'
// import About from './components/about/about'
// import Banner from './components/banner/Banner'
// import Banners from './components/banners/Banners'
// import BrendAccordion from './components/brendsAccordion/BrendAccordion'
// import Carousel from './components/carousel/Carousel'
// import Cost from './components/costAccordion/Cost'
// import Footer from './components/footer'
// import Header from './components/header/Header'
// import Location from './components/location/Location'
// import Navigation from './components/navbar/Navigation'
// import ProductsAbout from './components/products-about/ProductsAbout'

// function App() {
//   return (
//     <>
//       <ProductsAbout />
//       <About />
//       <Banner />
//       <Banners />
//       <BrendAccordion />
//       <Carousel />
//       <Cost />
//       <Footer />
//       <Header />
//       <Location />
//       <Navigation />
//     </>
//   )
// }

// export default App

import { Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer";
import Navigation from "./components/navbar/Navigation";
import Home from "./pages/home";
import Product from "./pages/product";
import NavMobile from "./mobile-components/NavMobile/NavMobile";
import MobileFooter from "./mobile-components/MobileFooter/MobileFooter";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/product" />
      </Routes>
      <NavMobile/>
      <Footer />
      <MobileFooter/>
    </div>
  );
};

export default App;
