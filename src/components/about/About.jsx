import React from 'react'
import "./about.css";
import Phone from "../../assets/images/phone (2).png";


function About() {
  return (
    <>
            <div className="container-xxl">  {/*bu className osnovnoy main.scss kiritilgan */} 
                <div className="about-full">
                    <div className="container">  {/*bu className osnovnoy main.scss kiritilgan */} 
                        <div className="about">
                            <div className="about-left">
                                <h1>Интернет-магазин - <span>Динамо</span> - удобная площадка для покупок</h1>
                                <p>Комфортную жизнь любого человека и удобный быт невозможно представить без современной техники. Рабочие и личные вопросы - в смартфоне, любимые фильмы и сериалы – телевизор, уборка – пылесос, готовка – плита, духовка и множество более мелких</p>
                                <p>Если Вы пока такового для себя не нашли, мы приглашаем на несколько минут задержаться на нашем сайте. Уверяем, Вы убедитесь, что не зря потратили свое время.</p>
                            </div>
                            <div className="about-right">
                                <img src={Phone} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default About