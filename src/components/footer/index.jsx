import './footer.scss';

// bu yerda icon.jsx dan aniq bir iconkalar olingan
import { FacebookIcon, InstagramIcon, Logo, TelegramIcon, TiktokIcon, YoutubeIcon } from "../../assets/images/icons";
import { Link } from "react-router-dom";
import Click from "../../assets/images/click.svg";
import Payme from "../../assets/images/payme.svg";
const Footer = () => {
    return (
        <>
            <footer className="container-xxl">
                <div className="container-xxl">
                    <div className="footer">
                        <div className="footer-top container">
                            <div className="footer-logo">
                                <Link to="/"><Logo /></Link>
                            </div>
                            <div className="footer-category">
                                <h1>Каталог</h1>
                                <Link to="/">Одежда & Обувь
                                </Link>
                                <Link to="/">Фитнес и тренинг</Link>
                                <Link to="/">Кардиотренировки
                                </Link>
                                <Link to="/">Игрушки
                                </Link>
                            </div>
                            <div className="footer-category">
                                <h1>Информатция</h1>
                                <Link to="/">Одежда & Обувь
                                </Link>
                                <Link to="/">Фитнес и тренинг</Link>
                                <Link to="/">Кардиотренировки
                                </Link>

                            </div>
                            <div className="footer-about">
                                <h1>Номер Телефона:</h1>
                                <Link to="/">+998 (90) 325-36-32 </Link>
                                <div className="footer-social-media">
                                    <h1>Соц.сети:</h1>
                                    <div className="footer-icons">
                                        <Link to={"/"}><TelegramIcon /></Link>
                                        <Link to={"/"}><InstagramIcon /></Link>
                                        <Link to={"/"}><FacebookIcon /></Link>
                                        <Link to={"/"}><YoutubeIcon /></Link>
                                        <Link to={"/"}><TiktokIcon /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-about">
                                <h1>Адрес:</h1>
                                <Link to="/">Ташкент г, площадь Хадра, улица Себзор
                                </Link>
                                <Link to="/">Ориентир: возле Национального Цирка</Link>
                                <h1>Платежные системы</h1>
                                <div className="footer-icons">
                                    <Link to={"/"}>
                                        <img src={Payme} alt="" />
                                    </Link>
                                    <Link to={"/"}>
                                        <img src={Click} alt="" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="footer-center">
                            <div className="container">
                                <p>Классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э.</p>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="footer-bottom-text">
                                    <p>© 2022. All rights reserved</p>
                                    <Link>Design by <span>Sages Group</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
};
export default Footer;