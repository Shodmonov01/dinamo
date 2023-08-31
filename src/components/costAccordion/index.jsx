import { Accordion } from "react-bootstrap";
import "./cost.scss";

const Cost = () => {
  return (
    <>

    {/* bu yerda accordion qanaqa holatda turishi kursatilgan */}
      <Accordion defaultActiveKey={["0"]} alwaysOpen>

        {/* bu yerda esa accordion qanaqa turgani */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Цена</Accordion.Header>
          <Accordion.Body>
            <div className="cost-inputs">
              <form>
                <input
                  type="number"
                  name="number"
                  placeholder="20.000 usz"
                  min="20.000"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="10.000.000 uzs"
                  max="10.000.000"
                />
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default Cost;
