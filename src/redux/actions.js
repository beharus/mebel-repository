import { setFilteredCatalog, setSearch } from "./reducers/catalog_slice";

export const filterdCatalogList =
  (catalog, catalogFilter, search) => (dispatch) => {
    const items = catalog.length
      ? catalog.filter((item) => item.name === catalogFilter)[0].value
      : [];

    const elements = search
      ? items.filter((elem) =>
          elem.name.toLowerCase().startsWith(search.toLowerCase())
        )
      : items;

    const result = [];
    for (let i = 0; i < elements.length; i += 16) {
      result.push(elements.slice(i, i + 16));
    }

    dispatch(setFilteredCatalog(result));
  };

export const handleKey = (e, search) => (dispatch) => {
  if (e.key === "Enter") {
    e.preventDefault();
    dispatch(setSearch(search));
  }
};
