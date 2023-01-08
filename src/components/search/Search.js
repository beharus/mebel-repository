import React from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { handleKey } from "../../redux/actions";
import {
  setSearch,
  setCatalogActive,
} from "../../redux/reducers/catalog_slice";

function Search() {
  const { catalog, catalogFilter, catalogActive, search } = useSelector(
    (state) => state.catalog
  );
  const dispatch = useDispatch();
  const arrFour = [1, 2, 3, 4, 5, 6, 7, 8];
  const arrTwo = [1, 2, 3, 4];
  let classFour = "rectangle group-hover:bg-black duration-200";
  let classTwo = "rectangle group-hover:bg-black duration-200";

  return (
    <div className="row d-flex align-items-center justify-content-between search my-20">
      <div className="col-md-4 col-7 d-flex justify-content-start">
        <select
          className="form-select lg:w-5/12 md:w-10/12 sm:w-4/5"
          className="form-select cursor-pointer border-none w-fit"
          aria-label="Default select example"
        >
          <option defaultValue="">Все 2D-3D модели</option>
          {catalog.map((item) => {
            const clas = item.name === catalogFilter ? "activeFilter" : "";
            return (
              <option key={item.id} value={item.id} className={clas}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col-md-5 col-5 d-flex justify-end ">
        <div
          className="group cursor-pointer responsive-filterable"
          onClick={() => dispatch(setCatalogActive(true))}
        >
          {arrFour.map((item) => {
            classFour += catalogActive ? " bg-black" : " bg-[#F2F3F5]";
            return <div key={item} className={classFour}></div>;
          })}
        </div>
        <div
          className="group cursor-pointer responsive-filterable-2x2"
          onClick={() => dispatch(setCatalogActive(false))}
        >
          {arrTwo.map((item) => {
            classTwo += catalogActive ? " bg-[#F2F3F5]" : " bg-black";
            return <div key={item} className={classTwo}></div>;
          })}
        </div>
      </div>

      <div className="col-md-3 md:m-auto mt-[30px] col-12 d-flex justify-center md:justify-end">
        <div className="w-9/12 py-[6px] px-3 flex border-[#343434] border">
          <div className=" w-9/12 py-[6px] px-3 flex border-[#343434] border ">
            <input
              type="search"
              placeholder="Поиск"
              aria-label="Поиск"
              aria-describedby="basic-addon2"
              value={search}
              className="w-full outline-none border-r-none rounded-none"
              className=" placeholder:text-[#D1D1D1] text-[#343434] w-full outline-none border-r-none rounded-none"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              onKeyDown={(e) => dispatch(handleKey(e, search))}
            />
            <button className=" border-l-none bg-transparent" id="basic-addon2">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2937 7.77206C14.2937 8.56593 14.132 9.35203 13.8177 10.0855C13.5034 10.8189 13.0428 11.4853 12.4621 12.0467C11.8814 12.608 11.192 13.0533 10.4332 13.3571C9.67451 13.6609 8.86131 13.8173 8.04006 13.8173C7.21882 13.8173 6.40562 13.6609 5.64688 13.3571C4.88815 13.0533 4.19875 12.608 3.61804 12.0467C3.03734 11.4853 2.57669 10.8189 2.26242 10.0855C1.94814 9.35203 1.78638 8.56593 1.78638 7.77206C1.78638 6.16877 2.44525 4.63114 3.61804 3.49744C4.79084 2.36374 6.38148 1.72684 8.04006 1.72684C9.69864 1.72684 11.2893 2.36374 12.4621 3.49744C13.6349 4.63114 14.2937 6.16877 14.2937 7.77206ZM13.0591 13.8449C11.4535 15.0849 9.41777 15.6835 7.36991 15.5178C5.32204 15.3521 3.41753 14.4348 2.0475 12.9541C0.677472 11.4735 -0.0540692 9.5419 0.00311686 7.55615C0.0603029 5.5704 0.901875 3.68118 2.355 2.2765C3.80812 0.871813 5.76248 0.0582928 7.81671 0.00301297C9.87093 -0.0522668 11.8691 0.654889 13.4008 1.97925C14.9325 3.30361 15.8815 5.14464 16.0529 7.12425C16.2243 9.10385 15.605 11.0717 14.3223 12.6238L19.3932 17.5239C19.4762 17.6042 19.5421 17.6995 19.5871 17.8044C19.632 17.9093 19.6552 18.0218 19.6552 18.1353C19.6552 18.2489 19.632 18.3613 19.5871 18.4662C19.5421 18.5711 19.4762 18.6664 19.3932 18.7467C19.3101 18.827 19.2115 18.8907 19.103 18.9342C18.9944 18.9776 18.8781 19 18.7607 19C18.6432 19 18.5269 18.9776 18.4183 18.9342C18.3098 18.8907 18.2112 18.827 18.1281 18.7467L13.0609 13.8449H13.0591Z"
                  fill="#343434"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
