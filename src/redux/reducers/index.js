import { combineReducers } from "@reduxjs/toolkit";
import mebel from "./mebel_slice";
import catalog from "./catalog_slice";

export default combineReducers({
  mebel,
  catalog,
});
