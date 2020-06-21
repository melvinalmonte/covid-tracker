import {
  GET_COUNTRY_CASES_LOADING,
  GET_COUNTRY_CASES_SUCCESS,
  GET_COUNTRY_CASES_ERROR,
} from "../constants/actionTypes";

const initialState = {
  confirmed: "",
  recovered: "",
  deaths: "",
  lastUpdated: "",
  loading: false,
};

const getCases = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_CASES_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_COUNTRY_CASES_SUCCESS:
      return Object.assign({}, state, {
        confirmed: action.confirmed,
        recovered: action.recovered,
        deaths: action.deaths,
        lastUpdated: action.lastUpdated,
        loading: false,
      });
    case GET_COUNTRY_CASES_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default:
      return state;
  }
};

export default getCases;
