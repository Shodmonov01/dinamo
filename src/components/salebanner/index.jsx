import "./salebanner.scss";
import SaleBannerImg from "../../assets/images/sneakers.png";
const SaleBanner = () => {
    return (
        <>
            <div className="container-xxl">
                <div className="sale-banner-full">
                    <div className="container-xl">
                        <div className="sale-banner">
                            <div className="sale-banner-left">
                                <h1>Pаспродажа Oсенних Kроссовок</h1>
                                <p>320.000 uzs</p>
                                <h6>240.000 uzs</h6>
                            </div>
                            <div className="sale-banner-right">
                                <img src={SaleBannerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default SaleBanner;