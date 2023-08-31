import React from 'react'
import { Accordion } from "react-bootstrap";
import "./brendaccordion.css";

const BrendAccordion = () => {
  return (
    <>
    {/* bu yerda accordion ochiq turishi uchun alwaysOpen yozib qo`yilgan */}
      <Accordion defaultActiveKey={["0"]} alwaysOpen>  
      {/* agar bu yerda eventKey = 1 turganida , accordion yopiq turardi */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Бренды</Accordion.Header>
          <Accordion.Body>
            <div className="brend-inputs">
              <form >
               <div className="brend-checkbox">
               <input type="checkbox" name="" id="nike"  />
               <label htmlFor="nike">Nike</label>
               </div>
               <div className="brend-checkbox">
               <input type="checkbox" name="" id="adidas"  />
               <label htmlFor="adidas">Adidas</label>
               </div>
               <div className="brend-checkbox">
               <input type="checkbox" name="" id="reyvul"  />
               <label htmlFor="reyvul">Reyvul</label>
               </div>
               <div className="brend-checkbox">
               <input type="checkbox" name="" id="buka"  />
               <label htmlFor="buka">Buka</label>
               </div>
               <div className="brend-checkbox">
               <input type="checkbox" name="" id="venum"  />
               <label htmlFor="venum">Venum</label>
               </div>
               <div className="brend-checkbox">
               <input type="checkbox" name="" id="puma"  />
               <label htmlFor="puma">Puma</label>
               </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        
      </Accordion>
    </>
  );
};
export default BrendAccordion;
