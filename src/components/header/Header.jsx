import React from 'react'
import {
  Logo,
  SearchIcon,
} from "../../assets/images/icons";
// import { Link } from "react-router-dom";
import Modal from "../../assets/images/align-justify.svg";

// bu yerda bootstrap ishlatilgan
import { Button, Form, InputGroup } from "react-bootstrap";
import Store from "../store/Store";
import "./header.css";
import StoreIcon from "../../assets/images/default.svg";
import HeartIcon from "../../assets/images/heart.svg";
import CartIcon from "../../assets/images/cart.svg";
import LoginIcon from "../../assets/images/person.svg";

const Header = () => {
  const data = [
    { img: StoreIcon, text: "Заказы" ,link:""},
    { img: HeartIcon, text: "Избранное" },
    { img: CartIcon, text: "Корзина" },
    { img: LoginIcon, text: "Войти",link:"/product" },
  ];
  return (
    <div className="container-xxl">
      <header>
        <div className="container">
          <div className="header">
            <div className="header-logo">
              {/* <Link to="/">
                <Logo />
              </Link> */}
            </div>
            <div className="header-center">
              <button className="header-category">
                <img src={Modal} alt="" />
                Каталог
              </button>
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
              {data?.map((i, k) => (
                <Store
                  img={i.img}
                  text={i.text}
                  link={i.link}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
