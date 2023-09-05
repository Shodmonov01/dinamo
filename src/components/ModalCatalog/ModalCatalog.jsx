import React from 'react'
import './ModalCatalog.css'
import { Link } from "react-router-dom";
import osanka from "../../assets/images/osanka.png";


const ModalCatalog = props => {
  if (!props.show) {
    return null
}
  return (
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-container">
            
          </div>
          <div className="modal-body">
            <div className="modal-body_left">
              <Link>Одежда & Обувь</Link>
              <p>Фитнес и тренинг</p>
              <p>Кардиотренировки</p>
              <p>Охота и рыбалка</p>
              <p>Плавание пляж водный спорт</p>
              <p>Игрушки</p>
              <p>Каркасные и Надувные бассейны</p>
              <p>Самокаты ролики скейтборды</p>
              <p>Спортивное питание</p>
              <p>Активный отдых, туризм и хобби</p>
            </div>

            <div className="modal-body_left">
              <Link>Одежда & Обувь</Link>
              <p>Фитнес и тренинг</p>
              <p>Кардиотренировки</p>
              <p>Охота и рыбалка</p>
              <p>Плавание пляж водный спорт</p>
              <p>Игрушки</p>
              <p>Каркасные и Надувные бассейны</p>
              <p>Самокаты ролики скейтборды</p>
              <p>Спортивное питание</p>
              <p>Активный отдых, туризм и хобби</p>
            </div>

            <div className="modal-footer">
              {/* <button onClick={props.onClose} className="modal-button">
                Close
              </button> */}
              <img src={osanka} alt="" />
             </div>
             
               
          </div>


          
        </div>
      </div>
    )
}

export default ModalCatalog