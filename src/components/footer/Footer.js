import React from "react";
import Button from "../button/Button";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-content relative mt-[54px]">
      <div>
        <img
          src={require(`../../images/ekmi.png`)}
          alt="ekmi.png"
          className=" md:w-[364px] w-[182px] absolute right-[9.5%] -top-[49px] md:-top-[94px]"
        />
      </div>
      <div className=" container">
        <div className="footer container">
          <div className="logo">
            <img src={require(`../../images/logo-w.png`)} alt="logo" />
          </div>
          <div className="col1">
            <li>
              <a href="!#">Каталог</a>
            </li>
            <li>
              <a href="!#">о компании </a>
            </li>
            <li>
              <a href="!#">
                Индивидуальная <br />
                мебель{" "}
              </a>
            </li>
            <li>
              <a href="!#">
                Партнерам <br />
                дизайнерам{" "}
              </a>
            </li>
          </div>
          <div className="col2">
            <li>
              <a href="!#">2D, 3D модели </a>
            </li>
            <li>
              <a href="!#">Шоу-румы </a>
            </li>
            <li>
              <a href="!#">Дилерам </a>
            </li>
            <li>
              <a href="!#">Контакты </a>
            </li>
            <li>
              <a href="!#">Конфигуратор </a>
            </li>
          </div>
          <div className="col3">
            <div className="flex">
              <a href="!#">
                <img
                  src={require(`../../images/instagram.png`)}
                  alt="instagram"
                />
              </a>
              <a href="!#">
                <img
                  src={require(`../../images/facebook.png`)}
                  alt="facebook"
                />
              </a>
            </div>
            <div className="numb">+38 (099)-638-45-37</div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="button"
            >
              <span>Персональная консультация</span>
            </button>
          </div>
        </div>
      </div>
      <p>© 1993–2021 Интернет-магазин «EKMI™» — меблі</p>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                <span>Заполните форму</span>
                <br />
                остались вопросы?
              </h1>
              <img
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                src={require(`../../images/x.png`)}
                alt="x png"
              />
            </div>
            <div className="modal-body">
              <form>
                <input type="text" placeholder="Ваше имя*" />
                <br />
                <input type="tel" placeholder="Ваш номер телефона*" />
                <br />
                <input type="text" placeholder="Страна" />
                <br />
                <input type="text" placeholder="Комментарий" />
              </form>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <p>
                  Подтверждая заказ, я принимаю условия пользовательского
                  соглашения
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
