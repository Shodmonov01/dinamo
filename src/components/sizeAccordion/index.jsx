import { Accordion } from "react-bootstrap";
import "./size.scss";

const SizeAccordion = () => {
  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Размер скидки</Accordion.Header>
          <Accordion.Body>
            <div className="size-inputs">
              <form >
               <div className="size-checkbox">
               <input type="checkbox" name="" id="all"  />
               <label htmlFor="all">Любая</label>
               </div>
               <div className="size-checkbox">
               <input type="checkbox" name="" id="5"  />
               <label htmlFor="5">5% и более</label>
               </div>
               <div className="size-checkbox">
               <input type="checkbox" name="" id="15"  />
               <label htmlFor="15">15% и более</label>
               </div>
               <div className="size-checkbox">
               <input type="checkbox" name="" id="30"  />
               <label htmlFor="30">30% и более</label>
               </div>
               <div className="size-checkbox">
               <input type="checkbox" name="" id="50"  />
               <label htmlFor="50">50% и более</label>
               </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default SizeAccordion;
