import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfoDetail from "../components/infoDetail";
import { setInfoDetail } from "../redux/reducers/catalog_slice";

function Model3D() {
  const { filteredCatalog } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const { name } = useParams();

  const item = filteredCatalog.filter((item) => item.name === name)[0];
  dispatch(setInfoDetail(item));

  return (
    <div className="model-3d container">
      <InfoDetail />
    </div>
  );
}

export default Model3D;
