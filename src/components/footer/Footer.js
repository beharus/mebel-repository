import React from "react";
import "./footer.css";
import logo from "../navbar/images/logo-w.png";
import x from "../navbar/images/x.png";
import instagram from "../navbar/images/instagram.png";
import facebook from "../navbar/images/facebook.png";
import ekmi from "../navbar/images/ekmi.png";

function Footer() {
  return (
    <div className="footer-content relative">
      <div>
        <img
          src={ekmi}
          alt="ekmi.png"
          className=" md:w-[364px] w-[182px] absolute right-[9.5%] -top-[49px] md:-top-[94px]"
        />
      </div>
      <div className="footer container">
        <div className="logo">
          <img src={logo} alt="" />
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
              <img src={instagram} alt="" />
            </a>
            <a href="!#">
              <img src={facebook} alt="" />
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
                src={x}
                alt=""
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
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                запросить звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
