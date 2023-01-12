import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/reducers/catalog_slice";
import { fetchMebel } from "../../redux/reducers/mebel_slice";
import CatalogList from "../catalogList";
import Error from "../error";
import MebelList from "../mebelList";
import Search from "../search";
import Loader from "../loader";

function Main() {
  const { catalogLoading } = useSelector((state) => state.catalog);
  const { mebelLoading } = useSelector((state) => state.mebel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
    dispatch(fetchMebel());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main container">
      {catalogLoading === "loading" ? (
        <Loader />
      ) : catalogLoading === "error" ? (
        <Error />
      ) : (
        <CatalogList />
      )}
      <Search />
      {mebelLoading === "loading" ? (
        <Loader />
      ) : mebelLoading === "error" ? (
        <Error />
      ) : (
        <MebelList />
      )}
    </div>
  );
}

export default Main;
