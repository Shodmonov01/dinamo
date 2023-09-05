import React from 'react'
import "./brendcard.css"

const BrendCard = ({ img }) => {
  return (
      <>
      {/* bu yrda brandlarni kartochkalarini bitta obshiy strukturasi va stili yozilgan va brands da export qilingan*/}
          <div className="brend-card">
              <img src={img} alt="brend" />
          </div>
      </>
  );
};
export default BrendCard;