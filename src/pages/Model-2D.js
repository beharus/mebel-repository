import React from "react";
import { useSelector } from "react-redux";
import Error from "../components/error";
import Search from "../components/search";
import Loader from "../components/loader";
import CatalogList from "../components/catalogList";
import CatalogMenu from "../components/catalogMenu";
import Contact from "../components/contact";
import Button from "../components/button/Button";

function Model2D() {
  const { catalogLoading } = useSelector((state) => state.catalog);

  return (
    <div className="main">
      {catalogLoading === "loading" ? (
        <Loader />
      ) : catalogLoading === "error" ? (
        <Error />
      ) : (
        <div>
          <CatalogMenu />
          <Search />
          <CatalogList />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default Model2D;
