import React from 'react'
import { Breadcrumb } from "react-bootstrap";
import "./location.css";

const Location = () => {
  return (
    <div className="container-xxl">
      <div className="container">
        <div className="location">

          {/* bu element bootstrapdan olingan bulip navigatsiyani taxlash uchun ishlatiladi  */}
          <Breadcrumb>
            <Breadcrumb.Item href="/">Главное</Breadcrumb.Item>
            <Breadcrumb.Item href="/product">Электроника</Breadcrumb.Item>
            <Breadcrumb.Item active> Смартфони</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};
export default Location;
