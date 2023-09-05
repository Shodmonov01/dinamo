import React from "react";
import BrendCard from "../brendCard/BrendCard";
import "./brends.css";
import brendImg from "../../assets/images/brend.png";
import Puma from "../../assets/images/puma.png";
import Adidas from "../../assets/images/adidas.png";
import Nike from "../../assets/images/nike.png";


const Brends = () => {
    const images = [
        {
            img: brendImg,
        },
        {
            img: Puma,
        },
        {
            img: Adidas,
        },
        {
            img: Nike,
        },
        {
            img: brendImg,
        },
        {
            img: Puma,
        },
        {
            img: Adidas,
        },
        {
            img: Nike,
        },
        {
            img: brendImg,
        },
        {
            img: Puma,
        },
        {
            img: Adidas,
        },
        {
            img: Nike,
        },
    ];
    return (
        <>
        {/* bu yerda main.scss dagi container ichiga brandcards export qilib uuga map orqali img lar kiritilgan */}
            <div className="container-xxl">
                <div className="container">
                    <div className="brends">
                        {images?.map((item) => (
                            <BrendCard img={item.img} />  
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
};
export default Brends;