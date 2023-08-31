import React from 'react'
import bycycle from "../../assets/images/bycycle.png";
import "./banner.css";

function Banner() {
  return (
    <>
             <div className="container-xxl">  {/*bu className osnovnoy main.scss kiritilgan */}
                <div className="banner-all">
                    <div className="container-xl"> {/*bu className osnovnoy main.scss kiritilgan */} 
                        <div className="banner">
                            <div className="banner-left">
                                <h1>В «Динамо» стартовал сезон осенних акций</h1>
                                <button>Подробнее</button>
                            </div>
                            <div className="banner-right">
                                <img src={bycycle} alt="" /> {/*bu yerda prosto import img ishlatiyapti */}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Banner