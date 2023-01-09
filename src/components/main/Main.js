import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/reducers/catalog_slice";
import Error from "../error";
import Search from "../search";
import Loader from "../loader";
import CatalogList from "../catalogList";
import CatalogMenu from "../catalogMenu/CatalogMenu";
import Contact from "../contact/Contact";

function Main() {
  const { catalogLoading } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="main container">
        {catalogLoading === "loading" ? (
          <Loader />
        ) : catalogLoading === "error" ? (
          <Error />
        ) : (
          <CatalogMenu />
        )}
        <Search />
        {catalogLoading === "loading" ? (
          <Loader />
        ) : catalogLoading === "error" ? (
          <Error />
        ) : (
          <CatalogList />
        )}
      </div>
        <div className=" my-[18%]">
          <Contact />
        </div>
    </div>
  );
}

export default Main;
