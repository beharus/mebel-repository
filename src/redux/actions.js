import { setFilteredMebel, setSearch } from "./reducers/mebel_slice";

export const setFilterdMebelList =
  (mebel, catalogStatus, search) => (dispatch) => {
    const elements = mebel.filter((item) => {
      for (const [key, value] of Object.entries(item)) {
        if (key === catalogStatus) return value;
      }
    })[0][catalogStatus];

    dispatch(
      setFilteredMebel(
        search
          ? elements.filter((item) =>
              item.name.toLowerCase().startsWith(search.toLowerCase())
            )
          : elements
      )
    );
  };

export const handleKey = (e, search) => (dispatch) => {
  if (e.key === "Enter") {
    e.preventDefault();
    dispatch(setSearch(search));
  }
};
