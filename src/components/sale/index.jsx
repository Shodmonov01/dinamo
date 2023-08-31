import SaleCard from "../salecard";
// import "./sale.js"
import "./sale.scss";
import SaleCardImg from "../../assets/images/saleCardImg.png";
import { useState } from "react";
const Sale = () => {
  const [like, setLike] = useState(false);
  const data = [
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
    {
      img: SaleCardImg,
      title: "Перчатки Боксерские ФТБР",
      cost: "240.000 uzs",
      newcost: "120.000 uzs",
      saleCost: "50%",
      isLiked: like,
      id: 0,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container-xxl">
        <div className="container">
          <div className="sale">
            <div className="sale-title">
              <h1>Скидки</h1>
            </div>
            <div className="sale-cards">
              {open ? (
                <>
                  {data?.map((i, k) => (
                    <SaleCard
                      img={i.img}
                      title={i.title}
                      setState={setLike}
                      id={i.id}
                      newcost={i.newcost}
                      cost={i.cost}
                      isLiked={i.isLiked}
                      saleCost={i.saleCost}
                    />
                  ))}
                </>
              ) : (
                data
                  .slice(0, 5)
                  .map((i, k) => (
                    <SaleCard
                      img={i.img}
                      title={i.title}
                      setState={setLike}
                      id={i.id}
                      newcost={i.newcost}
                      cost={i.cost}
                      isLiked={i.isLiked}
                      saleCost={i.saleCost}
                    />
                  ))
              )}
            </div>
            <div className="sale-bottom " id="sale-bottom">
              <button
                onClick={() => setOpen(!open)}
                className="sale-button"
                id="sale-button"
              >
                Cмотрите все
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sale;
