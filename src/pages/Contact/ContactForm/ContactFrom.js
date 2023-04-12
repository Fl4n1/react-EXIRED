import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import './contactForm.scss'
import InputMask from "react-input-mask";

const ContactFrom = () => {
    const {t} = useTranslation();

    return (
        <section className="contactForm">
            <div className="container">
                <h3 className="form__title" dangerouslySetInnerHTML={{__html: t("contacts.form.title")}}/>
                <form  className="form" action="https://formsubmit.co/c.a.gorbunov@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="https://www.exiredshop.ru/"/>
                    <input className="form__input" type="text" placeholder={t("contacts.form.name")}/>
                    <input className="form__input" name="email" type="email" placeholder={t("contacts.form.eMail")}/>
                    <InputMask mask={`+\\7\\(999)999-99-99`}  type='tel'  id='tel'  className="form__input" placeholder='Ввеите номер телефона'/>
                    <textarea className="form__message" placeholder={t("contacts.form.message")}/>
                    <button  className="form__btn" type="submit" dangerouslySetInnerHTML={{__html: t("contacts.form.btn")}}/>
                </form>
            </div>
        </section>
    );
};

export default ContactFrom;