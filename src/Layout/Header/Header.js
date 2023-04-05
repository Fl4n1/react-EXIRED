import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../Context";
import {BsTelegram} from "react-icons/bs";
import {BsHandbag} from "react-icons/bs";
import {Link, NavLink} from "react-router-dom"
import {useTranslation} from "react-i18next";
import {FaUser} from 'react-icons/fa'

const Header = () => {
    const {t, i18n} = useTranslation();
    const [burger, setBurger] = useState(false);

    const {user, logOutUser, cart} = useContext(CustomContext);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };

    const closeCart = (e) => {
        if (e.target.class === 'overlay') {

        }
    };



    return (
        <div className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <p className='header__logo'>
                        <Link to='/' className='header__title'> <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 279.000000 198.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,198.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1249 1648 l-174 -173 172 -3 c94 -1 251 -1 347 0 l176 3 -173 173 -174 174 -174 -174z"/> <path d="M1060 883 l0 -436 117 -119 c64 -65 121 -118 125 -118 4 0 8 196 8 435 l0 435 427 0 428 0 -120 120 -120 120 -432 0 -433 0 0 -437z"/> <path d="M729 1124 l-174 -174 161 -160 c168 -168 186 -178 198 -118 9 46 7 616 -2 622 -5 3 -87 -74 -183 -170z"/> <path d="M1460 533 l0 -388 385 385 c212 212 385 386 385 387 0 2 -173 3 -385 3 l-385 0 0 -387z"/> </g> </svg>
                        </span>Exired</Link>
                    </p>
                    <ul onClick={closeCart} className={`header__list ${burger ? 'header__list_active' : ''}`}>
                        <li className='header__item'><NavLink className='header__link' to="/">{t("header.link1")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link' to="/shop">{t("header.link2")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link' to="/brands">{t("header.link3")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link' to="/contact">{t("header.link4")}</NavLink></li>
                        {
                            user.email === 'admin@mail.ru' ? <li className='header__item'><NavLink className='header__link' to="/clothes">Admin Panel</NavLink></li> : ''
                        }
                        <li className='header__phone'><a className='header__phone' href="https://t.me/Khytlua"><BsTelegram/> @Khytlua</a> </li>

                    </ul>
                    <div className='header__info'>

                        <NavLink className="header__link header__link_basket" to="/basket"><BsHandbag/><span style={{background: cart.length ? '#998E78' : ''}} className='header__link_cart'>{cart.length  || ''}</span>
                        </NavLink>
                        <div className='header__btns'>
                            {/* <button style={{background: i18n.language === 'ru' ? 'lightblue' : ''}} className='header__btn ' onClick={() => changeLanguage('ru')} type='button'>Ru</button> */}
                            {/* <button style={{background: i18n.language === 'en' ? 'lightblue' : ''}} className='header__btn' onClick={() => changeLanguage('en')} type='button'>Eng</button> */}
                        </div>

                        {
                            user.login.length
                            ? <NavLink className='header__user' to='profile'><FaUser/></NavLink>
                            : ''
                        }

                        {
                            user.login.length
                            ? <Link className='header__out' to='/' onClick={() => logOutUser()} >Выйти</Link>
                            : <Link className='header__login' to='login'>Войти</Link>
                        }

                    </div>
                </nav>


                <div className={`burger ${burger ? 'burger_active' : ''}`} onClick={() => setBurger(!burger)}>
                <span className='burger__line'>

                </span>
                </div>

            </div>
            <div onClick={() => setBurger(false)} className={`overlay ${burger ? 'overlay_active' : ''}`}>

            </div>
        </div>
    );
};

export default Header;