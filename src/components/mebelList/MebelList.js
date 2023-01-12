import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MebelItem from "../mebelItem";
import { setFilterdMebelList } from "../../redux/actions";

function MebelList() {
  const { mebel, filteredMebel, search } = useSelector((state) => state.mebel);
  const { catalogStatus } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterdMebelList(mebel, catalogStatus, search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return filteredMebel ? (
    <div className="row row-cols-2 row-cols-md-4 g-4 mebel-list">
      {filteredMebel.map((elem) => (
        <MebelItem key={elem.id} {...elem} />
      ))}
    </div>
  ) : (
    <h1>Nothing here</h1>
  );
}

export default MebelList;