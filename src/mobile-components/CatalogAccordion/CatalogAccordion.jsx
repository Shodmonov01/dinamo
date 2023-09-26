import React from "react";
import { Accordion } from "react-bootstrap";
import s from"./CatalogAccordion.css";

const CatalogAccordion = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" className={s.catalog_accaradion}>
        <Accordion.Item eventKey="0" className={s.catalog_item}>
          <Accordion.Header className={s.catalog_header}>Товары для здоровья</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Фитнес и тренинг</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Кардиотренировки</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="style1w1">Охота и рыбалка</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Плавание пляж водный спорт</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Игрушки</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Каркасные и Надувные бассейны</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Самокаты ролики скейтборды</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Спортивное питание</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Кардиотренировки</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default CatalogAccordion;
