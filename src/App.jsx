import '../src/assets/styles/App.css'
import About from './components/about/about'
import Banner from './components/banner/Banner'
import Banners from './components/banners/Banners'
import BrendAccordion from './components/brendsAccordion/BrendAccordion'
import Carousel from './components/carousel/Carousel'
import Cost from './components/costAccordion/Cost'
import Footer from './components/footer'
import Header from './components/header/Header'
import Location from './components/location/Location'
import Navigation from './components/navbar/Navigation'
import ProductsAbout from './components/products-about/ProductsAbout'

function App() {
  return (
    <>
      <ProductsAbout />
      <About />
      <Banner />
      <Banners />
      <BrendAccordion />
      <Carousel />
      <Cost />
      <Footer />
      <Header />
      <Location />
      <Navigation />
    </>
  )
}

export default App

// import '../src/assets/styles/App.css'
// // import About from './components/about/about'
// // import Banner from './components/banner/Banner'
// // import Banners from './components/banners/Banners'
// // import BrendAccordion from './components/brendsAccordion/BrendAccordion'
// // import Carousel from './components/carousel/Carousel'
// // import Cost from './components/costAccordion/Cost'
// import Footer from './components/footer'
// import Header from './components/header/Header'
// // import Location from './components/location/Location'
// import Navigation from './components/navbar/Navigation'
// // import ProductsAbout from './components/products-about/ProductsAbout'

// function App() {
//   return (
//     <>
//       <div className="App">
//       <Navigation />
//       <Header />
//       <Routes>
//         <Route element={<Home />} path="/" />
//         <Route element={<Product />} path="/product" />
//       </Routes>
//       <Footer />
//     </div>
//     </>
//   )
// }

// export default App
