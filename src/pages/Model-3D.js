import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../components/contact";
import InfoDetail from "../components/infoDetail";
import LatestPublic from "../components/latestPublic";
import { useParams } from "react-router-dom";
import { setInfoDetail } from "../redux/reducers/catalog_slice";

function Model3D() {
  const { filteredCatalog } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const { name } = useParams();

  const item = filteredCatalog[0].find((item) => item.name === name);
  dispatch(setInfoDetail(item));

  return (
    <div className="model-3d">
      <InfoDetail />
      <Contact />
      <LatestPublic firstLetter='П' header='охожие товары' />
    </div>
  );
}

export default Model3D;
