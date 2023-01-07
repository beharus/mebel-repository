import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/reducers/catalog_slice";
import CatalogSlider from "../catalogSlider";
import Error from "../error";
import Search from "../search";
import Loader from "../loader";
import CatalogList from "../catalogList";

function Main() {
  const { catalogLoading } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main container">
      {catalogLoading === "loading" ? (
        <Loader />
      ) : catalogLoading === "error" ? (
        <Error />
      ) : (
        <CatalogSlider />
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
  );
}

export default Main;
