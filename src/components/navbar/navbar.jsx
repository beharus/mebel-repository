import React from "react";
import "./style.css";
import logo from "./img/logotip.png";
import { BsTelephone } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="menu-item category">
          <button
            onClick={() => {
              document
                .querySelector(".category-content")
                .classList.toggle("active");
            }}
          >
            Каталог
          </button>
          <div className="category-content">
            <ul>
              <li>
                <a href="">Диваны </a>
              </li>
              <li>
                <a href="">Кресла </a>
              </li>
              <li>
                <a href="">Стулья </a>
              </li>
              <li>
                <a href="">Матрацы </a>
              </li>
              <li>
                <a href="">Пуфы </a>
              </li>
              <li>
                <a href="">Эксклюзивная мебель</a>
              </li>
              <li>
                <a href="">2D-3D модели</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-item">
          <a href="">Индивидуальная мебель</a>
        </div>
        <div className="menu-item">
          <a href="">Контакты</a>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-item">
          <a href="">О компании</a>
        </div>
        <div className="menu-numb">+38 (099)-638-45-37</div>
        <div className="lang lang-lg">
          <select>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
        </div>
        <div className="md">
          <div className="lang item">
            <select>
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
          <div className="menu-btn i1 item">
            <i class="">
              <BsTelephone />
            </i>
          </div>
          <div className="menu-btn i2 item">
            <i className="">
              <VscThreeBars />
            </i>

            <div className="md-menu">
              <div className="md-menu-item">
                <a href="">
                  <div className="category-content">
                    <button>Каталог</button>
                    <ul>
                      <li>
                        <a href="">Диваны </a>
                      </li>
                      <li>
                        <a href="">Кресла </a>
                      </li>
                      <li>
                        <a href="">Стулья </a>
                      </li>
                      <li>
                        <a href="">Матрацы </a>
                      </li>
                      <li>
                        <a href="">Пуфы </a>
                      </li>
                      <li>
                        <a href="">Эксклюзивная мебель</a>
                      </li>
                      <li>
                        <a href="">2D-3D модели</a>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="md-menu-item">
                <a href="">Индивидуальная мебель</a>
              </div>
              <div className="md-menu-item">
                <a href="">Контакты</a>
              </div>
              <div className="md-menu-item">
                <a href="">О компании</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
