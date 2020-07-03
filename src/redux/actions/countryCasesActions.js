import {
  GET_COUNTRY_CASES_LOADING,
  GET_COUNTRY_CASES_SUCCESS,
  GET_COUNTRY_CASES_ERROR
} from "../constants/actionTypes";
import Api from "../client/api";

export const loadCases = country => dispatch => {
  dispatch({ type: GET_COUNTRY_CASES_LOADING });
  Api.fetchCases(country)
    .then(response => {
      const res = response.data;
      dispatch({
        type: GET_COUNTRY_CASES_SUCCESS,
        confirmed: res.confirmed.value,
        recovered: res.recovered.value,
        deaths: res.deaths.value,
        lastUpdated: res.lastUpdate
      });
    })
    .catch(error => {
      dispatch({
        type: GET_COUNTRY_CASES_ERROR,
        error: error.response ? error.response.data : error.message
      });
    });
};
