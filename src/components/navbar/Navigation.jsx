import React from 'react'
// import { Link } from "react-router-dom";
// import { LocationIcon } from "../../assets/images/icons.jsx";
import "./navbar.css";
const Navigation = () => {
    return (
        <>
            <div className="container-xxl">
                <div className="navbar">
                    <div className="container">
                        <div className="navigation">
                            <div className="navbar-left">
                                {/* <Link to="/"><LocationIcon /> Ташкент</Link> */}

                            </div>
                            <div className="navbar-right">
                                {/* <Link className="navbar-links">Доставка</Link> */}
                                <div className="nav-select">
                                    <select>
                                        <option>Рус</option>
                                        <option>O'zb</option>
                                        <option>Eng</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Navigation;