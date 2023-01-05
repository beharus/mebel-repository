import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleKey } from "../../redux/actions";
import { setSearch } from "../../redux/reducers/mebel_slice";

function Search() {
  const { search } = useSelector((state) => state.mebel);
  const dispatch = useDispatch();
  console.log("search: ", search);

  return (
    <div className="">
      <form
        className="col-12 col-lg-auto my-5 d-flex justify-content-between"
        role="search"
      >
        <select
          className="form-select w-25"
          aria-label="Default select example"
        >
          <option defaultValue="">All 2D-3D models</option>
          <option value="1">sofas</option>
          <option value="2">chairs</option>
          <option value="3">armchairs</option>
          <option value="4">beds</option>
          <option value="5">mattresses</option>
          <option value="6">poufs</option>
          <option value="7">exclusiveFurnitures</option>
        </select>
        <input
          type="search"
          className="form-control w-25"
          placeholder="Search..."
          aria-label="Search"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          onKeyDown={(e) => dispatch(handleKey(e, search))}
        />
      </form>
    </div>
  );
}

export default Search;
