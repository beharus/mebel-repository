import React from "react";
import { useSelector } from "react-redux";
import Error from "../components/error";
import Search from "../components/search";
import Loader from "../components/loader";
import CatalogList from "../components/catalogList";
import CatalogMenu from "../components/catalogMenu";
import Contact from "../components/contact";

function Model2D() {
  const { catalogLoading } = useSelector((state) => state.catalog);

  return (
    <div>
      <div className="main container">
        {catalogLoading === "loading" ? (
          <Loader />
        ) : catalogLoading === "error" ? (
          <Error />
        ) : (
          <>
            <CatalogMenu />
            <Search />
            <CatalogList />
          </>
        )}
      </div>
      <div className=" my-[18%]">
        <Contact />
      </div>
    </div>
  );
}

export default Model2D;
