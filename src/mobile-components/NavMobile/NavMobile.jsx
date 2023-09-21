import React, { useState } from "react";
import Store from "../../components/store/Store";
import StoreIcon from "../../assets/images/default.svg";
import HeartIcon from "../../assets/images/heart.svg";
import CartIcon from "../../assets/images/cart.svg";
import LoginIcon from "../../assets/images/person.svg";
import ModalStore from "../../components/ModalStore/Modalstore";
import ModalHeart from "../../components/ModalHeart/ModalHeart";
import ModalCart from "../../components/ModalCart/ModalCart";
import "./NavMobile.css";

const NavMobile = () => {
  const data = [{ img: StoreIcon, text: "Заказы" }];

  const data2 = [{ img: HeartIcon, text: "Избранное" }];

  const data3 = [{ img: CartIcon, text: "Корзина" }];

  const data4 = [{ img: LoginIcon, text: "Войти", link: "/product" }];

  const [showStore, setShowStore] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="nav-mobile">
        <button onClick={() => setShowStore(true)} className="btn-nav">
          {data?.map((i) => (
            <Store img={i.img} text={i.text} />
          ))}
        </button>
        <ModalStore onClose={() => setShowStore(false)} showStore={showStore} />

        <button onClick={() => setShowHeart(true)} className="btn-nav">
          {data2?.map((i) => (
            <Store img={i.img} text={i.text} />
          ))}
        </button>
        <ModalHeart onClose={() => setShowHeart(false)} showHeart={showHeart} />

        <button onClick={() => setShowCart(true)} className="btn-nav">
          {data3?.map((i) => (
            <Store img={i.img} text={i.text} />
          ))}
        </button>
        <ModalCart onClose={() => setShowCart(false)} showCart={showCart} />

        <button className="btn-nav">
          {data4?.map((i) => (
            <Store img={i.img} text={i.text} link={i.link} />
          ))}
        </button>
      </div>
    </>
  );
};
export default NavMobile;
