import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BsTelegram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {FaCcVisa} from "react-icons/fa";
import {CustomContext} from "../../Context";


const Footer = () => {
    const {t} = useTranslation();
    const {status, setStatus} = useContext(CustomContext);
    const {page, setPage} = useContext(CustomContext);


    return (
        <footer className='footer'>
            <div className="container">
                <nav className="footer__nav">
                    <Link to='/' className='header__title'> <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 279.000000 198.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,198.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1249 1648 l-174 -173 172 -3 c94 -1 251 -1 347 0 l176 3 -173 173 -174 174 -174 -174z"/> <path d="M1060 883 l0 -436 117 -119 c64 -65 121 -118 125 -118 4 0 8 196 8 435 l0 435 427 0 428 0 -120 120 -120 120 -432 0 -433 0 0 -437z"/> <path d="M729 1124 l-174 -174 161 -160 c168 -168 186 -178 198 -118 9 46 7 616 -2 622 -5 3 -87 -74 -183 -170z"/> <path d="M1460 533 l0 -388 385 385 c212 212 385 386 385 387 0 2 -173 3 -385 3 l-385 0 0 -387z"/> </g> </svg>
                        </span>Exired</Link>
                    <ul className='header__list'>
                        <li className='header__item'><NavLink className='header__link'
                                                             to="/">{t("header.link1")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link'
                                                              to="/shop">{t("header.link2")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link'
                                                              to="/brands">{t("header.link3")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link'
                                                              to="/contact">{t("header.link4")}</NavLink></li>
                    </ul>
                    <div className='footer__contact'>
                        {/* <a className='footer__contact-tel' href='tel: +7 (495) 823-54-12'>+7 (495) 823-54-12</a> */}
                        <a className='footer__contact-tel' href='#'>dovblank@yandex.ru</a>
                    </div>
                </nav>
                <div className='footer__content'>
                    <div className='footer__content-right'>
                        <p className='footer__content-defense' dangerouslySetInnerHTML={{__html: t("footer.defense")}}/>
                        <ul className='footer__content-clothes'>
                            <NavLink to='/shop'>
                                <li onClick={() => {
                                    setPage(1);
                                    setStatus('sportsuit')}} className={`footer__content-item ${status === "sportsuit" && 'footer__content-item_active'}`}>{t("footer.suit")}
                                </li>
                            </NavLink>
                            <NavLink to='/shop'>
                                <li onClick={() => {
                                    setPage(1);
                                    setStatus('sweatshirt')}} className={`footer__content-item ${status === "sweatshirt" && 'footer__content-item_active'}`}>{t("footer.sweatshirt")}
                                </li>
                            </NavLink>
                            <NavLink to='/shop'>
                                <li onClick={() => {
                                    setPage(1);
                                    setStatus('tshort')}} className={`footer__content-item ${status === "tshort" && 'footer__content-item_active'}`}>{t("footer.tshort")}
                                </li>
                            </NavLink>
                            <NavLink to='/shop'>
                                <li  className={`footer__content-item ${status === "hoody" && 'footer__content-item_active'}`}  onClick={() => {
                                    setPage(1);
                                    setStatus('hoody')}}>{t("footer.hoodies")}
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='footer__content-left'>
                        <ul className='footer__content-icons'>
                            <li className='footer__content-icon'><a  href="https://t.me/Khytlua"><BsTelegram/></a></li>
                            {/* <li className='footer__content-icon'><BsFacebook/></li>
                            <li className='footer__content-icon'><BsTwitter/></li> */}
                        </ul>
                        {/* <a className='footer__content-pay' href="#"><FaCcVisa/></a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;