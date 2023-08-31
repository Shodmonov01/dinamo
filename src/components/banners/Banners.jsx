import React from 'react'
import bycycle from "../../assets/images/bycycle.png";
import SaleBannerImg from "../../assets/images/sneakers.png";
import "./banners.css"

function Banners() {
  return (
    <>
{/* bu Product dagi banner. img lar prosto import qilingan , osnovnoy containerlar stili main.scss dan olingan */}

      <div className="container-xxl">
        <div className="banners">
          <div className="container">
            <div className="about-banners">
              <div className="banner-left">
                <h1>В «Динамо» стартовал сезон осенних акций</h1>
                <button>Подробнее</button>
                <img src={bycycle} alt="" />
              </div>
              <div className="banner-right">
                <h1>Pаспродажа Oсенних Kроссовок</h1>
                <p>320.000 uzs</p>
                <h6>240.000 uzs</h6>
                <img src={SaleBannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banners