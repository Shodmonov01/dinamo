import React from "react";
import { Accordion } from "react-bootstrap";
import "./CatalogAccordion.css";

const CatalogAccordion = () => {
  return (
    <>
      <div className="mobile_catalog">
        <div className="catalog_title">
          <h1>Каталог</h1>
        </div>
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Товары для здоровья</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel atque nostrum. Quasi distinctio architecto ipsum earum voluptates quia recusandae neque fugiat, pariatur voluptas ea laudantium eaque deserunt sapiente eos sit provident itaque explicabo illum autem. Numquam sint odio nobis quae fugiat provident? Voluptatem praesentium nobis eius qui quo corporis!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Фитнес и тренинг</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Кардиотренировки</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Охота и рыбалка</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Плавание пляж водный спорт</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Игрушки</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Каркасные и Надувные бассейны</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Самокаты ролики скейтборды</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Спортивное питание</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Кардиотренировки</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
export default CatalogAccordion;
