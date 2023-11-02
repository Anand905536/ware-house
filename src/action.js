export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_FILTER_CITY = "SET_FILTER_CITY";
export const SET_FILTER_CLUSTER = "SET_FILTER_CLUSTER";
export const SET_FILTER_SPACE = "SET_FILTER_SPACE";
export const FILTER_WAREHOUSE_DATA = "FILTER_WAREHOUSE_DATA";

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setCityFilter = (city) => ({
  type: SET_FILTER_CITY,
  payload: city,
});

export const setClusterFilter = (cluster) => ({
  type: SET_FILTER_CLUSTER,
  payload: cluster,
});

export const setSpaceFilter = (space) => ({
  type: SET_FILTER_SPACE,
  payload: space,
});

export const filterWarehouseData = () => ({
  type: FILTER_WAREHOUSE_DATA,
});
