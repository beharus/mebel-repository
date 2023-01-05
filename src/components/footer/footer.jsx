import React from "react";
import "./style.css";
import logo from "../navbar/img/logo-w.png";
import instagram from "../navbar/img/instagram.png";
import facebook from "../navbar/img/facebook.png";
import arrow from "../navbar/img/Arrow 1.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="col1">
        <li><a href="">Каталог </a></li>
        <li><a href="">о компании </a></li>
        <li><a href="">Индивидуальная <br/>мебель </a></li>
        <li><a href="">Партнерам <br/>дизайнерам </a></li>
      </div>
      <div className="col2">
        <li><a href="">2D, 3D модели </a></li>
        <li><a href="">Шоу-румы </a></li>
        <li><a href="">Дилерам </a></li>
        <li><a href="">Контакты </a></li>
        <li><a href="">Конфигуратор </a></li>
      </div>
      <div className="col3">
        <div className="flex">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="numb">
        +38 (099)-638-45-37
        </div>
        <button>
          <span>Персональная консультация</span>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
