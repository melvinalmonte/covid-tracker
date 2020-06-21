import {
  GET_ALL_COUNTRY_CASES_LOADING,
  GET_ALL_COUNTRY_CASES_SUCCESS,
  GET_ALL_COUNTRY_CASES_ERROR,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const getAllCases = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY_CASES_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_ALL_COUNTRY_CASES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    case GET_ALL_COUNTRY_CASES_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default:
      return state;
  }
};

export default getAllCases;
