import React from "react";
import "./navbar.css";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setCatalogFilter } from "../../redux/reducers/catalog_slice";

function Navbar() {
  const { catalog, catalogFilter } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  return (
    <div className="navbar container px-[2%]">
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
              {catalog.map((item) => {
                return (
                  <li
                    key={item.id}
                    value={item.name}
                    className={
                      item.name === catalogFilter ? "activeFilter" : ""
                    }
                    onClick={(e) => dispatch(setCatalogFilter(e.target.value))}
                  >
                    {item.name}
                  </li>
                );
              })}
              <li className="">2D-3D модели</li>
            </ul>
          </div>
        </div>
        <div className="menu-item">
          <a href="!#">Индивидуальная мебель</a>
        </div>
        <div className="menu-item">
          <a href="!#">Контакты</a>
        </div>
        <div className="logo">
          <img src={require(`../../images/logotip.png`)} alt="logo" />
        </div>
        <div className="menu-item">
          <a href="!#">О компании</a>
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
            <i
              className=""
              onClick={() => {
                document
                  .querySelector(".navbar .md i .menu-numb-md")
                  .classList.toggle("active");
              }}
            >
              <img src={require(`../../images/phone-call.png`)} alt="phone" />
              <div
                onClick={() => document.querySelector(".menu-numb-md").select()}
                className="menu-numb-md"
                id="call"
              >
                +38 (099)-638-45-37
              </div>
            </i>
          </div>
          <div className="menu-btn i2 item">
            <i
              className=""
              onClick={() => {
                document
                  .querySelector(".navbar .md .md-menu")
                  .classList.add("active");
              }}
            >
              <img src={require(`../../images/menu.png`)} alt="menu" />
            </i>

            <div className="md-menu">
              <div className="ms-menu-content">
                <div className="md-menu-item">
                  <div className="category-content">
                    <i
                      className="close"
                      onClick={() => {
                        document
                          .querySelector(".navbar .md .md-menu")
                          .classList.remove("active");
                      }}
                    >
                      <GrClose />
                    </i>
                    <button
                      onClick={() => {
                        document
                          .querySelector(
                            ".navbar .md .md-menu .md-menu-item .category-content ul"
                          )
                          .classList.toggle("active");
                      }}
                    >
                      Каталог
                    </button>
                    <ul>
                      <li>
                        <a href="!#">Диваны </a>
                      </li>
                      <li>
                        <a href="!#">Кресла </a>
                      </li>
                      <li>
                        <a href="!#">Стулья </a>
                      </li>
                      <li>
                        <a href="!#">Матрацы </a>
                      </li>
                      <li>
                        <a href="!#">Пуфы </a>
                      </li>
                      <li>
                        <a href="!#">Эксклюзивная мебель</a>
                      </li>
                      <li>
                        <a href="!#">2D-3D модели</a>
                      </li>
                      <li>
                        <a href="!#">Страница партнеров дизайнеров</a>
                      </li>
                      <li>
                        <a href="!#">Дилерам </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md-menu-item">
                  <a href="!#">Индивидуальная мебель</a>
                </div>
                <div className="md-menu-item">
                  <a href="!#">Контакты</a>
                </div>
                <div className="md-menu-item end">
                  <a href="!#">О компании</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
