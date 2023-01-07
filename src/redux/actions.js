import { setFilteredCatalog, setSearch } from "./reducers/catalog_slice";

export const filterdCatalogList =
  (catalog, catalogFilter, search) => (dispatch) => {
    const elements = catalog.filter((item) => item.name === catalogFilter)[0]
      .value;

    dispatch(
      setFilteredCatalog(
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
