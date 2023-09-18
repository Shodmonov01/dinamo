import React, { useState } from 'react'
import {
  Logo,
  SearchIcon,
} from "../../assets/images/icons";     
import { Link } from "react-router-dom";
import Modal from "../../assets/images/align-justify.svg";

// bu yerda bootstrap ishlatilgan
import { Button, Form, InputGroup } from "react-bootstrap";
import Store from "../store/Store";
import "./header.css";
import StoreIcon from "../../assets/images/default.svg";
import HeartIcon from "../../assets/images/heart.svg";
import CartIcon from "../../assets/images/cart.svg";
import LoginIcon from "../../assets/images/person.svg";
import ModalCatalog from '../ModalCatalog/ModalCatalog';
import ModalStore from '../ModalStore/Modalstore';
import ModalHeart from '../ModalHeart/ModalHeart';
import ModalCart from '../ModalCart/ModalCart';



const Header = () => {
  const data = [
    { img: StoreIcon, text: "Заказы"},
    // { img: HeartIcon, text: "Избранное" },
    // { img: CartIcon, text: "Корзина" },
    // { img: LoginIcon, text: "Войти",link:"/product" },
  ];

  const data2 = [
    // { img: StoreIcon, text: "Заказы"},
    { img: HeartIcon, text: "Избранное" },
    // { img: CartIcon, text: "Корзина" },
    // { img: LoginIcon, text: "Войти",link:"/product" },
  ];

  const data3 = [
    // { img: StoreIcon, text: "Заказы"},
    // { img: HeartIcon, text: "Избранное" },
    { img: CartIcon, text: "Корзина" },
    // { img: LoginIcon, text: "Войти",link:"/product" },
  ];

  const data4 = [
    // { img: StoreIcon, text: "Заказы"},
    // { img: HeartIcon, text: "Избранное" },
    // { img: CartIcon, text: "Корзина" },
    { img: LoginIcon, text: "Войти",link:"/product" },
  ];

  const [show, setShow] = useState(false)
  const [showStore, setShowStore] = useState(false)
  const [showHeart, setShowHeart] = useState(false)
  const [showCart, setShowCart] = useState(false)



  return (
    <div className="container-xxl">
      <header>
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="header-center">
              <div className="pofile"></div>


              <button onClick={() => setShow(true)} className="header-category">
                <img src={Modal} alt="" />
                <div className="title-catalog">Каталог</div>
              </button>
              <ModalCatalog onClose={() => setShow(false)} show = {show} />


              <div className="header-search">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Поиск по товарам"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    <SearchIcon />
                    Найти
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div className="header-buttons">
              <button onClick={() => setShowStore(true)} className='btn-nav'>
              {data?.map((i,) => (
                <Store 
                  img={i.img}
                  text={i.text}
                  
                />
              ))} 
              </button>
              <ModalStore onClose={() => setShowStore(false)} showStore = {showStore} />

              <button onClick={() => setShowHeart(true)} className='btn-nav'>
              {data2?.map((i,) => (
                <Store 
                  img={i.img}
                  text={i.text}
                  
                />
              ))} 
              </button>
              <ModalHeart onClose={() => setShowHeart(false)} showHeart = {showHeart} />

              <button onClick={() => setShowCart(true)} className='btn-nav'>
              {data3?.map((i,) => (
                <Store 

                  img={i.img}
                  text={i.text}
                  
                />
              ))} 
              </button>
            <ModalCart onClose={() => setShowCart(false)} showCart = {showCart} /> 

            {data4?.map((i,) => (
                <Store 
                  img={i.img}
                  text={i.text}
                  link={i.link}
                />
              ))} 
              
               {/* <button onClick={() => setShowStore(true)} className="header-category">
                <img src={StoreIcon} alt="" />
                Заказы
              </button>
              <ModalStore onClose={() => setShowStore(false)} showStore = {showStore} />

              <button onClick={() => setShowHeart(true)} className="header-category">
                <img src={HeartIcon} alt="" />
                Избранное
              </button>
              <ModalHeart onClose={() => setShowHeart(false)} showHeart = {showHeart} />

             <button onClick={() => setShowCart(true)} className="header-category">
                <img src={CartIcon} alt="" />
                Корзина
              </button>
              <ModalCart onClose={() => setShowCart(false)} showCart = {showCart} /> */}

              {/* <button onClick={() => setShow(true)} className="header-category">
                <img src={LoginIcon} alt="" />
                Войти
              </button>
              <ModalCatalog onClose={() => setShow(false)} show = {show} /> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
